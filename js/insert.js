const db = require('./_database');

async function insertData(){
    try{
        await db.connect();

        /* Criando aulas */
        await db.query("INSERT INTO aula (nome) VALUES ('Aula de Matemática')");
        await db.query("INSERT INTO aula (nome) VALUES ('Aula de Inglês')");
        await db.query("INSERT INTO aula (nome) VALUES ('Aula de Engenharia de software')");

        /* Criando alunos */
        await db.query("INSERT INTO aluno (nome) VALUES ('Matheus Farias')");
        await db.query("INSERT INTO aluno (nome) VALUES ('João Silva')");
        await db.query("INSERT INTO aluno (nome) VALUES ('Carolina Rodrigues')");
        await db.query("INSERT INTO aluno (nome) VALUES ('Fernanda Blanco')");

        /* Criando matriculas */
        await db.query("INSERT INTO aula_aluno (aula_id,aluno_id) VALUES (2,2)");
        await db.query("INSERT INTO aula_aluno (aula_id,aluno_id) VALUES (1,1)");
        await db.query("INSERT INTO aula_aluno (aula_id,aluno_id) VALUES (2,1)");
        await db.query("INSERT INTO aula_aluno (aula_id,aluno_id) VALUES (3,3)");
        await db.query("INSERT INTO aula_aluno (aula_id,aluno_id) VALUES (1,4)");
        await db.query("INSERT INTO aula_aluno (aula_id,aluno_id) VALUES (2,4)");
        await db.query("INSERT INTO aula_aluno (aula_id,aluno_id) VALUES (3,4)");

        await db.end();
        console.log("Dados inseridos com sucesso");

    } catch(error){
        console.log("houve um erro:" + error);
    }

}

insertData();