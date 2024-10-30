const server = require('./server');

const produtosRoutes = require('./rotas/produto');

produtosRoutes(server);

server.listen(3000, () => {

    console.log('Servidor rodando na porta 3000');

}
);