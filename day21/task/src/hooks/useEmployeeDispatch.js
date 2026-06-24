import { useContext } from "react";
import EmployeeContext from "../context/EmployeeContext";

function useEmployeeDispatch() {
  const { dispatch } =
    useContext(EmployeeContext);

  return dispatch;
}

export default useEmployeeDispatch;