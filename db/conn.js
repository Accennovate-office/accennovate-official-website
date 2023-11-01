
// const { MongoClient, ServerApiVersion } = require('mongodb');
// const uri = "mongodb+srv://accennovateoffice:m9uATuSaLy6GBCnC@cms.g49104b.mongodb.net/?retryWrites=true&w=majority";

// // Create a MongoClient with a MongoClientOptions object to set the Stable API version
// const client = new MongoClient(uri, {
//   serverApi: {
//     version: ServerApiVersion.v1,
//     strict: true,
//     deprecationErrors: true,
//   }
// });

// async function run() {
//   try {
//     // Connect the client to the server	(optional starting in v4.7)
//     await client.connect();
//     // Send a ping to confirm a successful connection
//     await client.db("acc").command({ ping: 1 });
//     console.log("Pinged your deployment. You successfully connected to MongoDB!");
//   } 
//   finally {
//     // Ensures that the client will close when you finish/error
//     // await client.close();
//   }
// }
// run().catch(console.dir);



const mongoose=require("mongoose");
mongoose.set('strictQuery', true);

const db="mongodb+srv://accennovateoffice:m9uATuSaLy6GBCnC@cms.g49104b.mongodb.net/acc?retryWrites=true&w=majority";
mongoose.connect(db,{
    
    useNewUrlParser:true,
    useUnifiedTopology:true
}).then(()=>console.log("connected")).catch((error)=>console.log(error.message));
