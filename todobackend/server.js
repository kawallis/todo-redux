const app = require('./lib/app');
const http = require('http');
require('./lib/connect');

const server = http.createServer(app);

const port = process.env.PORT || 3000;

server.listen(port, () => {
    console.log('server running on', server.address());
});