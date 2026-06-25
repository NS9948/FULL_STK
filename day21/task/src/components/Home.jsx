import { useContext } from "react";
import EmployeeContext from "../context/EmployeeContext";

const Home = () => {
  return (
    <div>
      <h1>Welcome to Employee Portal</h1>

      <p>
        Manage your employees efficiently with this React-based Employee Portal.
      </p>

      <h2>Quick Overview</h2>

      <ul>
        <li>➕ Add new employees</li>
        <li>👥 View all employees</li>
        <li>🗑️ Delete employees</li>
        <li>📊 View employee statistics</li>
      </ul>

      <p>
        Use the navigation bar to explore different sections of the application.
      </p>
    </div>
  );
};

export default Home;