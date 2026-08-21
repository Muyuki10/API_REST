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
    
}

async function criarM(nome){
    try {
    const query = "INSERT INTO users(nome) VALUES (?);"
    const [resultado] = await connection.query(query,[nome] )
    }catch(erro){
        console.log(erro)
    }
     
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
