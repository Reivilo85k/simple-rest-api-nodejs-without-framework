const hostname = '127.0.0.1';
const port = 2000;

const server = require('./controller.js');

server.listen(port, hostname, () => {
    console.log('server running at http://${hostname}:${port}/')
});
