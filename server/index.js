// const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');
const express = require('express');
const cors = require('cors');
const app = express()
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.get('/',(req,res)=>{
 
    res.send('task management')
})

app.listen(port,()=>{
    console.log(`User sever running on PORT: ${port}`);
})