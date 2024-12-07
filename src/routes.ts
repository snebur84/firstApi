import { IncomingMessage, ServerResponse } from 'http';
import { getCollection } from './db';

export async function handlePostUsuarios(req: IncomingMessage, res: ServerResponse): Promise<void> {
    let body = '';

    req.on('data', chunk => {
        body += chunk;
    });

    req.on('end', async () => {
        try {
            const { nome, email, telefone, data_cadastro } = JSON.parse(body);

            if (!nome || !email || !telefone) {
                sendJsonResponse(res, 400, { error: 'Campos obrigatórios: nome, email, telefone, data_cadastro' });
                return;
            }

            const user = { nome, email, telefone, data_cadastro: new Date().toISOString() };
            const result = await getCollection().insertOne(user);

            sendJsonResponse(res, 201, { message: 'Usuário cadastrado com sucesso', userId: result.insertedId });
        } catch (err) {
            sendJsonResponse(res, 500, { error: 'Erro ao processar a requisição' });
        }
    });
}

export async function handleGetUsuarios(_req: IncomingMessage, res: ServerResponse): Promise<void> {
    try {
        const usuarios = await getCollection().find().toArray();
        sendJsonResponse(res, 200, usuarios);
    } catch (err) {
        sendJsonResponse(res, 500, { error: 'Erro ao listar usuários' });
    }
}

function sendJsonResponse(res: ServerResponse, statusCode: number, data: any): void {
    res.writeHead(statusCode, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify(data));
}
