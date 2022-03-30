const {Router}= require("express");
const {
    usuariosGet,
    usuarioPost,
    usuarioPut, 
    usuarioDelete 
}=require("../controllers/usuarios.controller");


const router = Router();


    router.get('/', usuariosGet );

    router.post('/', usuarioPost );

      router.put('/:id', usuarioPut );
      
      router.delete('/:id', usuarioDelete );

    module.exports=router;
  

