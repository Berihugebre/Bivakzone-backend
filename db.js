const mongoose = require('mongoose');
const dotenv = require('dotenv').config();

const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@cluster0-wbino.mongodb.net/test?retryWrites=true&w=majority`
 
const db = mongoose
    .connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(db => console.log('Db Connected'))
    .catch(err => console.log(err));
