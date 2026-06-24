import { useContext } from "react";
import EmployeeContext from "../context/EmployeeContext";

function useEmployees() {
  const { state } =
    useContext(EmployeeContext);

  return state.employees;
}

export default useEmployees;