const express = require('express')
const app = express()
const port = 3000

app.use(express.static('public'));
app.get('/', (req, res) => {
  res.send('Hello World')
});
app.get('/home', (req, res) => {
  res.sendFile(__dirname+'/view/home.html')
});
app.get('/about', (req, res) => {
    res.sendFile(__dirname+'/view/about.html')
});
app.get('/contact', (req, res) => {
    res.sendFile(__dirname+'/view/contact.html')
});

app.listen(port, () => {
    console.log(`port is running on ${port}`);
});