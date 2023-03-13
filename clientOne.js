let net = require('net');

let client = new net.Socket();

client.connect(3000, '127.0.0.1', function(){
    console.log('Connected');
    client.write('Hi From Client 1');
});

client.on('data', function(data) {
    console.log('Recebido: ' + data);
    client.destroy(); 
});

client.on('close', function() {
    console.log('Connection closed');
});

