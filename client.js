const net = require('net');
const {IP, PORT } = require('./constants');

/**
 * Establishes connection with the game server
 */
const connect = function() {
  const conn = net.createConnection({
    host: IP,
    port:PORT
  });
  // interpret incoming data as text
  conn.setEncoding('utf8');
  conn.on('connect',()=>{
    console.log("Successfully connected to game server");
    conn.write('Name: MSN');
    
    /*  setInterval(() => {
      conn.write('Move: up');
    },100);

    setInterval(() => {
      conn.write('Move: right');
    },200); */

    
    
    conn.on('data',(data) => {
      console.log('Server Says: ', data);
    });

    
  });
  return conn;
};
module.exports = { connect
};