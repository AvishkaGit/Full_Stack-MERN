const express = require('express');
const app = express();
const cors = require('cors');
const port = 3001;
const host = 'localhost';
const mongoose = require('mongoose');
const router = require('./router');


app.use(cors());
app.use(express.json());

const uri = 'mongodb://localhost:27017/Full_Stack-MERN';


const connect = async () =>{
    try{
        await mongoose.connect(uri);
        console.log('connected to mongodb');
    }catch{
        console.log('mongo db erro');
    }
}

connect();


const server = app.listen(port, host, () => {
    console.log(`Node server is listening to ${server.address().port}`)
});

app.use('/api', router);