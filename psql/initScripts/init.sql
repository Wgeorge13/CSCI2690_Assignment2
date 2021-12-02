create database testdb;

\c testdb

create table testTable(id int,title varchar(100),primary key(id));

insert into testTable values(1,'test title1');

insert into testTable values(2,'test title2');