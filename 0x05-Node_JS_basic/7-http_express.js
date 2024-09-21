/* eslint-disable */
const express = require('express');
const fs = require('fs');
const db = process.argv.length >= 2 ? process.argv[2] : '';
const app = express();
const port = 1245;

const countStudents = (db) => new Promise((resolve, reject) => {
  fs.readFile(path, 'utf8', (err, data) => {
    if (err) {
      reject(new Error('Cannot load the database'))
    }
    if (data) {
      const returned = [];
      const lines = data
        .trim()
        .split('\n')
        .filter((line) => line.trim() !== '');
      returned.push(`Number of students: ${lines.length - 1}`)
      const students = [];
      const fields = [];
      lines.forEach((line, index) => {
        if (index !== 0) {
          const [firstName, lastName, age, field] = line.split(',');
          if (field) {
            students.push({ firstName, lastName, age, field });
            fields.push(field);
          }
        }
      });
      const obj = {};
      const noDuplicate = [...new Set(fields)];
      noDuplicate.forEach((field) => {
        obj[field] = [];
      });
      students.forEach((student) => {
        obj[student.field].push(student.firstName);
      });
      Object.keys(obj).forEach((field) => {
        const value = obj[field];
        returned.push(`Number of students in ${field}: ${value.length}. List: ${value.join(', ')}`);
      });
      const toReturn = returned.join('\n')
      resolve(toReturn)
    }
  })
})

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