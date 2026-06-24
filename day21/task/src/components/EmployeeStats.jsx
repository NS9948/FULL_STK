import useEmployees from "../hooks/useEmployees";
function EmployeeStats() {
  const employees =
  useEmployees();

  return (
    <h3>
      Total Employees:{" "}
      {employees.length}
    </h3>
  );
}

export default EmployeeStats;