const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const cors = require('cors');
const https = require('https');
const port = 8000;

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/tz20/list.json', (req, res) => {
    https.get("https://www.mrsoft.by/tz20/list.json", (response) => {
        response.pipe(res);
    });
});
app.get('/tz20/:more/:catInfo', (req, res) => {
    const { more, catInfo } = req.params;
    
    https.get(`https://www.mrsoft.by/tz20/${more}/${catInfo}`, (response) => {
        response.pipe(res);
    });
});

app.listen(port, () => {
    console.log('Live on ' + port);
});