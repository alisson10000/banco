//Constante abaixo crio com a letra maiúscula

const Sequelize = require('sequelize')
//=====================================================================

// Criar uma instancia para a constante sequelize
//passando o nome do banco, usuario e senha , 


const sequelize = new Sequelize('banco','root','',{
    host:"localhost",
    dialect:'mariadb'
})

/**
 * Abaixo eu crio uma função que faça tratamento se 
 * o banco de dados foi conectado aou não
 */

sequelize.authenticate(function(){
    console.log("erro")
}).catch(function(erro){
    console.log("Falha ao conectar" + erro)
})
//========================================================================
