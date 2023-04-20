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
      
      window.location.assign(`/generate/propulsion/${hullNumber}`);
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
          <Form.Label htmlFor='tube'>What is the condition of the sponson?</Form.Label>
          <Form.Control
            type='radio'
            name='tube'
            onChange={handleInputChange}
            value='Sponson is holding air but surface is dirty, recommend cleaning the surface of the sponson in its entirety.'
          /> 
          <span>Clean</span>
          <Form.Control
            type='radio'
            name='tube'
            onChange={handleInputChange}
            value='Sponson condition is below average, recommend accomplishing a SLEP level 1 to the sponson.'
          /> 
          <span>SLEP 1</span>
          <Form.Control
            type='radio'
            name='tube'
            onChange={handleInputChange}
            value='Sponson is beyond SLEP repair, recommend replacing sponson with new.'
          /> 
          <span>Replace</span>
        </Form.Group>
        <Form.Group>
          <Form.Label htmlFor='mbcs'>What is the condition of the MBCS</Form.Label>
          <Form.Control
            type='radio'
            name='mbcs'
            onChange={handleInputChange}
            value='Sponson MBCS is damaged, recommend replacing with new and installing using new lacing material.'
          />  
          <span>Replace</span>
        </Form.Group>
        <Form.Group>
          <Form.Label htmlFor='retainers'>What is the condition of the sponson stainless retainers?</Form.Label>
          <Form.Control
            type='radio'
            name='retainers'
            onChange={handleInputChange}
            value='Sponson metal skirt retainers have surface corrosion, recommend accomplishing preservation to remove corrosion.'
          /> 
          <span>Preservation</span>
          <Form.Control
            type='radio'
            name='retainers'
            onChange={handleInputChange}
            value='Sponson skirt retainers are beyond preservation or repair, recommend replacing with new and installing using new stainless steel fasteners.'
          /> 
          <span>Replace</span>
        </Form.Group>
        <Form.Group>
          <Form.Label htmlFor='transomStraps'>What is the condition of the sponson to transom straps?</Form.Label>
          <Form.Control
            type='radio'
            name='transomStraps'
            onChange={handleInputChange}
            value='Sponson transom attachment straps are peeling off, recommend gluing to the surface of the sponson.'
          /> 
          <span>Peeling</span>
          <Form.Control
            type='radio'
            name='transomStraps'
            onChange={handleInputChange}
            value='Sponson transom straps are beyond preservation or repair, recommend replacing with new.'
          /> 
          <span>Replace</span>
        </Form.Group>
        <Form.Group>
          <Form.Label htmlFor='sponsonGasket'>What is the condition of the sponson gasket/chafe protector?</Form.Label>
          <Form.Control
            type='radio'
            name='sponsonGasket'
            onChange={handleInputChange}
            value='Sponson to transom gasket/chafe protector is damaged, recommend replacing with new.'
          /> 
          <span>Replace</span>
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