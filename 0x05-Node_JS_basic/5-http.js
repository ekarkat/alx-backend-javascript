const http = require('http');

const app = http.createServer(async (req, res) => {
  if (req.url === '/') res.write('Hello Holberton School!');
  if (req.url === '/students') {
    res.write('This is the list of our students\n');
  }
});
app.listen(1245);
module.exports = app;
