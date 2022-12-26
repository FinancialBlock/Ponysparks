const express = require('express');
const cors = require('cors');

const app = express();

// Enable CORS for all routes
app.use(cors());

// Your routes and middleware go here

app.listen(3000, () => {
    console.log('Server listening on port 3000');
});