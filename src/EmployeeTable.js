import React, { useState, useEffect } from 'react';
import axios from 'axios';

const EmployeeTable = () => {
    const [employees, setEmployee] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('http://localhost:5000/api/employees');
                setEmployee(response.data);
            } catch (error) {
                // Handle Axios error
                setError(error);
            }
        };

        fetchData();
    }, []); // Empty dependency array ensures useEffect runs once on component mount

    return (
        <div>
            <div className='table-container'>
                {error ? (
                    <p>Error loading data: {error.message}</p>
                ) : (
                    <table className="employee-table">
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Department</th>
                                <th>Position</th>
                                <th>Salary</th>
                            </tr>
                        </thead>
                        <tbody>
                            {employees.map((employee) => (
                                <tr key={employee.id}>
                                    <td>{employee.name}</td>
                                    <td>{employee.department}</td>
                                    <td>{employee.position}</td>
                                    <td>{employee.salary}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                )}
            </div>
        </div>
    );
};

export default EmployeeTable;
