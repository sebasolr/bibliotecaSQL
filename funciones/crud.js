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

}
async function agregarLibro(){

}
async function mostrarLibro(){

}

module.exports = {agregarLibro,mostrarLibro,agregarAutor,mostrarAutor}


