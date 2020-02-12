const { connect } = require('./client');
const setupInput = function() {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  stdin.on('data', handleUserInput);
  stdin.resume();
  return stdin;
};

const handleUserInput = function(data) {
  if (data === '\u0003')
    connect().end();
};

module.exports = {
  setupInput
};