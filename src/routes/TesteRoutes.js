const express = require('express')
const controller = require('../controllers/TesteController')
const router = express.Router()

router.get('/listar', controller.listar)
router.post('/criar', controller.criar)
router.put('/put/:id',controller.atualizar )
router.delete('/deletar/:id', controller.deletar)
module.exports= {
    router
}
