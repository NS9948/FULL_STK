const EmployeeStats = ({employee,filtered}) => {
    return(
        <div>
            <p>Total Employees: {employee.length}</p>
            <p>Matching Employees: {filtered.length}</p>
        </div>
        
    )
}

export default EmployeeStats;