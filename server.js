import express from 'express';
import mongoose from 'mongoose';

const app = express();
const port = process.env.PORT || 8000;

const mongo_uri = 'mongodb://root:example@localhost:27017/todos?authSource=admin';

mongoose.connect(mongo_uri,{
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true
});

app.get("/",(req,res)=> res.status(200).send("Hello World"));

app.listen(port,()=> console.log(`Listening on localhost:${port}`));


