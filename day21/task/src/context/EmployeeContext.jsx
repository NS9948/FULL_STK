import { createContext, useReducer } from "react";
import reducer from "./employeeReducer";

const EmployeeContext = createContext(null);

function EmployeeProvider({ children }) {
    
    const initialState = {
        employees: []
    };

    const [state, dispatch] = useReducer(
        reducer,
        initialState
    );

    return (
        <EmployeeContext.Provider
          value={{ state, dispatch }}
        >
          {children}
        </EmployeeContext.Provider>
    );
}

export { EmployeeProvider };
export default EmployeeContext;