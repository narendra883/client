import React, { useState, useEffect } from 'react';


function EmployeeList() {
    const [employeeData, setEmployeeData] = useState([]);

    useEffect(() => {
        const fetchEmployeeData = async () => {
            try {
                const response = await fetch('http://localhost:5000/api/employees'); // replace with your API endpoint
                const data = await response.json();
                setEmployeeData(data);
            } catch (error) {
                console.error('Error fetching employee data:', error);
            }
        };

        fetchEmployeeData();
    }, []);

    // Calculate number of employees and average salary
    const numberOfEmployees = employeeData.length;
    const averageSalary =
        numberOfEmployees > 0
            ? employeeData.reduce((sum, employee) => sum + employee.salary, 0) /
            numberOfEmployees : 0;
    const salaryValues = employeeData.map((employee) => employee.salary);

    // Render your component
    return (
        <div>
            <div className='container'>
                <div className='data'>
                    <h1>Number Of Employees</h1>
                    <div className="box">
                        <h1>{numberOfEmployees}</h1>
                    </div>
                </div>
                <div className='data'>
                    <h1>Average Salary</h1>
                    <div className="box-1">
                        <h1> ${averageSalary.toFixed(2)}</h1>
                    </div>
                </div>
            </div>
           
        </div>
    );
}

export default EmployeeList;
