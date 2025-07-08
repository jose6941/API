const router = require('express').Router()
const Portifolio = require('../models/Portifolio')

router.get('/', (req,res) => {
    try{
        const portifolio = Portifolio.find()
        res.json({
            success: true,
            data: portifolio
        });
    }catch(err){
        res.json({
            success: false,
            message: err
        });
    }
});

router.post('/', async (req,res) => {
    const portifolio = new Portifolio({
        title: req.body.title,
        description: req.body.description
    });
      
    try{
        const savedPortifolio = await portifolio.save()
        res.json({
            success: true,
            data: savedPortifolio
        });
    }catch(err){
        res.json({
            success: false,
            message: err
        });
    } 
});

router.get('/:slug', async (req,res) =>{
    try{
        const portifolio = await Portifolio.findOne({
            slug: req.params.slug
        });

        res.json({
            success: true,
            data: portifolio
        });
    }catch(err){
        res.json({
            success: false,
            message: err
        });
    }
});

router.patch('/:slug', async (req,res) =>{
    try{
        const updatePortifolio = await Portifolio.updateOne({
            slug: req.params.slug
        },
        {
            $set: {
                title: req.body.title,
                description: req.body.description
            } 
        });

        res.json({
            success: true,
            updated: updatePortifolio.nModified
        })
    }catch(err){
        res.json({
            success: false,
            message: err
        })
    }
})

router.delete('/:slug', async(req,res) => {
    try{
        const deletedPortifolio = await Portifolio.deleteOne({
            slug: req.params.slug
        })

        res.json({
            success: true,
            deleted: deletedPortifolio.deletedCount
        })
    }catch(err){
        res.json({
            success: false,
            message: err
        })
    }
    
})

module.exports = router