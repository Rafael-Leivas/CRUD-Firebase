const { collection, doc, addDoc, getDocs, updateDoc, deleteDoc } = require('firebase/firestore');

const db = require('../db/firebase');
const server = require('../server');

const produtosRoutes = (server) => {

    server.post('/produto', async (req, res) => {
        try {
            const { nome_produto, preco } = req.body;

            if (!nome_produto || preco == null) {
                return res.status(400).send('Nome do produto e preço são obrigatórios');
            }

            const docRef = await addDoc(collection(db, 'produtos'), {
                nome_produto,
                preco,
            });
            
            res.status(201).send("Produto adicionado com id: " + docRef.id);
        } catch (error) {
            res.status(500).send('Erro ao adicionar produto: ' + error.message);
        };
    });
    
    server.get('/produtos', async (req, res) => {
        try {
           
            const busca = await getDocs(collection(db, 'produtos'));

            const produtos = busca.docs.map(doc => ({
                id: doc.id,
                ...doc.data()
            }));

            res.status(200).json(produtos);

        } catch (error) {
            res.status(500).send('Erro ao buscar produtos: ' + error.message);
        };
    });

    server.put('/produtos/:id', async (req, res) => {
        try {
            const { id } = req.params;
            const { nome_produto, preco } = req.body;

            if (!nome_produto || preco == null) {
                return res.status(400).send('Nome do produto e preço são obrigatórios');
            }

            await updateDoc(doc(db, 'produtos', id), {
                nome_produto,
                preco,
            });

            res.status(200).send('Produto atualizado com sucesso');
        } catch (error) {
            res.status(500).send('Erro ao atualizar produto: ' + error.message);
        };
    });

    server.delete('/produtos/:id', async (req, res) => {
        try {
            const { id } = req.params;

            await deleteDoc(doc(db, 'produtos', id));

            res.status(200).send('Produto deletado com sucesso');
        } catch (error) {
            res.status(500).send('Erro ao deletar produto: ' + error.message);
        };
    });

};

const clientesRoutes = server => {

    server.post('/cliente', async (req, res) => {
        try {
            const { nome_cliente, cpf } = req.body;

            if (!nome_cliente || !cpf) {
                return res.status(400).send('Nome do cliente e cpf são obrigatórios');
            }

            const docRef = await addDoc(collection(db, 'clientes'), {
                nome_cliente,
                cpf,
            });

            res.status(201).send("Cliente adicionado com id: " + docRef.id);
        } catch (error) {
            res.status(500).send('Erro ao adicionar cliente: ' + error.message);
        };
    });

    server.get('/clientes', async (req, res) => {
        try {
            const busca = await getDocs(collection(db, 'clientes'));

            const clientes = busca.docs.map(doc => ({
                id: doc.id,
                ...doc.data()
            }));

            res.status(200).json(clientes);

        } catch (error) {
            res.status(500).send('Erro ao buscar clientes: ' + error.message);
        };
    });

    server.put('/clientes/:id', async (req, res) => {
        try {
            const { id } = req.params;
            const { nome_cliente, cpf } = req.body;

            if (!nome_cliente || !cpf) {
                return res.status(400).send('Nome do cliente e cpf são obrigatórios');
            }

            await updateDoc(doc(db, 'clientes', id), {
                nome_cliente,
                cpf,
            });

            res.status(200).send('Cliente atualizado com sucesso');
        } catch (error) {
            res.status(500).send('Erro ao atualizar cliente: ' + error.message);
        };
    });

    server.delete('/clientes/:id', async (req, res) => {
        try {
            const { id } = req.params;

            await deleteDoc(doc(db, 'clientes', id));

            res.status(200).send('Cliente deletado com sucesso');
        } catch (error) {
            res.status(500).send('Erro ao deletar cliente: ' + error.message);
        };
    });

}

module.exports = produtosRoutes;
module.exports = clientesRoutes;