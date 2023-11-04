const mongoose = require("mongoose");

mongoose.connect('mongodb+srv://Radhika:oabHSLGdhj2xKpRA@cluster0.6bsjdtv.mongodb.net/book-keeping');

const db = mongoose.connection;

db.on('error',(error)=>{
    console.log('error to connecting with database')
})

db.once('open',function(){
    console.log('Successfully connected to database');
})
//mongodb://localhost:27017