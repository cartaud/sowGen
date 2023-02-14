import React, { useState } from 'react';
import { Form, Button, Alert } from 'react-bootstrap';
import { Link } from "react-router-dom";
import { useMutation, useQuery } from '@apollo/client';
import { CREATE_ASSESSMENT } from '../utils/mutations';
import { QUERY_ME } from "../utils/queries"

const Generate = () => {
  const { loading, data } = useQuery(QUERY_ME);
  const profile = data?.me || {};

  const [formState, setFormState] = useState({ hullNumber: '', hull: [] }); //, propulsion: [], sponson: [], engine: [], piping: [], electrical: [], deck: []
  const [createAssessment] = useMutation(CREATE_ASSESSMENT)

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormState({ ...formState, [name]: value });
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    try {
      const res = await createAssessment({
        variables: { input: { ...formState } }
      });  
      const num = res.data.createAssessment.hullNumber
      window.location.assign(`/generate/hull/${num}`);
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
        <header style={styles.header}>7-Meter RIB Assessment</header>
        <Form onSubmit={handleFormSubmit}>
        <Form.Group>
          <Form.Label htmlFor='hullNumber'>Hull Number</Form.Label>
          <Form.Control
            type='text'
            placeholder='7MRBXXXX'
            name='hullNumber'
            onChange={handleInputChange}
            value={formState.hullNumber}
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

export default Generate;