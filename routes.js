const router = require('express').Router()
//const {agregarLibro,mostrarLibro,agregarAutor,mostrarAutor} = require('./funciones/crud')
const fn = require('./funciones/crud')


router.get('/' , (req , res)=>{
    // router code here
})


router.post('/autores' , (req , res)=>{
    const datos =req.body;
    const nombre = datos.nombre;
    const apellido = datos.apellido;
    const note = datos.note;
    fn.agregarAutor(nombre,apellido,note)
    
})
router.get('/libros',(req,res)=>{
   
})
router.post('/libros' , (req , res)=>{
    const datos =req.body;
    const titulo = datos.titulo;
    const descripcion = datos.descripcion;
    console.log( titulo, descripcion);
})

module.exports  = router