const fs = require('fs').promises;

const countStudents = (path) => new Promise((resolve, reject) => {
  fs.readFile(path, 'utf8')
    .then((data) => {
      // eslint-disable-next-line
      let dataCopy = data.split('\n').slice(1);
      // eslint-disable-next-line
      let students = [];
      for (const line of dataCopy) {
        if (line) students.push(line);
      }
      console.log(`Number of students: ${students.length}`);
      // eslint-disable-next-line
      let fields = {};
      for (const line of students) {
        if (line.split(',')[3] in fields) {
          fields[line.split(',')[3]].push(line.split(',')[0]);
        } else {
          fields[line.split(',')[3]] = [];
          fields[line.split(',')[3]].push(line.split(',')[0]);
        }
      }
      for (const key in fields) {
        if (key) console.log(`Number of students in ${key}: ${fields[key].length}. List: ${fields[key].join(', ')}`);
      }
      resolve(fields);
    }).catch(() => {
      reject(new Error('Cannot load the database'));
    });
});
module.exports = countStudents;
