import { Register } from '../models/registro.js';


export const crear_usuario = async (req, res) => {
   const{name, surname, email, contraseña }= req.body
   const  newUser = await Register.create({
      name,
      surname,
      email,
      contraseña
   })
   console.log(newUser)
   res.send('el usuario fue creado')
   };

export const get_registers = async (req, res) => {
   res.send('hola')
  
};




