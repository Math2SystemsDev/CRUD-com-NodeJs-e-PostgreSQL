const db = require('./_database');

async function updateData(){
    try {
        await db.connect();
        await db.query("UPDATE aula_aluno SET (aula_id,aluno_id) = (1,2) WHERE aluno_id = 2");
        await db.query("UPDATE aula_aluno SET (aula_id,aluno_id) = (2,3) WHERE aluno_id = 3");
        await db.end();

        console.log('Dados Atualizados com sucesso');    
    } catch (error) {
        console.log('houve um erro:' + error);
    }
}

updateData();