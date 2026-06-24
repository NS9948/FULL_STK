import useEmployeeDispatch from "../hooks/useEmployeeDispatch";
import useEmployees from "../hooks/useEmployees";

function EmployeeList() {
  const employees =
  useEmployees();

const dispatch =
  useEmployeeDispatch();

  return (
    <>
      {employees.map(emp => (
        <div key={emp.id}>
          <p>Name: {emp.name}</p>
          <p>Role: {emp.role}</p>

          <button
            onClick={() =>
              dispatch({
                type: "DELETE_EMPLOYEE",
                payload: emp.id
              })
            }
          >
            Delete
          </button>
        </div>
      ))}
    </>
  );
}

export default EmployeeList;