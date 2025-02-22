require("dotenv").config();
const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');
const express = require('express');
const cors = require('cors');
const app = express()
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.get('/',(req,res)=>{
 
    res.send('task management')
})

const uri =`mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.wu5vq.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function run() {
  try {
    const db=client.db('Task-Management')
    const tasksCollection=db.collection('Tasks')
    const userCollection = db.collection("users");
    app.post("/users", async (req, res) => {
        const user = req.body;
        const query = { email: user.email };
        const isExist = await userCollection.findOne(query);
        if (isExist)
          return res.send({ message: "user already exist", insertedId: null });
        const result = await userCollection.insertOne(user);
        res.send(result);
      });
//post task
   app.post('/task',async(req,res)=>{
    const task = req.body;
   const result = await tasksCollection.insertOne(task);
   res.send(result) 
   })
//get task by status
app.get('/task',async(req,res)=>{
  
  const email = req.query.email;
  const query={email};
  const result=await tasksCollection.find(query).toArray();
  res.send(result)
})

//get single task 
app.get('/singleTask/:id',async(req,res)=>{
  const id=req.params.id;
  const query={_id: new ObjectId(id)}
  const result= await tasksCollection.findOne(query);
  res.send(result);
})

//update task
app.patch('/task/:id',async(req,res)=>{
  const id=req.params.id;
  const query={_id:new ObjectId(id)}
  const task = req.body;
  const update = {
    $set: task,
  };
  const result = await tasksCollection.updateOne(query,update);
  res.send(result);
})

//delete task
app.delete('/task/:id',async(req,res)=>{
  const id=req.params.id;
  const query={_id:new ObjectId(id)}
  const result= await tasksCollection.deleteOne(query);
  res.send(result)
})
  } finally {

  }
}
run().catch(console.dir);


app.listen(port,()=>{
    console.log(`User sever running on PORT: ${port}`);
})