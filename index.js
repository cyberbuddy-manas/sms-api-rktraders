const express = require('express');
const fast2sms = require('fast-two-sms');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

app.use(bodyParser.json());
app.use(cors());

app.post('/sendMessage', async (req, res) => {

    console.log(req.body);

    const response = await fast2sms.sendMessage({
        authorization: "bMvQ4fxGCVqBTJ0KFP16glLA3ikN8mRytZwYS9XzuW5pdDo7n2GHYc8tkzLbhCP2MaIoqA5XOKFx07Re",
        message: req.body.message,
        numbers: [req.body.number]
    })

    res.status(201).send({"message": response});
});

app.get('/', (req, res) => {
    res.send({message: "welcome"})
});

app.listen(5500, () => { console.log('Listening on Port 5500'); });