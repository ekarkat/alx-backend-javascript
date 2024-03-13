interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}


const student1: Student = {
  firstName: 'James',
  lastName: 'Bond',
  age: 25,
  location: 'New Hampshire',
};

const student2: Student = {
  firstName: 'Harry',
  lastName: 'Potter',
  age: 26,
  location: 'Manchester',
};

let studentsList: Student[] = [student1, student2];

const table = document.createElement("table");
const tbody = document.createElement("tbody");

studentsList.forEach(student => {
  const row = document.createElement("tr");
  const firstNameCell = document.createElement("td");
  const locationCell = document.createElement("td");

  firstNameCell.textContent = student.firstName;
  locationCell.textContent = student.location;

  row.appendChild(firstNameCell);
  row.appendChild(locationCell);

  tbody.appendChild(row);
});

table.appendChild(tbody);
document.body.appendChild(table);