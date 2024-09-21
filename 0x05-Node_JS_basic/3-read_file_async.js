import fs from 'fs/promises';

const countStudents = async (path) => {
  try {
    const data = await fs.readFile(path, 'utf8');
    const lines = data.trim().split('\n');
    console.log(`Number of students: ${lines.length - 1}`);

    const students = [];
    const fields = [];
    lines.forEach((line, index) => {
      if (index !== 0) {
        const [firstName, lastName, age, field] = line.split(',');
        students.push({ firstName, lastName, age, field });
        fields.push(field);
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
  } catch (err) {
    throw new Error('Cannot load the database');
  }
};

export default countStudents;