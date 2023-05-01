//import express
const express = require ('express');

//express router
const router = express.Router();

//get request
router.get('/',(req,res,next)=>{
    res.status(200).json({
        message:'handling Get Request für products.'

    });
});

//Post request
router.post('/',(req,res,next)=>{
    res.status(201).json({
        message:'handling Post Request für /products.'

    });
});

router.get('/:productId',(req,res,next)=>{
    const id = req.params.productId;
    if (id ==='besonders') {
        res.status(200).json({
            message :'du hast das besonders ID',
            id :id
        });
    }else{
        res.status(200).json({
            message: 'du hast ein Id'
        });
    }

});

router.patch('/:productId',(req,res,next)=>{
    res.status(200).json({
        message:'Update product!'
    });
});

router.delete('/:productId',(req,res,next)=>{
    res.status(200).json({
        message:'deleted product!'
    });
});

module.exports = router;