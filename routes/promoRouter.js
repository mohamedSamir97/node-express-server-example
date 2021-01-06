const express = require('express');
const bodyParser = require('body-parser');
const promoRouter = express.Router();

promoRouter.use(bodyParser.json());
promoRouter.route('/')

.all( (req,res,next) =>{
    res.statusCode =200;
    res.setHeader('Content-Type','text/plain');
    next();
})
.get((req,res,next) =>{
    res.end('Will send all the promotions to you !');  

})

.post((req,res,next) =>{
    res.end('will add the promotions: '+ req.body.name+ 
    'with details' +req.body.description);

})

.put((req,res,next) =>{
    res.statusCode =403;
    res.end('put operation not supported on /promotions');

})

.delete((req,res,next) =>{
    res.end('deleting all the promotions!');  

});

promoRouter.route('/:promotionId')
.all( (req,res,next) =>{
    res.statusCode =200;
    res.setHeader('Content-Type','text/plain');
    next();
})

.get((req,res,next) =>{
    res.end('Will send details of the promotions :'+req.params.promotionId + ' to you');  

})

.post((req,res,next) =>{
    res.statusCode =403;
    res.end('post operation not supported on /promotions/'+ req.params.promotionId);

})

.put((req,res,next) =>{
    res.write(' Updating the promotions:'+req.params.promotionId+'\n');
    res.end('will update the promotions:' +req.body.name+
    'with details: '+req.body.description);

})

.delete((req,res,next) =>{
    res.end('deleting promotions: '+req.params.promotionId);  

});



module.exports = promoRouter;
