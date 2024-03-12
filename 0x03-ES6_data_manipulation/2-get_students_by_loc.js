export default function getStudentsByLocation(listStudents, city) {
  return listStudents.filter(({ location }) => location === city);
}
