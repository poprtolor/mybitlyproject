const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const path = require('path');
const LinkRouter = require('./router/linkRouter');

const app = express();
const mongoUrl = "mongodb+srv://14148881414:14148881414@cluster0.hmset.mongodb.net/";

// Connect to MongoDB
mongoose.connect(mongoUrl).then(() => console.log('Connected to MongoDB'))
  .catch((err) => console.error('Could not connect to MongoDB:', err));

// Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Routes
app.use('/link', LinkRouter);

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, "index.html"));
});

// Handle 404
app.use((req, res) => {
    res.status(404).send("Page Not Found!");
});

module.exports = app;
