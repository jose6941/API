const router = require('express').Router();

require('../db/mongoConnection')

const teste = require('./teste')

router.get('/', (req,res) => {
    res.json({
        success: false,
        message: 'Please, do not call /api, it is for our sever'
    });
});

router.use('/teste',teste)

module.exports = router