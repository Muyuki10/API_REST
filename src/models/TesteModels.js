const users = [{id: 1,nome:"murilo"}]; 


function listarM(){
    return users
}
function criarM(id,nome){
    users.push({id,nome})
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
