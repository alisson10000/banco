const Sequelize = require('sequelize')
const sequelize = new Sequelize('asdfas','root','',{
    host:"localhost",
    dialect:'mariadb'
})
sequelize.authenticate(function(){
    console.log("erro")
}).catch(function(erro){
    console.log("Falha ao conectar" + erro)
})