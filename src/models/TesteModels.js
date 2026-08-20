const sql = require('mysql2')

const connection = sql.createConnection({
    host: 'localhost',
    user: 'root',
    password:'',//digite sua senha aqui
    database: 'user'
})

connection.connect((erro) => {
    if(erro){
        console.log(erro)

    }else{
        console.log("conectado com sucesso")
    }
})

const users = [{id: 1,nome:"murilo"}]; 
let id = 0

function listarM(){
     const query = "SELECT * FROM users"
    connection.query(query,(erro,resultado)=>{
        if (erro){
            console.log(erro)
        }
        else {
            console.log(resultado)
        }
    })
    return users
}
function criarM(nome){

    const query = "INSERT INTO users(nome) VALUES (?);"
    id += 1
    users.push({nome})
    connection.query(query,nome ,(erro,resultado)=>{
        if (erro){
            console.log(erro)
        }
        else {
            console.log("criado com sucesso")
        }
    })
}
function atualizarM(id,nomeN){
    const onde = users.findIndex(i => i.id === id)
    if(onde !== -1){
    users[onde].nome = nomeN.nome
    }
}

function deletarM(id){
    const onde = users.findIndex(i => i.id === id)
    if(onde !== -1){
        users.splice(onde, id)
    }
}

module.exports = {
    listarM,
    criarM,
    atualizarM,
    deletarM
};
