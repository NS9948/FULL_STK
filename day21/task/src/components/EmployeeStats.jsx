import EmployeeContext from "../context/EmployeeContext";
import useEmployees from "../hooks/useEmployees";
import { useContext } from "react";

function EmployeeStats() {
  const { dispatch } =
    useContext(EmployeeContext);
  const employees =
  useEmployees();

  return (
    <div>
      <h3>
      Total Employees:{" "}
      {employees.length}
      </h3>
      <button
      onClick={() =>
        dispatch({
          type: "CLEAR_ALL"
        })
      }
      >
        Clear All
      </button>
    </div>
    
  );
}

export default EmployeeStats;