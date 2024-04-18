const express = require('express');
const bodyParser = require('body-parser');
const path = require('path'); // Import the path module for joining paths

const app = express();
const port = process.env.PORT || 5000;

app.use(express.static('C:/Users/Dell/Downloads/TRAVEL-WEBSITE'));
app.use(bodyParser.urlencoded({ extended: true }));

// Uncomment and adjust these lines if you have separate directories for images and stylesheets
// app.use('/images', express.static(path.join(__dirname, 'C:/Users/Dell/Downloads/Travel-Website/images')));
// app.use('/styles', express.static(path.join(__dirname, 'C:/Users/Dell/Downloads/Travel-Website/styles')));

app.use('/', (req, res) => {
    res.sendFile(__dirname, '/admin.html');
});

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
