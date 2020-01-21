const db = require('./_database');

async function dropTables(){
    try {
        await db.connect();

        await db.query(`DROP TABLE aula CASCADE`);
        await db.query(`DROP TABLE aluno CASCADE`);
        await db.query(`DROP TABLE aula_aluno CASCADE`);

        await db.end();
        console.log('Tabelas Dropadas');

    } catch (error) {
        console.log("houve um erro:" + error)
    }
    
}

dropTables();