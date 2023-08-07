const express = require("express");
const bodyParser = require("body-parser");

const path = require("path");
const app = express();


//Middlewares Setup
app.use(bodyParser.urlencoded({extended:false}));
app.use(express.static(path.join(__dirname,'public')));

//Setting up the view engine (EJS)
app.set('view engine','ejs');
app.set('views',path.join(__dirname,'views'));


//Routes Setup
const todoRoutes = require('./routes/todo');
app.use('/todo',todoRoutes);

app.get('/', (req, res) => {
    res.render('index');
});


// Define functions to get current day, month, and date
app.locals.getCurrentDay = function() {
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const currentDay = new Date().getDay();
    return days[currentDay];
};

app.locals.getCurrentMonth = function() {
    const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    const currentMonth = new Date().getMonth();
    return months[currentMonth];
};

app.locals.getCurrentDate = function() {
    return new Date().getDate();
};



// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});