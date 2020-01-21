const db = require('./_database');

async function createTables() {
    try {
        await db.connect();

        await db.query(`CREATE TABLE aula(
        id serial PRIMARY KEY,
        nome VARCHAR (50) UNIQUE NOT NULL
        )`);

        await db.query(`CREATE TABLE aluno(
        id serial PRIMARY KEY,
        nome VARCHAR (50) UNIQUE NOT NULL
        )`);

        await db.query(`CREATE TABLE aula_aluno(
        aula_id integer NOT NULL,
        aluno_id integer NOT NULL,
        PRIMARY KEY (aula_id, aluno_id),
        FOREIGN KEY (aula_id) REFERENCES aula (id),
        FOREIGN KEY (aluno_id) REFERENCES aluno (id)  
        )`);

        await db.end();

        console.log("Tabelas Criadas");
        
    } catch (error) {
        console.log("houve um erro:" + error)
    }

}

createTables();