const express = require('express');
const router = express.Router();

require('../db/database-connection');
const User = require('../model/userschema');


router.post('/loginandsingup',(req, res) => {
    const body = req.body
    console.log(body);
    res.json({message: req.body});
})

module.exports = router;


// router.get('/', (req, res) => {
//     res.status(200).render('home.pug');
//     res.send('hello world from the server router.js')
// });



// const {username, email, mobilenumber, password, confirmpassword, tandcCheckbox} = req.body;

// if(!username  ||  !email  ||  !mobilenumber  ||  !password  ||  !confirmpassword || !tandcCheckbox){
//     return res.status(422).json({error: "plz fill the data"});
// }


// User.findOne({email:email})
// .then((userexist)=>{
//     console.log("this is user exists" + userexist);
//     if(userexist){
//     return res.status(422).json({error: "your already excited"});
//     }
//     const user = new User({username, email, mobilenumber, password, confirmpassword, tandcCheckbox})
//     console.log("this is user" + user.username)
//     user.save().then(()=>{
//         res.status(201).json({message: "user regiested successfuly"})
//     }).catch((err)=>{
//         res.status(500).json({error:  err + "failed to register user"})
//         console.log(err)
//     })
// }).catch((err)=>{console.log(err)});




