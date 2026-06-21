const EmployeeStats = ({
    employees,
    filteredEmployees,
  }) => {
    return (
      <div>
        <p>Total Employees: {employees.length}</p>
  
        <p>
          Matching Employees:{" "}
          {filteredEmployees.length}
        </p>
      </div>
    );
  };
  
  export default EmployeeStats;