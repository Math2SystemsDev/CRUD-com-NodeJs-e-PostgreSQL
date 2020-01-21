const db = require('./_database');

async function selectData(){
    try {
        await db.connect();
        var resultQuery1 = await db.query(`SELECT * FROM aula`);
        var resultQuery2 = await db.query(`SELECT * FROM aluno`);
        var resultQuery3 = await db.query(`SELECT e.nome AS aula, p.nome AS aluno FROM aula AS e, aluno AS p, aula_aluno ep 
        WHERE ep.aula_id = e.id AND ep.aluno_id = p.id`);
        await db.end();

        console.log('Aulas:');
        console.log(resultQuery1.rows);
        console.log('Alunos:');
        console.log(resultQuery2.rows);
        console.log('Matriculas:');
        console.log(resultQuery3.rows);

    } catch (error) {
        console.log("houve um error:" + error)
    }
}

selectData();