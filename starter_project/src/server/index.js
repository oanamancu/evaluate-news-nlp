var path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
dotenv.config();

const app = express();
const NLP_URL = `https://api.meaningcloud.com/sentiment-2.1?key=${process.env.API_KEY}&lang=en&url=`;

const cors = require('cors');

app.use(cors());
app.use(bodyParser.json());
app.use(express.static('dist'))

console.log(`__dirname: ${__dirname}`);

// POST Route
app.post('/api', async function (req, res) {
    console.log(req.body.urlInput);
    try {
        const response = await fetch(`${NLP_URL}${req.body.urlInput}`);
        const result = await response.json();
        console.log('response url:', result);
        const review = {
            sentimentScore: result.score_tag, 
            subjectivity: result.subjectivity, 
            irony: result.irony,
            textSnippet: result.sentence_list[0].text
        }
        res.status(response.status).json(review);
    } catch(err) {
        res.static(400).json(`err: ${err}`);
    }
});

app.get('/', function (_req, res) {
    res.sendFile('dist/index.html')
});

// Designates what port the app will listen to for incoming requests
app.listen(8000, function () {
    console.log('Example app listening on port 8000!');
});


