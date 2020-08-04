const jsonServer = require('json-server');

const server = jsonServer.create();
const router = jsonServer.router('db.json');
const middlewares = jsonServer.defaults({ static: './build' });

const port = process.env.PORT || 8080;

server.use(middlewares);
server.use('/api', router);
server.use((req, res) => {
  res.sendFile(`${__dirname}/build/index.html`);
});
server.listen(port, () => {
  console.log(`JSON Server is running in ${port}`);
});
