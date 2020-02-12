let connection;
const { connect } = require('./client');
const setupInput = function(conn) {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  stdin.on('data', handleUserInput);
  stdin.resume();
  return stdin;
};

const handleUserInput = function(data) {
  if (data === '\u0003') {
    process.exit();
  }
  if (data === 'w') {
    connection.write("Move: up");
  }
  if (data === 'a') {
    connection.write("Move: left");
  }
  if (data === 's') {
    connection.write("Move: down");
  }
  if (data === 'd') {
    connection.write("Move: right");
  }
  if (data === 'e') {
    connection.write("Say: Hai Friends!!!!");
  }

  if (data === 'p') {
    connection.write("Say: Move fast");
  }

  if (data === 'q') {
    connection.write("Say: Move away");
  }

  if (data === 'r') {
    connection.write("Say: Bye");
  }
};

module.exports = {
  setupInput
};