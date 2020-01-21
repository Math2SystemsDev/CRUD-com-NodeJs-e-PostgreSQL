---- cria as aulas: ----
INSERT INTO aula (nome) VALUES ('Aula de Matemática');
INSERT INTO aula (nome) VALUES ('Aula de Inglês');
INSERT INTO aula (nome) VALUES ('Aula de Engenharia de software');

---- cria os alunos: ----
INSERT INTO aluno (nome) VALUES ('Matheus Farias');
INSERT INTO aluno (nome) VALUES ('João Silva');
INSERT INTO aluno (nome) VALUES ('Carolina Rodrigues');
INSERT INTO aluno (nome) VALUES ('Fernanda Blanco');

/* 
    Matricule os seguintes alunos em determinadas aulas
    usando o valor do seu ID:
    João Silva na Aula de Inglês, 
    o Matheus Farias na aula de matemática e Inglês,
    a Carolina Rodrigues na aula de engenharia 
    e a Fernanda Blanco em todas as aula.

    Sabendo que:
    ID da Aula de matemática = 1;
    ID da Aula de inglês = 2;
    ID da Aula de engenharia de software = 3;

    ID do Matheus Farias = 1; 
    ID do João Silva = 2;
    ID da Carolina Rodrigues = 3;
    ID da Fernanda Blanco = 4;

*/

INSERT INTO aula_aluno (aula_id,aluno_id) VALUES (2,2); -- João no inglês

INSERT INTO aula_aluno (aula_id,aluno_id) VALUES (1,1); -- Matheus na matemática
INSERT INTO aula_aluno (aula_id,aluno_id) VALUES (2,1); -- Matheus no inglês

INSERT INTO aula_aluno (aula_id,aluno_id) VALUES (3,3); -- Carolina na engenharia

INSERT INTO aula_aluno (aula_id,aluno_id) VALUES (1,4); -- Fernanda na matemática
INSERT INTO aula_aluno (aula_id,aluno_id) VALUES (2,4); -- Fernanda no inglês
INSERT INTO aula_aluno (aula_id,aluno_id) VALUES (3,4); -- Fernanda na engenharia
