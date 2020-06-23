const express = require('express')
const mongoose = require('mongoose');
const bodyParser = require('body-parser')

//  Inicia as variaveis
const app = express()

//  Conf do body-parser
app.use( bodyParser.urlencoded( { extended: true } ) )
app.use( bodyParser.json() )

// Conexão com BD Mongo
mongoose.connect('mongodb://localhost:27017/test', {useNewUrlParser: true, useUnifiedTopology: true});

// Testando
const alunoModel = mongoose.model('Aluno', { nome: String, matricula: String });

const novoAluno = new alunoModel({ nome: "Alex Barros", matricula: "20170155292" });
novoAluno.save() // Salava aluno no BD
                .then( _=> console.log("Aluno salvo com sucesso!")) // Caso dê certo
                .catch( errors => console.log(errors))  // Caso dê erro, manda o obj

// Declaração do servidor - localhost:3000
const PORTA = 3000
app.listen( PORTA, _ => {
    console.log( `Express server rodando na posta ${PORTA}` )
})