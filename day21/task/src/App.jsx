import Header from "./components/Header";
import EmployeeForm from "./components/EmployeeForm";
import EmployeeList from "./components/EmployeeList";
import EmployeeStats from "./components/EmployeeStats";
import { useContext } from "react";
import EmployeeContext from "./context/EmployeeContext";

function App() {
  const { dispatch } =
    useContext(EmployeeContext);

  return (
    <>
      <Header />

      <EmployeeForm />

      <br />

      <EmployeeList />

      <br />

      <EmployeeStats />

      <button
        onClick={() =>
          dispatch({
            type: "CLEAR_ALL"
          })
        }
      >
        Clear All
      </button>
    </>
  );
}

export default App;