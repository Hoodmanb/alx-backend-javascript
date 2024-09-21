const { createServer } = require('http');
const countStudents = require('./3-read_file_async');

const hostname = '127.0.0.1';
const port = 1245;

const app = createServer(async (req, res) => {
  res.setHeader('Content-Type', 'text/plain');

  if (req.url === '/' && req.method === 'GET') {
    res.statusCode = 200;
    res.end('Hello Holberton School!');
  } else if (req.url === '/students' && req.method === 'GET') {
    const arg = process.argv;
    try {
      const studentData = await countStudents(arg[2]);
      res.statusCode = 200;
      res.write('This is the list of our students:\n');

      res.write(studentData);
      res.end();
    } catch (error) {
      console.log(error)
      res.statusCode = 500;
      res.end('Cannot load the database');
    }
  } else {
    res.statusCode = 404;
    res.end('Not Found');
  }
});

app.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});

module.exports = app;