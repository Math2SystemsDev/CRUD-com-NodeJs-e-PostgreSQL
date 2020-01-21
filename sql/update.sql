/* 
    Mude a matricula do João Silva para aula de matemática
    e a Carolina Rodrigues para aula de inglês

    Sabendo que:
    ID da Aula de matemática = 1;
    ID da Aula de inglês = 2;
    ID do João Silva = 2;
    ID da Carolina Rodrigues = 3;
*/

-- updating João to matemática:
UPDATE aula_aluno SET (aula_id,aluno_id) = (1,2) WHERE aluno_id = 2
-- updating Carolina to inglês:
UPDATE aula_aluno SET (aula_id,aluno_id) = (2,3) WHERE aluno_id = 3

-- verifying João: 
SELECT aula_id,aluno_id FROM aula_aluno WHERE aluno_id = 2
-- verifying Carolina:
SELECT aula_id,aluno_id FROM aula_aluno WHERE aluno_id = 3
