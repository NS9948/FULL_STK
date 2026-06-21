import { useMemo } from "react";

const AnalyticsPanel = ({ employees }) => {
  const analytics = useMemo(() => {
    console.log("Calculating analytics...");

    const stats = {};

    employees.forEach((emp) => {
      stats[emp.role] = (stats[emp.role] || 0) + 1;
    });

    return stats;
  }, [employees]);

  return (
    <div>
      <h2>Analytics</h2>

      {Object.entries(analytics).map(
        ([role, count]) => (
          <p key={role}>
            {role}: {count}
          </p>
        )
      )}
    </div>
  );
};

export default AnalyticsPanel;