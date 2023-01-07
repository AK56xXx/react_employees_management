import React from 'react';
import EmployeeForm from './EmployeeForm';
import { useNavigate } from "react-router-dom";

const AddEmployee = ({ employees, setEmployees }) => {
  const navigate = useNavigate();

  //add employee to list
  const handleOnSubmit = (employee) => {
    setEmployees([employee, ...employees]);

    //return to employees list page
    navigate('/');

    console.log(employee);
  };


  //when submit happen we add employee with handleOnSubmit
  return (
    <React.Fragment>
      <EmployeeForm handleOnSubmit={handleOnSubmit} />
    </React.Fragment>
  );
};

export default AddEmployee;