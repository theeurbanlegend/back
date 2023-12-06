const { getAllPulses, getPulse, addPulse, deletePulse } = require('../controller/pulseControllers')

const route=require('express').Router()


route.get('/',getAllPulses)
route.get('/:id',getPulse)
route.post('/add',addPulse)
route.delete('/:id',deletePulse)

module.exports=route


