export default function getStudentsByLocation(getListStudents, city) {
  const newStudentList = getListStudents.filter((list) => list.location === city);
  return newStudentList;
}
