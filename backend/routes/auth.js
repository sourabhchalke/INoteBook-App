const express = require('express');
const router = express.Router();

router.get('/',(req,res)=>{
    obj={
        name:"Sourabh",
        email:"sourabh2157@gmail.com",
    }
    res.json(obj);
})

module.exports=router;