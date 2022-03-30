
const {response, request}=require("express");

const usuariosGet=(req=request, res=response) => {

//    const query=req.query
   const {nombre="no name", apikey, limit=5, page=1}=req.query

    res.json({
        msg:'bienvenidos al modulo 4',
        nombre, 
        apikey, 
        limit,
        page,
    });      
  }

const usuarioPost= (req=request, res) => {
const datos= req.body


    res.json({
        msg:'POST -Info creada',
        datos,
    }); 
}     




  const usuarioPut=(req, res) => {
    const id=req.params.id;
  res.json({
      msg:'PUT - info eliminada',
      id,
  });
};


  const usuarioDelete=(req, res) => {
      const id=req.params.id;
    res.json({
        msg:'DELETE - info eliminada',
        id,
    });
};


module.exports={
  usuariosGet,
  usuarioPost,
  usuarioPut,
  usuarioDelete,
};