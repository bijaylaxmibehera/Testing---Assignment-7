import employeeReducer from "./employee.reducer";

describe("employee reducer", () => {
  it("should add employee", () => {
    const initialState = {
      employees: [],
    };
    const newEmployee = {
      id: 1,
      name: "emp1",
      role: "developer",
      salary: 10000,
    };
    const action = {
      type: "ADD_EMPLOYEE",
      payload: { employee: newEmployee },
    };
    const updatedState = employeeReducer(initialState, action);
    expect(updatedState).toEqual({
      employees: [
        {
          id: 1,
          name: "emp1",
          role: "developer",
          salary: 10000,
        },
      ],
    });
  });
  it("should update salary of an employee", () => {
    const initialState = {
      employees: [
        {
          id: 1,
          name: "emp1",
          role: "developer",
          salary: 10000,
        },
      ],
    };
    const action = {
      type: "UPDATE_SALARY",
      payload: {
        id: 1,
        salary: 20000,
      },
    };
    const updatedState = employeeReducer(initialState, action);
    expect(updatedState).toEqual({
      employees: [
        {
          id: 1,
          name: "emp1",
          role: "developer",
          salary: 20000,
        },
      ],
    });
  });
  it("should remove employee", () => {
    const initialState = {
      employees: [
        {
          id: 1,
          name: "emp1",
          role: "developer",
          salary: 10000,
        },
      ],
    };
    const action = {
      type: "REMOVE_EMPLOYEE",
      payload: { empId: 1 },
    };
    const updatedState = employeeReducer(initialState, action);
    expect(updatedState).toEqual({
      employees: [],
    });
  });
  it("should filter employee based on their roles", () => {
    const initialState = {
      employees: [
        {
          id: 1,
          name: "emp1",
          role: "developer",
          salary: 10000,
        },
        {
          id: 2,
          name: "emp2",
          role: "developer",
          salary: 20000,
        },
        {
          id: 3,
          name: "emp3",
          role: "manager",
          salary: 15000,
        },
      ],
    };
    const action = {
      type: "FILTER_EMPLOYEES",
      payload: { role: "manager" },
    };
    const updatedState = employeeReducer(initialState, action);
    expect(updatedState).toEqual({
      employees: [
        {
          id: 3,
          name: "emp3",
          role: "manager",
          salary: 15000,
        },
      ],
    });
  });
});
