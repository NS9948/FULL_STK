const EmployeeList = ({ filtered }) => {
    if (filtered.length === 0) {
        return <p>No employees found</p>;
      }
    return (
      <>
        {filtered.map((emp, i) => (
          <div key={i}>
            <p>Name: {emp.name}</p>
            <p>Role: {emp.role}</p>
          </div>
        ))}
      </>
    );
  }
  
  export default EmployeeList;