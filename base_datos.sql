create database biblioteca2;

create table autores (
    id serial primary key,
    nombre varchar(100) not null,
    apellido varchar(100) not null,
    nota text not null    
)
create table libros (
    id serial primary key,
    titulo varchar(250) not null,
    descripcion text not null
)
create table autor_libro(
    libro_id int references libros(id),
    autor_id int references autores(id),
    primary key (libro_id, autor_id) 
)
    -- foreign key (autor_id) references autores(id)

select autores.nombre, autores.apellido, lib.titulo 
from autores join autor_libro as aut on autores.id=aut.autor_id
join libros as lib on lib.id=aut.libro_id 
where lib.id = $1;

select autores.nombre, autores.apellido, lib.titulo 
from autores join autor_libro as aut on autores.id=aut.autor_id
join libros as lib on lib.id=aut.libro_id 
where autores.id= $1;

delete from autor_libro;
delete from libros;
delete from autores;
