import { useState, useMemo } from "react";
import SearchBar from "./Components/SearchBar";
import EmployeeList from "./Components/EmployeeList";
import EmployeeStats from "./Components/EmployeeStats";
import AnalyticsPanel from "./Components/AnalyticsPanel";

function App() {
  const [form, setForm] = useState({
    name: "",
    role: "",
  });

  const [employees, setEmployees] = useState([]);
  const [search, setSearch] = useState("");

  function handleChange(e) {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  }

  function handleSubmit(e) {
    e.preventDefault();

    if (form.name.trim() && form.role.trim()) {
      setEmployees((prev) => [
        ...prev,
        {
          id: Date.now(),
          name: form.name,
          role: form.role,
        },
      ]);

      setForm({
        name: "",
        role: "",
      });
    }
  }

  const filteredEmployees = useMemo(() => {
    console.log("Filtering employees...");

    return employees.filter(
      (emp) =>
        emp.name.toLowerCase().includes(search.toLowerCase()) ||
        emp.role.toLowerCase().includes(search.toLowerCase())
    );
  }, [employees, search]);

  return (
    <>
      <h1>Employee Analytics Dashboard</h1>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          value={form.name}
          onChange={handleChange}
          placeholder="Employee Name"
        />

        <input
          type="text"
          name="role"
          value={form.role}
          onChange={handleChange}
          placeholder="Employee Role"
        />

        <button type="submit">Add Employee</button>
      </form>

      <SearchBar
        search={search}
        setSearch={setSearch}
      />

      <EmployeeStats
        employees={employees}
        filteredEmployees={filteredEmployees}
      />

      <AnalyticsPanel employees={employees} />

      <EmployeeList filteredEmployees={filteredEmployees} />
    </>
  );
}

export default App;