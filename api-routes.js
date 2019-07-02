// Initialize express router
let router = require('express').Router();
let apiController = require('./controllers/apiControllers');
       
    

// Set default API response
router.get('/', function (req, res) 
{
    res.json(
    req.body
    
    );
});

//EndPoint para leer toda la base
router.get('/leerContacto',function(req,res)
{
    console.log("leer");
    apiController.getContactos(req,res);
});

router.get('/leerComentario',function(req,res)
{
    console.log("leer");
    apiController.getComentarios(req,res);
});
//EndPoint para leer con filtro
router.post('/leerContacto/?idBusqueda',function(req,res)
{
    console.log("leer con filtro");
    apiController.getContactosById(req,res);
});
router.post('/leerComentario/?idBusqueda',function(req,res)
{
    console.log("leer con filtro");
    apiController.getComentariosByIdUasurio(req,res);
});
router.post('/leerComentario/?idBusquedaa',function(req,res)
{
    console.log("leer con filtro");
    apiController.getComentariosDelUsuario(req,res);
});
router.post('/leerComentario/?idBusquedaUsuarioComunidad',function(req,res)
{
    console.log("leer con filtro");
    apiController.getComentariosDelUsuarioComunidad(req,res);
});
//EndPoint para insertar en la BD
router.post('/insertarContacto/Contacto',function(req,res)
{
    console.log(req.body);
    apiController.insertContacto(req,res);
});

router.post('/insertarComentario/Comentario',function(req,res)
{
    console.log(req.body);
    apiController.insertComentario(req,res);
});

//EndPoint para modificar en la BD
router.post('/modificarContacto/Contacto',function(req,res)
{
    apiController.updateContacto(req,res);
});

router.post('/modificarComentario/Comentario',function(req,res)
{
    apiController.updateComentario(req,res);
});

//EndPoint para eliminar en la BD
router.delete('/borrarContacto/Contacto',function(req,res)
{
    apiController.deleteContacto(req,res);
});
router.delete('/borrarComentario/Comentario',function(req,res)
{
    apiController.deleteComentario(req,res);
});
// Export API routes
module.exports = router;