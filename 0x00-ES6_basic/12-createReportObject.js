export default function createReportObject(employeesList) {
  return {
    allEmployees: {
      ...employeesList,
    },
    getNumberOfDepartments() {
      const num = Object.keys(employeesList).length;
      return num;
    },
  };
}
