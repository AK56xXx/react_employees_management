import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import { v4 as uuidv4 } from 'uuid';
//add/edit form
//useState hook to store all the entered details
const EmployeeForm = (props) => {
  const [employee, setEmployee] = useState({
    firstname: props.employee ? props.employee.firstname : '',
    lastname: props.employee ? props.employee.lastname : '',
    occupation: props.employee ? props.employee.occupation : '',
    hiredate: props.employee ? props.employee.hiredate : ''
  });

  // date handler
  const dateHandler = (event) => {
    setEmployee({ ...employee, hiredate: event.target.value });
  };

  const [errorMsg, setErrorMsg] = useState('');
  const { firstname, lastname, occupation, hiredate } = employee;

  const handleOnSubmit = (event) => {
    event.preventDefault();
    const values = [firstname, lastname, occupation, hiredate];
    let errorMsg = '';

    // check empty fields
    const allFieldsFilled = values.every((field) => {
      const value = `${field}`.trim();
      return value !== '';
    });

    if (allFieldsFilled) {
      const employee = {
        id: uuidv4(),
        firstname,
        lastname,
        occupation,
        hiredate
      };

      //the props need to be filled before submit
      //passing object employee to AddEmployee using props
      props.handleOnSubmit(employee);
    } else {
      errorMsg = 'Please fill out all the fields.';
    }
    setErrorMsg(errorMsg);
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    switch (name) {


      default:
        setEmployee((prevState) => ({
          ...prevState,
          [name]: value
        }));
    }
  };

  return (
    <div className="main-form">
      {errorMsg && <p className="errorMsg">{errorMsg}</p>}
      <Form onSubmit={handleOnSubmit}>
        <Form.Group controlId="firstname">
          <Form.Label>First Name</Form.Label>
          <Form.Control
            className="input-control"
            type="text"
            name="firstname"
            value={firstname}
            placeholder="Enter first name"
            onChange={handleInputChange}
          />
        </Form.Group>
        <Form.Group controlId="lastname">
          <Form.Label>Last Name</Form.Label>
          <Form.Control
            className="input-control"
            type="text"
            name="lastname"
            value={lastname}
            placeholder="Enter last name"
            onChange={handleInputChange}
          />
        </Form.Group>
        <Form.Group controlId="occupation">
          <Form.Label>Occupation</Form.Label>
          <Form.Control
            className="input-control"
            type="text"
            name="occupation"
            value={occupation}
            placeholder="Enter employee occupation"
            onChange={handleInputChange}
          />
        </Form.Group>

        <Form.Group controlId="hiredate">
          <Form.Label>Hire date</Form.Label>
          <Form.Control
            className="input-control"
            type="date"
            min="2019-01-01"
            max="2023-12-31"
            value={employee.hiredate}
            onChange={dateHandler}
          />
        </Form.Group>

        <Button variant="primary" type="submit" className="submit-btn">
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default EmployeeForm;