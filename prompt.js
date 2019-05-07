const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  terminal: false
});

const lines = [];

rl.on("line", line => {
  lines.push(line);
});

rl.on("close", () => {
  let local = "";
  let upstream = "";
  let ahead = 0;
  let behind = 0;
  let dirty = false;

  lines.forEach(line => {
    if (line[0] == "#") {
      const sections = line.split(" ");

      if (sections[1] == "branch.head") {
        local = sections[2];
      }

      if (sections[1] == "branch.upstream") {
        upstream = sections[2];
      }

      if (sections[1] == "branch.ab") {
        ahead = parseInt(sections[2]);
      }

      if (sections[1] == "branch.ab") {
        behind = Math.abs(parseInt(sections[3]));
      }
    } else {
      dirty = true;
    }
  });

  console.log(
    "local:",
    local,
    "upstream:",
    upstream,
    "ahead:",
    ahead,
    "behind:",
    behind,
    "dirty:",
    dirty
  );
});
