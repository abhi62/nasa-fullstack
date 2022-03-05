const http = require('http');
const express = require('./app');

const server = http.createServer(express);

const PORT = process.env.PORT || 8000;

server.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
