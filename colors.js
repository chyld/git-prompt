const style = require("ansi-styles");

module.exports.underline = (color, text) => {
  return `${style.underline.open}${style[color].open}${text}${
    style[color].close
  }${style.underline.close}`;
};

module.exports.color = (color, text) => {
  return `${style[color].open}${text}${style[color].close}`;
};
