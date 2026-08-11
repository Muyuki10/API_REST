const { listar, listarM, criarM, atualizarM, deletarM } = require("../models/TesteModels")
//passar sempra para number o id
// pq ele vem como string e nao conseguimos usar string para mexer no array 
module.exports ={
    listar(req,res){
        res.send(listarM())
    
},

    criar(req,res){
        const { id,nome } = req.body

        criarM(id,nome)

        res.status(201).json({message: "criado com sucesso"})
        

    },


    atualizar(req,res){
        const {id} = req.params
        const nome = req.body

        idcerto = Number(id)

        atualizarM(idcerto, nome)

        res.status(201).json({message: "atualizado"})

    },

    deletar(req,res){
        const {id} = req.params

        deletarM(Number(id))

        res.status(202).json({message: `deletado ${id}`})
    
    }
}

