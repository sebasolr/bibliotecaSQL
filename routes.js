const router = require('express').Router()
//const {agregarLibro,mostrarLibro,agregarAutor,mostrarAutor} = require('./funciones/crud')
const fn = require('./funciones/crud')

router.get('/autores', async(req,res)=>{
    const ayuda =  await fn.mostrarAutor()
    let datos = {autores: ayuda }
    res.render('autores.html',datos)
    
})
//traer info del front
router.post('/libros/:id',async (req,res)=>{
const id_libro = req.params.id;
const id_autor= req.body.id_autor;
await fn.autorlibro(id_libro,id_autor)
res.redirect(`/libros/${id_libro}`)
})
//mostrar en el front
router.get('/libros/:id', async(req,res)=>{
    const id = req.params.id
   // console.log(id);
    let libro =  await fn.libro(id)
    
    const autores = await fn.mostrarAutor()
    const autor ={autores: autores}

    const union = await fn.unirtablas(id)
    console.log(union);
    // console.log(libro[0]);
    res.render('infolibro.html',{libros :libro[0], autores: autores, union: union})
    
    
})


router.post('/autores', async (req,res)=>{
    const datos =req.body;
    const nombre = datos.nombre;
    const apellido = datos.apellido;
    const note = datos.note;
    await fn.agregarAutor(nombre,apellido,note)
    res.redirect('/autores')
})

router.get('/libros',async (req,res)=>{
    const ayuda =  await fn.mostrarLibro()
    let datos = {libros: ayuda }
    res.render('libros.html', datos)
})

router.post('/libros' , async (req , res)=>{
    const datos =req.body;
    const titulo = datos.titulo;
    const descripcion = datos.descripcion;
    //console.log( titulo, descripcion);
    await fn.agregarLibro(titulo,descripcion)
    res.redirect('/libros')
})


module.exports  = router