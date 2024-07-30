/* eslint-disable*/
export default function getListStudentIds(arrays) {
  if (!Array.isArray(arrays)) {
    return [];
  } else {
    let arrayList = []
    arrays.map(function(array) {
      arrayList.push(array.id)
    })
    return arrayList;
  }
}