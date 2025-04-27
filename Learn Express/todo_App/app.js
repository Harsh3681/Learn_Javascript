// const jwt = require('jsonwebtoken');

const express = require('express');
const mongoose = require('mongoose');
const app = express();
app.use(express.json()); 

const path = require('path');

const port = 9000

// --------------------------------------------------- for mongodb 👇

const todoSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: String
});

const Todos = mongoose.model('Todo', todoSchema); // here our collection name is "todoApp" and we create "Todo" document name inside it.

mongoose.connect('mongodb+srv://admin:admin@cluster0.5rzjxal.mongodb.net/todoApp?retryWrites=true&w=majority')
.then(() => console.log('Connected to MongoDB'))
.catch((error) => console.error('Error connecting to MongoDB:', error));

// ---------------------------------------------------

app.use(express.urlencoded({ extended: true }));

// Serve static files from the 'public' directory
app.use(express.static(path.join(__dirname, 'public')));

// function findTodoIndex(arr, id) {
//     return arr.findIndex((todo) => todo.id === id);     // findIndex is Array build in funct
// }

// function removeTodoByIndex(arr, index) {
//     return arr.filter((element, i) => i !== index);  // (element, i) means "element" is element in in array and "i" is index of that element
// }

app.get("/todos", async (req, res) => {
    const allTodos = await Todos.find();
    res.json(allTodos);
});

// app.get("/todos/:id", (req, res) => {
//     fs.readFile("data.json", "utf8", (err, data) => {
//         if (err) throw err;
//         const todos = JSON.parse(data);
//         const todoIndex = findTodoIndex(todos, parseInt(req.params.id));
//         if (todoIndex === -1) {
//             res.status(404).send();
//         } else {
//             res.json(todos[todoIndex]);
//         }
//     });
// });

app.post("/todos", async (req, res) => {
    const myTodoObj = {
        title: req.body.title,
        description: req.body.description
    };

    const todoData = req.body;
    const requiredFields = ['title'];
    const missingField = requiredFields.find(field => !todoData[field] || todoData[field] === '');

    if(missingField){
        return res.status(411).json({"msg": "Some data missing"})
    }else{
        const todos = new Todos(myTodoObj);
        await todos.save();
        res.json({ message: 'todo created successfully', todoId: todos.id });
    }
});


// app.put("/todos/:id", (req, res) => {
//     fs.readFile("data.json", "utf8", (err, data) => {
//         if (err) throw err;
//         let todos = JSON.parse(data);
//         const todoIndex = findTodoIndex(todos, parseInt(req.params.id));

//         if (todoIndex === -1) {
//             res.status(404).send();
//         } else {
//             const updatedTodo = {
//                 id: todos[todoIndex].id,
//                 title: req.body.title,
//                 description: req.body.description
//             };

//             todos[todoIndex] = updatedTodo;
//             fs.writeFile("data.json", JSON.stringify(todos), (err) => {
//                 if (err) throw err;
//                 res.status(201).json(updatedTodo);
//             });
//         }
//     });
// });

app.delete("/todos/:id", async (req, res) => {

    const todoId = req.params.id;
    console.log('Todo id:', todoId);

    const todo = await Todos.findById(todoId);
    if(todo){
        await Todos.findByIdAndDelete(todoId);
        res.json({message : "Todo deleted successfully",todoId : todoId})
    }else{
        res.status(404).json({message : "Todo not found"})
    }

});

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'ToDo_List.html'));
});

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});
