const http = require('http');
const countStudents = require('./3-read_file_async');

const app = http.createServer(async (req, res) => {
  if (req.url === '/') res.write('Hello Holberton School!');
  if (req.url === '/students') {
    res.write('This is the list of our students\n');
    try {
      const data = await countStudents(process.argv[2]);
      let i = 1;
      // eslint-disable-next-line
      let sum = 0;
      for (const key in data) {
        if (key) sum += data[key].length;
      }
      res.write(`Number of students: ${sum}\n`);
      for (const key in data) {
        if (key) {
          res.write(`Number of students in ${key}: ${data[key].length}. List: ${data[key].join(', ')}`);
          if (i < Object.keys(data).length) {
            res.write('\n');
          }
          i += 1;
        }
      }
    } catch (error) {
      res.end(error.message);
    }
  }
  res.end();
});
app.listen(1245);
module.exports = app;
