const path = require("path");

module.exports = {
  screenDir: path.join(__dirname, "../tests/referenceImages"),
  reportDir: path.join(__dirname, "../tests/report"),
  diffOptions: { threshold: 0.2 },
};
