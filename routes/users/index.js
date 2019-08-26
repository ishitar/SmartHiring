const router = require('express').Router();


router.get('/',(req,res)=>{
    res.send({message:"Hello"});
    res.end();
})

module.exports = router