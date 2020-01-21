---- Criação das tabelas: ----
CREATE TABLE aula(
    id serial PRIMARY KEY,
    nome VARCHAR (50) UNIQUE NOT NULL
);

CREATE TABLE aluno(
    id serial PRIMARY KEY,
    nome VARCHAR (50) UNIQUE NOT NULL
);

CREATE TABLE aula_aluno(
    aula_id integer NOT NULL,
    aluno_id integer NOT NULL,
    PRIMARY KEY (aula_id, aluno_id),
    FOREIGN KEY (aula_id) REFERENCES aula (id),
    FOREIGN KEY (aluno_id) REFERENCES aluno (id)  
);
