export default function updateStudentGradeByCity(listStudents, city, newGrades) {
  return listStudents
    .filter((student) => student.location === city)
    .map((student) => {
      const matchingGrade = newGrades.find((grade) => grade.studentId === student.id);
      let grade;
      if (matchingGrade && matchingGrade.grade !== undefined) {
        grade = matchingGrade.grade;
      } else {
        grade = 'N/A';
      }
      return { ...student, grade };
    });
}
