const express = require('express');
// const bodyParser = require('body-parser');
const path = require('path');

const app = express();

const routes = require('./server/routes/routes');

app.use(express.static(path.join(__dirname, 'dist')));

app.use('/routes', routes);

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'dist/index.html'));
})

// app.use(bodyParser.json());

const port =process.env.PORT || 4600;

app.listen(port, (req, res) => {
    console.log(`Running on port ${port}`);
    
}); 

app.post('/api/register', (req, res) => {
    console.log(req.body);
}
)

