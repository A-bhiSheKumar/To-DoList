//Routues ..todo.js
const express = require("express");
const router = express.Router();

//Storing memory 
let todo = [];

//Routes to get all todo
router.get('/',(req,res)=>{
    res.render('todo',{todo});
});

//Route to add a new todo
router.post('/add',(req,res)=>{
    const {task}= req.body;
    todo.push({task,completed:false});
    res.redirect('/todo');
});

//Route to mark a todo as complete
router.post('/complete/:index',(req,res)=>{
    const index = req.params.index;
    todo[index].completed= true;
    res.redirect('/todo');
});

// Route to delete a todo
router.post('/delete/:index', (req, res) => {
    const index = parseInt(req.params.index);

    if (index >= 0 && index < todo.length) {
        todo.splice(index, 1); // Remove the task at the specified index
        res.sendStatus(200); // Send a success response
    } else {
        res.sendStatus(404); // Task not found
    }
});




module.exports = router;