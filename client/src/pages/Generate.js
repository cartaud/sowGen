import React, { useState } from 'react';
import { Form, Button, Alert } from 'react-bootstrap';
import { Link } from "react-router-dom";
import { useMutation } from '@apollo/client';

const Generate = () => {

  const [userFormData, setUserFormData] = useState({ hullNumber: ''});

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setUserFormData({ ...userFormData, [name]: value });
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    // check if form has everything (as per react-bootstrap docs)
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    try {
      //const { data } = await login({
      //  variables: {...userFormData}
      //});
//need to create route on backend 
    } catch (err) {
      console.error(err);
      
    }

    setUserFormData({
      hullNumber: ''
    });
  };

    const styles = {
        container: {
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '20px',
            marginTop: '20px'
        },
        header: {
          color: 'purple',
          fontSize: '24px'
        }
    };

  return (
    <div style={styles.container}>
        <header style={styles.header}>7-Meter RIB Assessment</header>
        <Form onSubmit={handleFormSubmit}>
        <Form.Group>
          <Form.Label htmlFor='hullNumber'>Hull Number</Form.Label>
          <Form.Control
            type='text'
            placeholder='7MRBXXXX'
            name='hullNumber'
            onChange={handleInputChange}
            value={userFormData.hullNumber}
            required
          />
          
        </Form.Group>
        <Button
          disabled={!(userFormData.hullNumber)}
          type='submit'
          variant='success'>
          Submit
        </Button>
        </Form>
    </div> 
  );
};

export default Generate;