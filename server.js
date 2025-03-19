// server.js
const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router('produtos.json'); // O nome do arquivo JSON onde os dados estão armazenados
const middlewares = jsonServer.defaults();

server.use(middlewares);
server.use(router);

server.listen(3003, () => {
  console.log('JSON Server is running on http://localhost:3003');
});
