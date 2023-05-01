const express = require('express');
const router = express.Router();


router.post('/',(req,res,next)=>{
    res.status(201).json({
        message:'Orders successfully created'
    });
});

router.get('/',(req,res,next)=>{
    res.status(200).json({
        message:'Orders GET successfully'
    });
});

router.get('/:orderId',(req,res,next)=>{
    res.status(201).json({
        message:'Ordersid get details',
        orderId:req.params.orderId
    });
});

router.delete('/:orderId',(req,res,next)=>{
    res.status(200).json({
        message:'Orders deleted',
        orderId:req.params.orderId
    });
});
module.exports = router;