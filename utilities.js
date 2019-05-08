const style = require("ansi-styles");

// util.inspect(style.green.open + "hello" + style.green.close)
// >> '\u001b[32mhello\u001b[39m'

function esc(str) {
  return "\001" + str + "\002";
}

module.exports.display = (local, upstream, ahead, behind, dirty) => {
  const a = `${esc(style.blue.open)}${local}${esc(style.blue.close)}`;
  const b = `${esc(style.red.open)}${upstream}${esc(style.red.close)}`;
  const c = `${esc(style.underline.open)}${ahead}${esc(style.underline.close)}`;
  const d = `${esc(style.underline.open)}${behind}${esc(
    style.underline.close
  )}`;
  const e = dirty ? "😳" : "😎";
  const output = `${a} ${b} ${c}/${d} ${e} `;

  process.stdout.write(output);
};
