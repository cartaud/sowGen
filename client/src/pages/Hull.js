import React, { useState } from 'react';
import { Form, Button, Alert } from 'react-bootstrap';
import { Link } from "react-router-dom";
import { useMutation, useQuery } from '@apollo/client';
import { ADD_HULL } from '../utils/mutations';
import { QUERY_ME } from "../utils/queries";
import { useParams } from 'react-router-dom';
//We are passing the hull number through the url and we will use that to findOneAndUpdate by searching for hull number in Assessments
//then we will be adding the new set of data for each section (hull, propulsion, engine, ect. )
const Hull = () => {
  const { id } = useParams();
  const hullNumber = id

  const { loading, data } = useQuery(QUERY_ME);
  const profile = data?.me || {};

  const [formState, setFormState] = useState({ 
    hullNumber: hullNumber, 
    fiberglass: '', 
    gelCoat: '', 
    paint: '', 
    preservation: '' 
  }); 
  const [addHull] = useMutation(ADD_HULL)

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormState({ ...formState, [name]: value });
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    try {
      await addHull({
        variables: { input: { ...formState } }
      });   
      
      window.location.assign(`/generate/sponson/${hullNumber}`);
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
        <header style={styles.header}>7-Meter RIB Hull Assessment</header>
        <Form onSubmit={handleFormSubmit}>
        <Form.Group>
          <Form.Label htmlFor='fiberglass'>Fiberglass damage to hull? If none, leave blank.</Form.Label>
          <Form.Control
            type='text'
            name='fiberglass'
            onChange={handleInputChange}
            value={formState.fiberglass}
          /> SQFT
        </Form.Group>
        <Form.Group>
          <Form.Label htmlFor='gelCoat'>Gel Coat damage to hull? If none, leave blank.</Form.Label>
          <Form.Control
            type='text'
            name='gelCoat'
            onChange={handleInputChange}
            value={formState.gelCoat}
          /> SQFT
        </Form.Group>
        <Form.Group>
          <Form.Label htmlFor='paint'>Paint damage to hull? If none, leave blank.</Form.Label>
          <Form.Control
            type='text'
            name='paint'
            onChange={handleInputChange}
            value={formState.paint}
          /> SQFT
        </Form.Group>
        <Form.Group>
          <Form.Label htmlFor='preservation'>Surface stains to hull? If none, leave blank.</Form.Label>
          <Form.Control
            type='text'
            name='preservation'
            onChange={handleInputChange}
            value={formState.preservation}
          /> SQFT
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

export default Hull;