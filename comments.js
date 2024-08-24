// Create web server
// Load express module
const express = require('express');
const fs = require('fs');
const app = express();
const port = 3000;

// Set up the view engine
app.set('view engine', 'ejs');

// Set up the static directory
app.use(express.static('public'));

// Set up the data
// Load the comments.json file
let data = fs.readFileSync('comments.json');
// Parse the JSON data
let comments = JSON.parse(data);

// Set up the routes
// Home page
app.get('/', (req, res) => {
    res.render('index', {comments: comments});
});

// Add a comment
app.get('/add', (req, res) => {
    // Get the comment from the query string
    let comment = req.query.comment;
    // Add the comment to the data
    comments.push(comment);
    // Write the data to the JSON file
    let json = JSON.stringify(comments);
    fs.writeFileSync('comments.json', json);
    // Redirect to the home page
    res.redirect('/');
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
