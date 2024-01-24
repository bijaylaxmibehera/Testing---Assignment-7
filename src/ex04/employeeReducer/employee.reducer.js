export const initialState = {
  employees: [],
};

function employeeReducer(state = initialState, action) {
  switch (action.type) {
    case "ADD_EMPLOYEE":
      return {
        ...state,
        employees: [...state.employees, action.payload.employee],
      };
    case "UPDATE_SALARY":
      return {
        ...state,
        employees: state.employees.map((employee) =>
          employee.id === action.payload.id
            ? { ...employee, salary: action.payload.salary }
            : employee,
        ),
      };
    case "REMOVE_EMPLOYEE":
      return {
        ...state,
        employees: state.employees.filter(
          (employee) => employee.id !== action.payload.empId,
        ),
      };
    case "FILTER_EMPLOYEES":
      return {
        ...state,
        employees: state.employees.filter((employee) =>
          employee.role.includes(action.payload.role),
        ),
      };
    default:
      return state;
  }
}

export default employeeReducer;
