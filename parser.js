const chalk = require("chalk");

module.exports.parse = lines => {
  if (lines.length == 0) return;

  let local = "";
  let upstream = "";
  let ahead = 0;
  let behind = 0;
  let dirty = false;

  lines.forEach(line => {
    if (line[0] == "#") {
      const sections = line.split(" ");

      switch (sections[1]) {
        case "branch.head":
          local = sections[2];
          break;
        case "branch.upstream":
          upstream = sections[2];
          break;
        case "branch.ab":
          ahead = parseInt(sections[2]);
          behind = Math.abs(parseInt(sections[3]));
      }
    } else {
      dirty = true;
    }
  });

  console.log(
    chalk.underline.blue(local),
    chalk.underline.red(upstream),
    `${chalk.blue(ahead)}/${chalk.red(behind)}`,
    dirty ? "+" : "-"
  );
};
