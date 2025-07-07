const router = require('express').Router()
const Portifolio = require('../models/Portifolio')

router.get('/', (req,res) => {
    res.json({
        sucess: true,
    })
})

router.post('/', (req,res) => {
    const portifolio = new Portifolio({
        title: req.body.title,
        description: req.body.description
    });
        
    portifolio.save().then().cath(err)
})

module.exports = router