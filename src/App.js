import { useState,useEffect } from 'react';
import React from 'react';
import BarChart from './BarChart';
import EmployeeList from './EmployeeList'
import EmployeeTable from './EmployeeTable'

const App = () => {
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

  return (
    <div>
      <EmployeeList data = {employeeData}/>
      <BarChart data = {employeeData} className='bar'/>
      <EmployeeTable data = {employeeData}/>
    </div>
  );
};

export default App;
