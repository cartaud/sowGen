import React, { useState } from 'react';
import { Form, Button, Alert } from 'react-bootstrap';
import { Link } from "react-router-dom";
import { useMutation, useQuery } from '@apollo/client';
import { ADD_PIPING } from '../utils/mutations';
import { QUERY_ME } from "../utils/queries";
import { useParams } from 'react-router-dom';
//We are passing the hull number through the url and we will use that to findOneAndUpdate by searching for hull number in Assessments
//then we will be adding the new set of data for each section (hull, propulsion, engine, ect. )
const Piping = () => {
  const { id } = useParams();
  const hullNumber = id

  const { loading, data } = useQuery(QUERY_ME);
  const profile = data?.me || {};

  const [formState, setFormState] = useState({ 
    hullNumber: hullNumber, 
    seacock: '', 
    seacockHose: '',
    strainer: '', 
    strainerHose: '',
    fuelHoses: '', 
    fuelStripping: '', 
    flocs: '', 
    racorHousing: '',
    racorFilter: '',
    fuelTank: '',
    exhaustHose: '',
 }); 

  const [addPiping] = useMutation(ADD_PIPING)

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormState({ ...formState, [name]: value });
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    try {
      await addPiping({
        variables: { input: { ...formState } }
      });   
      
      //window.location.assign(`/generate/propulsion/${hullNumber}`);
    } catch (err) {
      console.error(err); 
    }
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

  if (!profile?.username) {
    return (
      <h4 style={styles.noUser}>
        Oops, looks like you're not logged in! Click 
        <Link to="/login" style={styles.link}> here </Link>
        to log in.
      </h4>
    );
  }

  return (
    <div style={styles.container}>
        <header style={styles.header}>7-Meter RIB Sponson Assessment</header>
        <Form onSubmit={handleFormSubmit}>
        <Form.Group>
          <Form.Label htmlFor='seacock'>What is the condition of the seacock?</Form.Label>
          <Form.Control
            type='text'
            name='seacock'
            onChange={handleInputChange}
            value={formState.seacock}
            required
          /> 
        </Form.Group>
        <Form.Group>
          <Form.Label htmlFor='seacockHose'>What is the condition of the raw water hose from seacock to strainer?</Form.Label>
          <Form.Control
            type='text'
            name='seacockHose'
            onChange={handleInputChange}
            value={formState.seacockHose}
            required
          /> 
        </Form.Group>
        <Form.Group>
          <Form.Label htmlFor='strainer'>What is the condition of the seawater strainer</Form.Label>
          <Form.Control
            type='text'
            name='strainer'
            onChange={handleInputChange}
            value={formState.strainer}
            required
          /> 
        </Form.Group>
        <Form.Group>
          <Form.Label htmlFor='strainerHose'>What is the condition of the seawater hose from the strainer to MPDE?</Form.Label>
          <Form.Control
            type='text'
            name='strainerHose'
            onChange={handleInputChange}
            value={formState.strainerHose}
            required
          /> 
        </Form.Group>
        <Form.Group>
          <Form.Label htmlFor='fuelHoses'>What is the condition of the blue fuel hoses?</Form.Label>
          <Form.Control
            type='text'
            name='fuelHoses'
            onChange={handleInputChange}
            value={formState.fuelHoses}
            required
          /> 
        </Form.Group>
        <Form.Group>
          <Form.Label htmlFor='fuelStripping'>What is the condition of the fuel stripping pump?</Form.Label>
          <Form.Control
            type='text'
            name='fuelStripping'
            onChange={handleInputChange}
            value={formState.fuelStripping}
            required
          /> 
        </Form.Group>
        <Form.Group>
          <Form.Label htmlFor='flocs'>What is the condition of the flocs?</Form.Label>
          <Form.Control
            type='text'
            name='flocs'
            onChange={handleInputChange}
            value={formState.flocs}
            required
          /> 
        </Form.Group>
        <Form.Group>
          <Form.Label htmlFor='racorHousing'>What is the condition of the RACOR housing?</Form.Label>
          <Form.Control
            type='text'
            name='racorHousing'
            onChange={handleInputChange}
            value={formState.racorHousing}
            required
          /> 
        </Form.Group>
        <Form.Group>
          <Form.Label htmlFor='racorFilter'>What is the condition of the RACOR filter?</Form.Label>
          <Form.Control
            type='text'
            name='racorFilter'
            onChange={handleInputChange}
            value={formState.racorFilter}
            required
          /> 
        </Form.Group>
        <Form.Group>
          <Form.Label htmlFor='fuelTank'>What is the condition of the fuel tank?</Form.Label>
          <Form.Control
            type='text'
            name='fuelTank'
            onChange={handleInputChange}
            value={formState.fuelTank}
            required
          /> 
        </Form.Group>
        <Form.Group>
          <Form.Label htmlFor='exhaustHose'>What is the condition of the exhaust hose?</Form.Label>
          <Form.Control
            type='text'
            name='exhaustHose'
            onChange={handleInputChange}
            value={formState.exhaustHose}
            required
          /> 
        </Form.Group>
        <Button
          type='submit'
          variant='success'>
          Submit
        </Button>
        </Form>
    </div> 
  );
};

export default Piping;