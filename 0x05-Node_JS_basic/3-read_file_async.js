/* eslint-disable */
const fs = require('fs');

const countStudents = (path) => new Promise((resolve, reject) => {
  fs.readFile(path, 'utf8', (err, data) => {
    if (err) {
      reject(new Error('Cannot load the database'))
    }
    const lines = data
      .trim()
      .split('\n')
      .filter((line) => line.trim() !== '');

    console.log(`Number of students: ${lines.length - 1}`);

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
      console.log(`Number of students in ${field}: ${value.length}. List: ${value.join(', ')}`);
    });
    resolve()
  })
})

module.exports = countStudents;