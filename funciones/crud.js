const pool = require('./conexion.js')

async function agregarAutor(nombre,apellido,nota){
    const client = await pool.connect()
    const libro =  await client.query({
        text:`insert into autores(nombre,apellido,nota)values($1,$2,$3)`,
        values:[nombre, apellido, nota]
        })
        console.log("libro okey");
        client.release()
    
}
async function libro (id){
    const client = await pool.connect()
    const libro = await client.query({
        text:`select * from libros where id=${id}`,
        rowMode: 'object' })
    client.release()
    return libro.rows
}
async function mostrarAutor(){
    const client = await pool.connect()
    let datos;
    datos  = await client.query({
        text: "SELECT * from autores",
        rowMode: 'object'
    })

    /* let libros_datos = libros.rows
    libros_datos = libros_datos.map(data => Object.values(data)); */
    client.release()
    return datos.rows
}

async function agregarLibro(titulo,descripcion){
    const client = await pool.connect()
    const addlibro =  await client.query({
        text:`insert into libros(titulo, descripcion)values($1,$2)`,
        values:[titulo, descripcion]
        })
        console.log("libro okey");
        client.release()
}
async function mostrarLibro(){
    const client = await pool.connect()
    let datos;
    datos  = await client.query({
        text: "SELECT * from libros",
        rowMode: 'objet'
    })
    client.release()
    return datos.rows
}
async function autorlibro(id_libro,id_autor){
    const client = await pool.connect()
    const agregarAL = await client.query({
        text:'insert into autor_libro (libro_id, autor_id) values ($1, $2)',
        values:[id_libro, id_autor]
    }) 
    client.release()
}

async function unirtablas (id_libro){
    const client = await pool.connect()
    const unir = await client.query({
        text: 'select autores.nombre, autores.apellido, lib.titulo from autores join autor_libro as aut on autores.id=aut.autor_id join libros as lib on lib.id=aut.libro_id where lib.id = $1;',
        values:[id_libro]
    })
    client.release()
    return unir.rows
}
async function mostrarallAutores(id){
    const client = await pool.connect()
    const libros = await client.query({
        text: 'select autores.nombre, autores.apellido, lib.titulo from autores join autor_libro as aut on autores.id=aut.autor_id join libros as lib on lib.id=aut.libro_id where autores.id = $1;',
        values:[id]
    })
    client.release()
    return libros.rows
}
module.exports = {agregarLibro,mostrarLibro,agregarAutor,mostrarAutor,libro,autorlibro, unirtablas,mostrarallAutores}


