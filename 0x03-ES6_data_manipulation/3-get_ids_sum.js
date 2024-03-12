export default function getStudentIdsSum(listStudents) {
  return listStudents.reduce((sum, { id }) => sum + id, 0);
}
