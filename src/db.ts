import { MongoMemoryServer } from 'mongodb-memory-server';
import { MongoClient, Db, Collection } from 'mongodb';

let db: Db;
let collection: Collection;

export async function connectToDb(): Promise<void> {
    const mongoServer = await MongoMemoryServer.create();
    const uri = mongoServer.getUri();

    const client = new MongoClient(uri);
    await client.connect();

    db = client.db('userDB');
    collection = db.collection('usuarios');
}

export function getCollection(): Collection {
    if (!collection) {
        throw new Error('Banco de dados não inicializado.');
    }
    return collection;
}
