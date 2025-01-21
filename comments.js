// Create web server
// This server will listen on port 3000
// It will serve a static file from the public directory
// It will also serve a JSON object with comments
// This server will also handle POST requests to add comments to the JSON object

// Load the express library
var express = require('express');

// Create an instance of the express server
var app = express();

// Load the body-parser library
var bodyParser = require('body-parser');

// Tell the express server to use the body-parser library
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Create a variable to hold the comments
var comments = [];

// Create a route to serve the comments
app.get('/comments', function(req, res) {
    // Send the comments as a JSON object
    res.json(comments);
});

// Create a route to handle POST requests
app.post('/comments', function(req, res) {
    // Get the comment from the request body
    var comment = req.body.comment;

    // Add the comment to the comments array
    comments.push(comment);

    // Send a response to the client
    res.send('Comment added');
});

// Create a route to serve static files from the public directory
app.use(express.static('public'));

// Start the server and listen on port 3000
app.listen(3000, function() {
    console.log('Server is running on http://localhost:3000');
});

// End of comments.js