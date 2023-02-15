import React, { useState } from 'react';
import { Form, Button, Alert } from 'react-bootstrap';
import { Link } from "react-router-dom";
import { useMutation, useQuery } from '@apollo/client';
import { ADD_SPONSON } from '../utils/mutations';
import { QUERY_ME } from "../utils/queries";
import { useParams } from 'react-router-dom';
//We are passing the hull number through the url and we will use that to findOneAndUpdate by searching for hull number in Assessments
//then we will be adding the new set of data for each section (hull, propulsion, engine, ect. )
const Sponson = () => {
  const { id } = useParams();
  const hullNumber = id

  const { loading, data } = useQuery(QUERY_ME);
  const profile = data?.me || {};

  const [formState, setFormState] = useState({ hullNumber: hullNumber, tube: '', mbcs: '', retainers: '', transomStraps: '', sponsonGasket: '' }); 
  const [addSponson] = useMutation(ADD_SPONSON)

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormState({ ...formState, [name]: value });
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    try {
      await addSponson({
        variables: { input: { ...formState } }
      });   
      
      //window.location.assign(`/generate/sponson/${hullNumber}`);
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
          <Form.Label htmlFor='hullNumber'>What is the condition of the sponson?</Form.Label>
          <Form.Control
            type='text'
            name='tube'
            onChange={handleInputChange}
            value={formState.tube}
            required
          /> 
        </Form.Group>
        <Form.Group>
          <Form.Label htmlFor='hullNumber'>What is the condition of the MBCS</Form.Label>
          <Form.Control
            type='text'
            name='mbcs'
            onChange={handleInputChange}
            value={formState.mbcs}
            required
          /> 
        </Form.Group>
        <Form.Group>
          <Form.Label htmlFor='hullNumber'>What is the condition of the sponson stainless retainers?</Form.Label>
          <Form.Control
            type='text'
            name='retainers'
            onChange={handleInputChange}
            value={formState.retainers}
            required
          /> 
        </Form.Group>
        <Form.Group>
          <Form.Label htmlFor='hullNumber'>What is the condition of the sponson to transom straps?</Form.Label>
          <Form.Control
            type='text'
            name='transomStraps'
            onChange={handleInputChange}
            value={formState.transomStraps}
            required
          /> 
        </Form.Group>
        <Form.Group>
          <Form.Label htmlFor='hullNumber'>What is the condition of the sponson gasket/chafe protector?</Form.Label>
          <Form.Control
            type='text'
            name='sponsonGasket'
            onChange={handleInputChange}
            value={formState.sponsonGasket}
            required
          /> 
        </Form.Group>
        <Button
          disabled={!(formState.hullNumber)}
          type='submit'
          variant='success'>
          Submit
        </Button>
        </Form>
    </div> 
  );
};

export default Sponson;