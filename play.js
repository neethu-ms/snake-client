const { connect } = require('./client');
console.log('Connecting ...');
connect();

const setupInput = function(handleUserInput) {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  stdin.on('data', handleUserInput);
  stdin.resume();
  return stdin;
};

const handleUserInput = function() {
  connect().on('data',(data) => {
    if (data === '\u0003')
      process.exit();
  });
  
};