import React from 'react';
import EmployeeForm from './EmployeeForm';
import { useParams } from 'react-router-dom';
import { useNavigate } from "react-router-dom";

const EditEmployee = ({ employees, setEmployees }) => {
  const navigate = useNavigate();
  /* receving id */
  const { id } = useParams();
  /*compare the id to employee id to select the employee*/
  const employeeToEdit = employees.find((employee) => employee.id === id);


  const handleOnSubmit = (employee) => {
    const filteredEmployees = employees.filter((employee) => employee.id !== id);
    setEmployees([employee, ...filteredEmployees]);
    navigate('/');
  };

  return (
    <div>
      {/*passing the employee to employeeForm*/}
      <EmployeeForm employee={employeeToEdit} handleOnSubmit={handleOnSubmit} />
    </div>
  );
};

export default EditEmployee;