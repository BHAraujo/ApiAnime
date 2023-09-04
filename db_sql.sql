create database dbAnime;

use dbAnime;

create table anime (
id int primary key auto_increment,
nome varchar(20),
protagonista varchar(20),
idade int
);
insert into anime(nome, protagonista, idade) VALUES ('One Piece', 'Luffy', 18);

select * from anime