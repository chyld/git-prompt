#!/usr/bin/env node

const execa = require("execa");
const { parse } = require("./parser.js");

(async () => {
  try {
    const { stdout } = await execa("git", [
      "status",
      "--porcelain=2",
      "--branch"
    ]);
    parse(stdout.split("\n"));
  } catch (error) {
    process.stdout.write("[.]");
  }
})();
