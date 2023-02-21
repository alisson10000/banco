
//aula sobre rotas

/**
 * Eu utilizo a minha variável como constante para evitar de sobrescrever
 * a minha aplicação
 */

//carreguei o modulo do para a variável express
const express = require("express")


/*crio uma variável app que irá receber o conteudo da função express
a minha função express irá criar uma copia inteira para a minha variável express.

*/

const app = express()
/**
 * Qualquer coisa que eu vou usar vou
 *  utlizar do mini framework express será a partir da variável app
 */





/**
 * Criando a rota principal da minha aplicação
 * o caminho da minha aplicação
 * 
 * crio uma função de call back (retorno de chamadas de forma automatizadas)
 * Lembrar o http do mode
 */

app.get("/", function (req, res) {

    /**
     * utilizo o send para enviar a minha reposta da função de call back
     * 
     * sempre que faço alguma alteração eu paro o servidor
     *  e reinicio com  no terminal o arquivo index.js Ex.: node index.js
     * 
     */
    //  res.send("seja bem vindo ao meu app.")





    res.sendFile(__dirname + "/html/index.html")



});

app.get("/sobre", function (req, res) {
    // res.send("A pagina sobre foi atualizada");

    /**
     * Agora para chamar o aquivo html eu irei chamar a função sendFile
     *  
     */
    res.sendFile(__dirname + "/html/sobre.html")

})





/**
 * Criando um caminho Ex.: sobre
 * 
 */


/**
 * Passagem de parametros
 * irei colocar /: irei definir indice nome
 * 
 * 
 * para passar outros parametro só colocar /: e nome de outro indcice
 */


app.get("/login", function (req, res) {
    res.sendFile(__dirname + "/html/login.html")
})


app.get("/ola/:nome/:cargo/:idade", function (req, res) {

    /**
     * Apresentando os parametros.
     * 
     */

    //  res.send("ola");

    // o req requisição (http) responsável por requisição dos parametros
    /**
     * req oriundo da minha função de call back
     */

    /**
     * Obtenho todas as requisição dos parametros 
     * pelo params
     * 
     */


    //res.send(req.params);


    /**
     * Exibir um dos parametros
     * 
     * 
     * res.send("Ola "+req.params.nome + " tudo bem?")
     */

    /**
     * Pde tambem utilizar uma tag html
     */


    //res.send("<h1>ola "+req.params.nome + " tudo bem?</h1>")

    /**
     * OUtra parassagem de requisição abaixo
     */

    //res.send("<h1>Seu cargo é "+req.params.cargo + " muito boa profissão</h1>")


    /**
     * O meu send eu só posso enviar uma vez 
     * 
     */

    res.send("<h1>ola " + req.params.nome + " tudo bem?</h1><h2>Seu cargo é " + req.params.cargo + " e a sua profissão é muito importante.</h2>")

})





/**
 * 
 * abrir um servidor com express
 * localhost:8081
 * essa ultima linha do seu código
 */


app.listen(8082, function () {
    console.log("servidor rodando na ulr http://localhost:8082/")
});

/**
 * função de call back
 * é sempre executada quando alguma coisa acontece
 * Para parar o servidor eu apenas digito ctrl + c no 
 * terminal do VS code
 */


/**
 * a aplicação apresenta o erro Cannot GET /
 * porque não esta apresentando nehuma rota.
 * 
 * ROTA é uma caminho para a minha aplicação.
 * 
 */