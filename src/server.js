//node packet manager - npm
//npm init -y
//npm install express
//npm install nodemon
//npm install hbs

//importar as dependencias
const express = require("express");
const path = require("path");
const pages = require("./pages.js");

//iniciando o express
const server = express();
server
    //utilizar o body do req
    .use(express.urlencoded({extended: true}))
    //utilizando arquivos que não irão mudar
    .use(express.static("public"))

    //configurar template engine
    .set('views', path.join(__dirname, "views"))
    .set('view engine', 'hbs')

    //criando rotas
    .get('/',pages.index)
    .get('/orphanage',pages.orphanage)
    .get('/orphanages',pages.orphanages)
    .get('/create-orphanage',pages.createOrphanage)
    .post('/save-orphanage',pages.saveOrphanage)

//ligando o servidor
server.listen(5500)
