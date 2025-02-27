require('dotenv').config();
const {MongoClient} = require('mongodb');

let singleton

async function connect() {

    if (singleton) return singleton;

    const client = new MongoClient(process.env.MONGO_URL);
    await client.connect();

    singleton = client.db(process.env.DATABASE);
    return singleton;
}

async function insert(livro){
    const db = await connect();
    return db.collection('livros').insertOne(livro);
}
async function findByName(name){
    const db = await connect();
    return db.collection('livros').findOne({'titulo': name});
}
async function findAll() {
    const db =  await connect();
    return db.collection('livros').find({}).toArray();
}

module.exports = {
    insert,
    findByName,
    findAll
}