/* eslint-disable */
export default function updateStudentGradeByCity(students, city, newGrades) {
  const filteredList = students.filter(student => student.location === city);
  const updatedList = filteredList.map(student => {
    const studentGrade = newGrades.find(grade => grade.studentId === student.id);
    if (studentGrade) {
      student.grade = studentGrade.grade;
    } else {
      student.grade = 'N/A';
    }
    return student;
  });
  return updatedList;
}