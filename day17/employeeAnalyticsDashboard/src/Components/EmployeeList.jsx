const EmployeeList = ({
    filteredEmployees,
  }) => {
    if (filteredEmployees.length === 0) {
      return <p>No employees found</p>;
    }
  
    return (
      <>
        {filteredEmployees.map((emp) => (
          <div key={emp.id}>
            <p>Name: {emp.name}</p>
            <p>Role: {emp.role}</p>
          </div>
        ))}
      </>
    );
  };
  
  export default EmployeeList;