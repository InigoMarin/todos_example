import express from 'express';
import mongoose from 'mongoose';
import Todos from './dbTodos.js';

const app = express();
const port = process.env.PORT || 3000;


app.use(express.json());

const mongo_uri = 'mongodb://root:example@mongo/todos?authSource=admin';

mongoose.connect(mongo_uri, {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true
});

app.get("/", (req, res) => res.status(200).send("Hello World"));

app.post("/api/v1/todos/news", (req, res) => {
    const dbTodos = req.body

    Todos.create(dbTodos, (err, data) => {
        if (err) {
            res.status(500).send(err);
        } else {
            res.status(201).send(data);
        }
    });
});

app.get('/api/v1/todos', (req, res) => {
    Todos.find((err, data) => {
        if (err) {
            res.status(500).send(err);
        } else {
            res.status(200).send(data);
        }
    })
});

app.listen(port, () => console.log(`Listening on localhost:${port}`));


