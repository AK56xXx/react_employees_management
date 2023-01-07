import React from 'react';
import _ from 'lodash';
import Employee from './Employee';


const EmployeesList = ({ employees, setEmployees }) => {


  //remove employee function
  const handleRemoveEmployee = (id) => {
    setEmployees(employees.filter((employee) => employee.id !== id));
  }

  return (

    <React.Fragment>
      <div className="employee-list">
        {!_.isEmpty(employees) ? (
          employees.map((employee) => ( //mapping employees list with delete handle (refresh)
            <Employee key={employee.id} {...employee} handleRemoveEmployee={handleRemoveEmployee} />
          ))
        ) : (
          <p className="message">No employees available.</p>
        )}
      </div>
    </React.Fragment>
  );


};

export default EmployeesList;