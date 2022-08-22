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
async function mostrarAutor(){
    const client = await pool.connect()
    const libros = await client.query('select * from autores')
    let libros_datos = libros.rows
    libros_datos = libros_datos.map(data => Object.values(data));
    client.release()
    return libros_datos
}

async function agregarLibro(){

}
async function mostrarLibro(){

}

module.exports = {agregarLibro,mostrarLibro,agregarAutor,mostrarAutor}


