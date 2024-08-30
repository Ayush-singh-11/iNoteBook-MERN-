const express = require('express')
const User=require('../models/User.models')
const router=express.Router();
const { body, validationResult } = require('express-validator');

//Create a user using :POST "/api/auth/createuser".No login required.
router.post('/createuser',[
    body('name',"enter valid name").isLength({min:3}),
    body('email',"enter valid email").isEmail(),
    body('password',"password atleast 5 digit").isLength({min:5}),
],async(req,res)=>{

    // console.log(req.body);
    // const user=User(req.body);
    // user.save();

    //if there are error,return bad request and the error
    
    const error = validationResult(req);
    if (!error.isEmpty()) {
      return res.status(400).json({error:error.array()});
    }

    //check whether the user eith this email exits already
    try{
    let user=await User.findOne({email:req.body.email});
    if(user){
        return res.status(400).json({error:"Sorry a user with this email already exits"})
    }
    //Create a new user
    user=await User.create({
        name:req.body.name,
        email:req.body.email,
        password:req.body.password,
    })  
    res.json(user)
}catch(error){
    console.error(error.message);
    res.status(500).send("some error occured")
}
})

module.exports=router;