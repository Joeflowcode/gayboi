// One-off: extract inline <style> and <script> from index.html into shared assets,
// then rewire index.html to link them. Idempotent-ish: only runs if inline blocks exist.
const fs = require("fs");
const path = require("path");

const root = path.join(__dirname, "..");
const indexPath = path.join(root, "index.html");
let html = fs.readFileSync(indexPath, "utf8");

const styleMatch = html.match(/  <style>\n([\s\S]*?)\n  <\/style>/);
const scriptMatch = html.match(/  <script>\n([\s\S]*?)\n  <\/script>/);

if (!styleMatch || !scriptMatch) {
  console.log("Inline blocks not found — already extracted? Aborting without changes.");
  process.exit(0);
}

const css = styleMatch[1];
// strip one level of indentation (4 spaces) for a clean standalone .css
const cssClean = css.replace(/^    /gm, "");

let js = scriptMatch[1];
// strip 4-space indent for clean standalone file
js = js.replace(/^    /gm, "");

fs.writeFileSync(path.join(root, "assets", "styles.css"), cssClean.trimEnd() + "\n");
fs.writeFileSync(path.join(root, "assets", "app.js"), js.trimEnd() + "\n");

html = html.replace(styleMatch[0], '  <link rel="stylesheet" href="assets/styles.css" />');
html = html.replace(scriptMatch[0], '  <script src="assets/app.js" defer></script>');

fs.writeFileSync(indexPath, html);
console.log("Extracted styles.css (" + cssClean.length + " chars) and app.js (" + js.length + " chars); index.html rewired.");
