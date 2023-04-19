const express = require('express')
const app = express();
require('colors')
const cors = require('cors')
const port = process.env.PORT || 5000;

app.use(express());
app.use(cors());

const categories = require('./data/categories.json')


app.get('/news-categories', (req, res)=>{
    res.send(categories);
})
app.get('/', (req, res)=>{
    res.send('server running')
});



app.listen(port, ()=>{
    console.log('server is running on'.yellow.bold, port);
})

