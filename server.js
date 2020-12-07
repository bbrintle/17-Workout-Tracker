const express = require("express");
const morgan = require("morgan");
const mongoose = require("mongoose");

//Normal express 'boilerplate' data
const app = express();
const PORT = process.env.PORT || 3000;

app.use(morgan("dev"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));

// Add the mongo DB 'boilerplate' data
const MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/workout";
mongoose.connect(MONGODB_URI, {
    useNewUrlParser: true,
    useFindAndModify: false
})

// Call the two js files in Routes folder
require("./routes/apiRoutes")(app);
require("./routes/htmlRoutes")(app);

// Start server
app.listen(PORT, function(){
    console.log(`App listening on Port ${PORT}!`);
});