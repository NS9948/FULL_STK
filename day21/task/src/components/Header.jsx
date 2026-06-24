import { useContext } from "react";
import EmployeeContext from "../context/EmployeeContext";

function Header() {
  const { state } = useContext(EmployeeContext);

  return (
    <>
      <h1>Employee Dashboard</h1>

      <h3>
        Total Employees:{" "}
        {state.employees.length}
      </h3>
    </>
  );
}

export default Header;