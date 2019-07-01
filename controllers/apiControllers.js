//codigo puro javaScript.
var Contactos = require('../models/ContactoModel'); //import
var Comentarios=require('../models/ComentarioModel')



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
let getContactosById= (req, res) =>
{      
    console.log("llegue a leer con filtro");
    //Obtener id busqueda
    let idBusqueda = {idUsuario: req.body.idUsuario,contraseña:req.body.contraseña};
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
      

}

let insertContacto = (req,res) =>
{
    console.log(req.body);
    var newContacto = Contactos({
        idUsuario:req.body.idUsuario,
        nombre: req.body.nombre,
        apellido: req.body.apellido,
        
        dni: req.body.dni,
        mail: req.body.mail,
        contraseña: req.body.contraseña
    });
    Contactos.findOne({
        idUsuario:req.body.idUsuario
    })
        .then(usuario=>{
            if(!usuario){
                Contactos.create(newContacto)
                    .then(user=>{
                        res.json("registrado")
                    })
                    .catch(err=>{
                        res.json("Usuario ya existe!")
                    })
            }else{
                res.json("ya existe el usuario")
            }
        })
    .catch(err=>{
        res.json("error")
    })
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

let deleteComentario = (req,res)=>
{
    let id = { idUsuario : req.body.idUsuario,idPelicula:req.body.idPelicula,calificacion:req.body.calificacion};
  
    Comentarios.deleteOne(id)
    
    .then
    (
        (resultado)=>
        {
            res.send(resultado);
             //devuelvo resultado        
        },
        (err)=>{console.log(err);}
    )      
   
}

let getComentariosByIdUasurio = (req, res) =>
{      
    console.log("Leer comentarios con filtro de usuarios");
    //Obtener id busqueda
    let idUasurioBusqueda = {idUsuario: req.body.idUsuario};
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
        (err)=>{console.log(err," ERROR");}
    )       
};


let insertComentario = (req,res) =>
{
    console.log(req.body);

    var newComentario = Comentarios({
        idUsuario: req.body.idUsuario,
        idPelicula: req.body.idPelicula,
        calificacion:req.body.calificacion,
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

module.exports = {deleteComentario,getContactos,insertContacto,updateContacto,deleteContacto,getContactosById,getComentarios,getComentariosByIdUasurio,insertComentario,updateComentario};

