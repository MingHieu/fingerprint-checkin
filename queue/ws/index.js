const { Server } = require('socket.io');

let io;

const create = (httpServer) => {
  io = new Server(httpServer, {
    /* options */
  });

  io.on('connection', (socket) => {
    // ...
  });
};

/**
 * 
 * @returns {Server}
 */
const get = () => {
  return io;
};

module.exports = {
  create,
  get,
};
