---- Verificar Dados: ----

SELECT * FROM aula;
SELECT * FROM aluno;
SELECT * FROM aula_aluno;

--- e = evento, p = participante ---
SELECT e.nome AS aula, p.nome AS aluno FROM aula AS e, 
aluno AS p, aula_aluno ep 
WHERE ep.aula_id = e.id AND ep.aluno_id = p.id;