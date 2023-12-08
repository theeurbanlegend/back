const { getAllPulses, getPulse, addPulse, deletePulse, getMostRecentPulse } = require('../controller/pulseControllers')

const route=require('express').Router()


route.get('/',getAllPulses)
route.get('/recent',getMostRecentPulse)
route.get('/:id',getPulse)
route.delete('/:id',deletePulse)

module.exports=route


