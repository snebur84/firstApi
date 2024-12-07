import http from 'http';
import { connectToDb } from './db';
import { handlePostUsuarios, handleGetUsuarios } from './routes';

const server = http.createServer((req, res) => {
    if (req.method === 'POST' && req.url === '/usuarios') {
        handlePostUsuarios(req, res);
    } else if (req.method === 'GET' && req.url === '/usuarios') {
        handleGetUsuarios(req, res);
    } else {
        res.writeHead(404, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ error: 'Rota não encontrada' }));
    }
});

async function startServer(): Promise<void> {
    try {
        await connectToDb();
        server.listen(3000, () => {
            console.log('API rodando na porta 3000');
        });
    } catch (err) {
        console.error('Erro ao inicializar o servidor:', err);
    }
}

startServer();
