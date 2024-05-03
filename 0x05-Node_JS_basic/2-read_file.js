const fs = require('fs');

const countStudents = (path) => {
  try {
    let data = fs.readFileSync(path, 'utf8').toString().split('\n');
    data = data.slice(1);
    // eslint-disable-next-line
    let students = [];
    for (const line of data) {
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
      if (key) console.log(`Number of students in FIELD: ${fields[key].length}. List: ${fields[key].join(', ')}`);
    }
  } catch (error) {
    throw new Error('Cannot load the database');
  }
};
module.exports = countStudents;
