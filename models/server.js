const express = require('express');
const {dbConnection}=require("../database/config");//importanto la conf de la conexion con la bd
const cors=require ("cors");



class Server{
constructor(){
this.app = express();
this.port=process.env.PORT;
this.usuariosPath="/api/usuarios";

//conectar BD
this.conectarDB();

this.middlewares();
//rutas
this.routes()
}

//llamando funcion para conectar base de datos
async conectarDB(){
await dbConnection();

}
//middlewares
middlewares(){
   
    
    //cors
this.app.use(cors());
  
//lectura y parseo deel body
this.app.use(express.json());


    //directorio público

this.app.use(express.static("public"))



}



//rutas
routes(){
this.app.use(this.usuariosPath, require("../routes/usuarios"));

//     this.app.get('/api', (req, res) => {
//         res.json({
//             msg:'bienvenidos al modulo 4'
//         });      
//       });

//       this.app.post('/api', (req, res) => {
//         res.status(201).json({
//             msg:'POST -Info creada'
//         });      
//       });
 
//       this.app.put('/api', (req, res) => {
//         res.json({
//             msg:'PUT - Info actualizada'
//         });      
//       });
      
//       this.app.delete('/api', (req, res) => {
//         res.json({
//             msg:'DELETE - info eliminada'
//         });
//     });
  
}


listen(){

this.app.listen(this.port, () => {
    console.log(`Escuchando en el puerto ${this.port}`)
  });

};

}
module.exports=Server;

