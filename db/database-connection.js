
const mongoose = require("mongoose");

const db = process.env.DATABASE

mongoose.connect(db).then(()=>{ 
    console.log('database conencted successfuly');
}).catch((err)=>{ 
    console.log("this is error = " + err)
})