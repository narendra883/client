import React from 'react';


const EmployeeList = (props)=> {
    const {data} = props
    // Calculate number of employees and average salary
    const numberOfEmployees = data.length;
    const averageSalary =
        numberOfEmployees > 0
            ? data.reduce((sum, employee) => sum + employee.salary, 0) /
            numberOfEmployees : 0;
    

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
