import { useState } from "react";
import useEmployeeDispatch from "../hooks/useEmployeeDispatch";
function EmployeeForm() {
  const [form, setForm] = useState({
    name: "",
    role: ""
  });

  const dispatch =
  useEmployeeDispatch();

  function handleChange(e) {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  }

  function handleAddEmployee() {
    if (
      form.name.trim() === "" ||
      form.role.trim() === ""
    ) {
      return;
    }

    dispatch({
      type: "ADD_EMPLOYEE",
      payload: {
        id: Date.now(),
        name: form.name,
        role: form.role
      }
    });

    setForm({
      name: "",
      role: ""
    });
  }

  return (
    <>
      <input
        type="text"
        name="name"
        placeholder="Employee Name"
        value={form.name}
        onChange={handleChange}
      />

      <br />

      <input
        type="text"
        name="role"
        placeholder="Employee Role"
        value={form.role}
        onChange={handleChange}
      />

      <br />

      <button onClick={handleAddEmployee}>
        Add Employee
      </button>
    </>
  );
}

export default EmployeeForm;