const express = require('express');

const jwt = require('jsonwebtoken')
const bcryptjs = require('bcryptjs')
const router = express.Router();
require('../db/conn');
const authenticate = require("../middleware/Authenticate")
const User = require('../model/userSchema');


router.get('/', (req,res)=>{

    res.send('hello world from router');
   
})

// router.post('/register', (req,res)=>{
//     const {name, email, phone, work, passwcvbrd} = req.body;
//     if(!name || !email || !phone || !work || !password || !cpassword){
//         res.status(422).json({error:'please fill in the form correctly'})

//     }

//     User.findOne({email:email}).then((userExist) =>{
//         if(userExist){
//             return res.status(422).json({error: "User already exists"})
//         }
//         const user = new User ({name, email, phone, work, password, cpassword})
//         user.save().then(()=>{
//             res.status(201).json({message: 'user registered successfully'})
//         }).catch(()=>{ res.status(500).json({message:'registeration failed'})})

//     }).catch((err)=>{
//         console.log(err)
//     })

// })


router.post('/register', async(req,res)=>{
    const {name, email, phone, work, password, cpassword} = req.body;
    if(!name || !email || !phone || !work || !password || !cpassword){
        return res.status(422).json({error:'please fill in the form correctly'});

    }
try{
    const userExist = await User.findOne({email:email});
    if(userExist){ 
     return res.status(422).json({error: "User already exists"})
    }else if (password != cpassword){
        return res.status(422).json({error: "password does not match"})
    }else{
        const user = new User ({name, email, phone, work, password, cpassword})
            
    await user.save()
   
        res.status(201).json({message: 'user registered successfully'})}
            
           
        

    
}
catch (err){
    console.log("error")
}
    })


    router.post('/signin', async(req, res)=>{

        const {email , password} = req.body;

        try{

        if(!email || !password){
            res.status(400).json({message:"please fill in correctly"})
        }

        const userLogin = await User.findOne({email:email})
        let token
        if(userLogin){
            const isMatch = await bcryptjs.compare(password, userLogin.password)
          token =  await userLogin.generateAuthToken();
          res.cookie("jwtoken", token, {
            expires: new Date(Date.now() + 258900000),
            httpOnly:true
          })
            if(!isMatch){
                res.status(400).json({message:"invalid"})
            }else{
                res.json({message:"logged in successfully"})
            }
        }else{
        res.status(400).json({message:"User does not exists"})
    }
}
catch(err){
    console.log(err)
}
    })

router.get('/about' , authenticate, (req,res) =>{
console.log('hello')
    res.send(req.rootUser)
})

router.get('/getdata' , authenticate, (req,res) =>{
    console.log('hello')
        res.send(req.rootUser)
    })

router.post('/contact', authenticate, async (req, res) => {

    try{

        const {name, email, phone , message} = req.body;

        if(!name || !email || !phone  || !message){

            return res.json({message:"Data not complete"})
        }else{
            const userContact = await User.findOne({_id:req.userId})

            if(userContact){
                const userMessage = await userContact.addMessage(name, email, phone, message)
                await userContact.save();
                res.status(201).json({message:"Message sent successfully"})
            }

        }

    }
    catch(error){
        console.log('Error sending message')
    }
})




module.exports = router;




