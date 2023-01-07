import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { useNavigate } from "react-router-dom";
// employee box form
const Employee = ({
  
  id,
  firstname,
  lastname,
  occupation,
  hiredate,
  handleRemoveEmployee
}) => {
  /* hook useNavigate to browse routes */
  const navigate = useNavigate();
  return (
    
    <Card style={{ width: '18rem' }} className="employee">
      <Card.Body>
        <Card.Title className="employee-title">{firstname} {lastname}</Card.Title>
        <div className="employee-details">
          <div>First Name: {firstname}</div>
          <div>Last Name: {lastname} </div>
          <div>Occupation: {occupation} </div>
          <div>Hire Date: {new Date(hiredate).toDateString()}</div>
        </div>
                                                      {/* route edit with employee id*/}
        <Button variant="primary" onClick={() => navigate(`/edit/${id}`)}>Edit</Button>{' '}
        <Button variant="danger" onClick={() => handleRemoveEmployee(id)}>
          Delete
        </Button>
      </Card.Body>
    </Card>
  );
};

export default Employee;