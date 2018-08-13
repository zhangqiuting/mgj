create database mgj

use logintable

create table logintable(
       username varchar(20) primary key,
       userpass varchar(16) not null
)

insert into logintable(username,userpass) values('a123456789','123123123')
insert into logintable(username,userpass) values('b123456789','123123123')
insert into logintable(username,userpass) values('c123456789','123123123')
insert into logintable(username,userpass) values('d123456789','123123123')

select * from logintable

select * from logintable where username='张' and userpass='123'

delete from  logintable where username='qwertyu'