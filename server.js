const express = require('express');
const path = require('path');
const mongoose = require('mongoose')
const app = express();
const db = mongoose.connection
var cors = require('cors')


// Environment Variables
const mongoURI = process.env.MONGODB_URI || 'mongodb://localhost:27017/portfolio'
const PORT = process.env.PORT || 5000;

// Connect to Mongo
mongoose.connect(mongoURI, { useNewUrlParser: true },
    () => console.log('MongoDB connection established:', mongoURI)
)

// Error / Disconnection
db.on('error', err => console.log(err.message + ' is Mongod not running?'))
db.on('disconnected', () => console.log('mongo disconnected'))

// Middleware
app.use(express.urlencoded({ extended: false }))// extended: false - does not allow nested objects in query strings
app.use(express.json())// returns middleware that only parses JSON
app.use(cors())
app.use(express.static('build'));


// Routes
const postsController = require('./controllers/Posts.js')
app.use('/portfolio', postsController)



// for react router
app.get('*', (req, res) => {
    res.sendFile(path.resolve(`${__dirname}/build/index.html`));
});

app.listen(PORT, () => {
    console.log('Listening on port: ' + PORT)
});