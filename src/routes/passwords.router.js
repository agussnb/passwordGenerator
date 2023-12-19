import express from 'express'
import {generateRandomAlphabeticPassword,generateRandomAlphanumericPassword,generateRandomNumericPassword} from '../controllers/passwordController.js'

const router = express.Router()

//Ruta para generar una contraseña alfabetica con el valor predeterminado de caracteres (12)
router.get('/alphabetic', (req, res) => {
    const password = generateRandomAlphabeticPassword(12);
   
  
    res.render('alphabeticPassword', { password });
  });

  
//Rut para generar una contraseña numerica
router.get('/numeric', (req, res) => {
  const password = generateRandomNumericPassword(12);
 
  
  res.render('numericPassword', { password });
});
//Ruta para generar una contraseña alfanumerica
router.get('/alphanumeric', (req, res) => {
  const password = generateRandomAlphanumericPassword(12);
 
  
  res.render('alphanumericPassword', { password });
});


//Generar una contraseña con una longitud personalizada (Alfabetica)
router.get('/alphabetic/:length',(req,res)=>{
  const length = req.params.length
  const password = generateRandomAlphabeticPassword(length)

  res.json({password})
})
//Generar una contraseña con una longitud personalizada (Numerica)
router.get('/numeric/:length',(req,res)=>{
  const length = req.params.length
  const password = generateRandomNumericPassword(length)

  res.json({password})
})
//Generar una contraseña con una longitud personalizada (Alfanumerica)
router.get('/alphanumeric/:length',(req,res)=>{
  const length = req.params.length
  const password = generateRandomAlphanumericPassword(length)

  res.json({password})
})


  

export default router