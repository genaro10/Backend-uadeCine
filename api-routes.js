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
//EndPoint para leer con filtro
router.post('/leerContacto/?idBusqueda',function(req,res)
{
    console.log("leer con filtro");
    apiController.getContactosById(req,res);
});
//EndPoint para insertar en la BD
router.post('/insertarContacto/Contacto',function(req,res)
{
    console.log(req.body);
    apiController.insertContacto(req,res);
});

//EndPoint para modificar en la BD
router.post('/modificarContacto/Contacto',function(req,res)
{
    apiController.updateContacto(req,res);
});

//EndPoint para eliminar en la BD
router.delete('/borrarContacto/Contacto',function(req,res)
{
    apiController.deleteContacto(req,res);
});
// Export API routes
module.exports = router;