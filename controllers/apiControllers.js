//codigo puro javaScript.
var Contactos = require('../models/ContactoModel'); //import


var Contactos = require('../models/ContactoModel');
var bodyParser = require('body-parser');

    
let getContactos = (req, res) =>
{      
    console.log("llegue a leer");
    //Listar resultados
    Contactos.find()
    .then
    (
        (listaContactos)=>
        {
            res.send(listaContactos); //devuelvo resultado query   
            //console.log(listaContactos);    
        },
        (err)=>{console.log(err);}
    )       
};
let getContactosById = (req, res) =>
{      
    console.log("llegue a leer con filtro");
    //Obtener id busqueda
    let idBusqueda = {dni: req.body.dniBuscado};
    console.log(idBusqueda);
    //Listar resultados
    Contactos.find(idBusqueda)
    .then
    (
        (listaContactos)=>
        {
            res.send(listaContactos); //devuelvo resultado query   
            console.log(listaContactos);    
        },
        (err)=>{console.log(err);}
    )       
};

let insertContacto = (req,res) =>
{
    console.log(req.body);
    var newContacto = Contactos({
        nombre: req.body.nombre,
        apellido: req.body.apellido,
        idUsuario: req.body.idUsuario,
        dni: req.body.dni,
        mail: req.body.mail,
        contraseña: req.body.contraseña
    });
    newContacto.save().
    then
    (
        (newContacto)=>
        {
            res.send(newContacto); //devuelvo resultado query       
        },
        (err)=>{console.log(err);}
    ) 
}
let updateContacto = (req,res) => 
{
    let id = { dni : req.body.dniBuscado};
    let newContacto = {nombre: req.body.newData.nombre};
    console.log(id);
    console.log(newContacto);
    Contactos.findOneAndUpdate(id,newContacto,{new:true},function(err, todo)
    {
        (err)=>{console.log(err);}
        (newContacto)=>
        {
            res.send(newContacto); //devuelvo resultado query       
        };
    
    });
}

let deleteContacto = (req,res)=>
{
    let id = { dni : req.body.dniEliminado};
    Contactos.deleteOne(id)
    .then
    (
        (resultado)=>
        {
            res.send(resultado); //devuelvo resultado        
        },
        (err)=>{console.log(err);}
    )       
   
}
module.exports = {getContactos,insertContacto,updateContacto,deleteContacto,getContactosById};


 //+++++++++++++++++++++++++++++COMENTARIOS++++++++++++++++++++++++++++++++++++++++++++++++++++
let getComentarios = (req, res) =>
{      
    console.log("llegue a leer");
    //Listar resultados
    Comentarios.find()
    .then
    (
        (listaComentarios)=>
        {
            res.send(listaComentarios); //devuelvo resultado query   
             
        },
        (err)=>{console.log(err);}
    )       
};

let getComentariosByIdUasurio = (req, res) =>
{      
    console.log("Leer comentarios con filtro de usuarios");
    //Obtener id busqueda
    let idUasurioBusqueda = {idUsuario: req.body.usrBuscado};
    console.log(idUasurioBusqueda);
    //Listar resultados
    Comentarios.find(idUasurioBusqueda)//select=find
    .then
    (
        (listaComentarios)=>
        {
            res.send(listaComentarios); //devuelvo resultado query   
            console.log(listaComentarios);    
        },
        (err)=>{console.log(err);}
    )       
};


let insertComentario = (req,res) =>
{
    console.log(req.body);

    var newComentario = Comentario({
        idUsuario: req.body.idUsuario,
        idPelicula: req.body.idPelicula,
        idComentario:req.body.idComentario,
        comentario: req.body.comentario,
      
    });
    newComentario.save().
    then
    (
        (newComentario)=>
        {
            res.send(newComentario); //devuelvo resultado query       
        },
        (err)=>{console.log(err);}
    ) 
}

let updateComentario = (req, res) => 
{
    let id = { dni : req.body.Buscado};
    let newContacto = {nombre: req.body.newData.nombre};
    console.log(id);
    console.log(newContacto);
    Contactos.findOneAndUpdate(id,newContacto,{new:true},function(err, todo)
    {
        (err)=>{console.log(err);}
        (newContacto)=>
        {
            res.send(newContacto); //devuelvo resultado query       
        };
    
    });
}
//++++++++++++++++++++++Guardar puntuacion++++++++++++++++++++++++

module.exports = {getContactos,insertContacto,updateContacto,deleteContacto,getContactosById,getComentarios,getComentariosByIdUasurio,insertComentario,updateComentario};

