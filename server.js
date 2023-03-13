const net = require('net');
const { Worker, isMainThread, parentPort } = require('worker_threads');

if (isMainThread) {
  const server = net.createServer(socket => {
    const worker = new Worker(__filename);
    worker.on('message', message => {
      socket.write(message);
      socket.end();
    });
    socket.on('data', data => worker.postMessage(data.toString()));
  }).listen(3000);
} else {
  
  parentPort.on('message', message => {
    if (message === message) {
      console.log(message)  
      parentPort.postMessage('Hello from the server!');
    }
  });
}


