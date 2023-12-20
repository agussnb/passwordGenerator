import express from "express";
import handlebars from 'express-handlebars';
import __dirname from './utils.js';
import path from 'path'

//Importaciones de routers
import viewsRouter from './routes/views.router.js'
import passwordRouter from './routes/passwords.router.js'
const app = express()

//Settins de JSON en caso de que sean necesarias.

app.use(express.json());
app.use(express.urlencoded({extended:true}))

//Servidor

const PORT = 9090

app.listen(PORT, ()=>{
    console.log('Server listening on PORT: '+PORT)
})

//Configuracion del motor de plantillas Handlebars

app.engine('handlebars', handlebars.engine());
app.set('views',__dirname+'/views');
app.use(express.static(path.join(__dirname, 'public')));
app.set('view engine', 'handlebars');



app.use(express.static(__dirname+'/public'));

//Declaracion de rutas.

app.use('/',viewsRouter);
app.use('/passwords',passwordRouter)
