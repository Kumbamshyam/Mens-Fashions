const express = require("express");
const app = express();
const dotenv = require("dotenv");
const path = require('path');

dotenv.config({path: './config.env'})
const User = require('./model/userschema.js')
require('./db/database-connection.js')

const port = process.env.PORT

app.use(express.json()); 

app.use(require('./router/auth'))

const staticpath = path.join(__dirname, '/public');
app.use(express.static(staticpath));

app.set('view engine', 'pug');
app.set('views', path.join(__dirname, '/view'));

const middleware = (req, res, next)=>{
    console.log("hello i'm middleware")
    next();
}

app.get('/', (req, res) => {
    res.status(200).render('home.pug');
})

app.get('/loginandsingup', (req, res) => {
    res.status(200).render('loginandsingup.pug');
})

app.get('/customerservice', (req, res) => {
    res.status(200).render('customerservice.pug');
})

app.get('/product', (req, res) => {
    res.status(200).render('product.pug');
})

app.get('/404', (req, res) => {
    res.status(200).render('404.pug')
})


app.use((req, res) => {
    res.redirect('/404')
})


app.listen(port, () => {
    console.log(`application had started successfully on port ${port}`)
})
// <------------------ it is used to recieve the data in string format and to send the data in parse format beacuse system will not read the data ------------------>
// <------------------ we linked the router files to make our router easy ------------------>

// const admin = require('firebase-admin');


// <------------------ Adding pug engine in express  ------------------>
// const bcrypt = require('bcrypt');
// <------------------ connect mongo databse  ------------------>...........................................................................................000000000000000
// <------------------ firebase admin setup  ------------------>

// let serviceAccount = require("./e-com-website-b8d8c-firebase-adminsdk-yp1g6-41710d4b2e.json");

// admin.initializeApp({
    //     credential: admin.credential.cert(serviceAccount)
    // });
    
    // let db = admin.firestore();
    
    // <------------------ define static mode  ------------------>
    // app.use(express.static('public'));
    
    // Express staff
    // 01. using static function from express to send static files





// app.post('/loginandsingup', (req, res) => {
//     // console.log(req.body);

//     let { name, email, password, confirmpassword, mobilenumber, notification, tac } = req.body;

//     if (name.length < 3) {
//         return res.json({ 'alert': 'name must be 3 letters longs' })
//     }
//     else if (!email.length) {
//         return res.json({ 'alert': 'Please Enter your Email' })
//     }
//     else if (password.length < 8 || !password.includes('@')) {
//         return res.json({ 'alert': 'Please create strong Password' })
//     }
//     else if (!confirmpassword.length) {
//         return res.json({ 'alert': 'Please Confirm your Password' })
//     }
//     else if (!Number(mobilenumber) || mobilenumber.length < 10) {
//         return res.json({ 'alert': 'please enter a valid number' })
//     }
//     else if (!tac == true) {    
//         return res.json({ 'alert': 'you must agree our term and conditions before singup ' })
//     }


//     // store user in db
//     // db.collection('users').doc(email).get()
//     //     .then(user => {
//     //         if (user.exists) {
//     //             return res.json({ 'alert': 'Email already exits' })
//     //         }
//     //         else {
//     //             // encrypt the  password before storing it.
//     //             bcrypt.genSalt(10, (err, salt) => {
//     //                 bcrypt.hash(password, salt, (err, hash) => {
//     //                     req.body.password = hash;
//     //                     db.collection('user').doc(email).set(req.body)
//     //                         .then(data => {
//     //                             res.json({
//     //                                 name: req.body.name,
//     //                                 email: req.body.email
//     //                             })
//     //                         })
//     //                 })
//     //             })
//     //         }
//     //     })


//     // res.json(' "Thanks your data is recieved securely"');
// });
// app.use('/public', express.static('static'));