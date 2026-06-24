
function reducer(state, action){
    switch(action.type){
      case "ADD_EMPLOYEE":
        return {
          employees: [
            ...state.employees,
            action.payload
          ]
        }

      case "DELETE_EMPLOYEE": 
        return {
          employees: state.employees.filter(emp => emp.id !== action.payload)
        }

      case "CLEAR_ALL":
        return{
          employees: []
        }
      default:
        return state;
    }
  }

export default reducer