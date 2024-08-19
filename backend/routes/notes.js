const express = require('express');
const router = express.Router();

router.get('/',(req,res)=>{
    obj={
        name:"Vijay",
        email:"vijay2314@gmail.com",
    }
    res.json(obj);
})

module.exports=router;