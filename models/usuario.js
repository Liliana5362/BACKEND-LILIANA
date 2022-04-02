const {Schema,model}=require ("mongoose");

const UsuarioSchema=Schema({
  nombre:{
      type:String,
      required:[true, "El nombre es obligatorio"]
  
},
  correo:{
type:String,

unique:true
  
    },

 password:{
     type:String,
     required:[true, "La contraseña es obligatoria"],
 }
})