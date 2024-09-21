/* eslint-disable */
const express = require('express');
const countStudents = require('./3-read_file_async');
const db = process.argv.length >= 2 ? process.argv[2] : '';
const app = express();
const port = 1245;

app.get('/', (req, res) => {
  res.send('Hello Holberton School!')
});

app.get('/students', (req, res) => {
  countStudents(db)
  .then((data) => {
    // console.log(data)
    // res.write('This is the list of our students')
    const dataToSend = `This is the list of our students \n ${data}`
    res.send(dataToSend)
  })
});

app.listen(port, () => {
  console.log(`app listening on port ${port}`)
});

module.exports = app;