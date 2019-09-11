const { createServer } = require('http');

// Express App
const app = require('./server/app');

const PORT = process.env.PORT || 3000;
const HOST = process.env.HOST || '0.0.0.0';
const server = createServer(app);

server.listen(PORT, HOST, () => {
  console.log(`The server is running at http://${HOST}:${PORT}`);
});
