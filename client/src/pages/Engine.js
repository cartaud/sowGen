import React, { useState } from 'react';
import { Form, Button, Alert } from 'react-bootstrap';
import { Link } from "react-router-dom";
import { useMutation, useQuery } from '@apollo/client';
import { ADD_ENGINE } from '../utils/mutations';
import { QUERY_ME } from "../utils/queries";
import { useParams } from 'react-router-dom';

const Engine = () => {
  const { id } = useParams();
  const hullNumber = id

  const { loading, data } = useQuery(QUERY_ME);
  const profile = data?.me || {};

  const [formState, setFormState] = useState({ 
    hullNumber: hullNumber, 
    enginePaint: '',
    engineOil: '',
    oilFilter: '',
    oilHoses: '',
    fuelFilter: '',
    fuelHoses: '',
    coolant: '',
    coolantCap: '',
    waterPump: '',
    afterCooler: '',
    heatExchanger: '',
    waterHoses: '',
    zincs: '',
    starter: '',
    alternator: '',
    ecm: '',
    motorMounts: '',
    mountingBrackets: '',
    turbo: '',
    turboOilLine: '',
    turboCoolantLine: '',
    waterBelt: '',
    driveBelt: '',
    beltGuard: '',
 }); 

  const [addEngine] = useMutation(ADD_ENGINE)

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormState({ ...formState, [name]: value });
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    try {
      await addEngine({
        variables: { input: { ...formState } }
      });   
      
      window.location.assign(`/generate/electrical/${hullNumber}`);
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
          <Form.Label htmlFor='enginePaint'>What is the condition of the engine paint?</Form.Label>
          <Form.Control
            type='text'
            name='enginePaint'
            onChange={handleInputChange}
            value={formState.enginePaint}
            required
          /> 
        </Form.Group>
        <Form.Group>
          <Form.Label htmlFor='engineOil'>What is the condition of the engine oil?</Form.Label>
          <Form.Control
            type='text'
            name='engineOil'
            onChange={handleInputChange}
            value={formState.engineOil}
            required
          /> 
        </Form.Group>
        <Form.Group>
          <Form.Label htmlFor='oilFilter'>What is the condition of the engine spin on oil filter</Form.Label>
          <Form.Control
            type='text'
            name='oilFilter'
            onChange={handleInputChange}
            value={formState.oilFilter}
            required
          /> 
        </Form.Group>
        <Form.Group>
          <Form.Label htmlFor='oilHoses'>What is the condition of the oil filter inlet and outlet hoses?</Form.Label>
          <Form.Control
            type='text'
            name='oilHoses'
            onChange={handleInputChange}
            value={formState.oilHoses}
            required
          /> 
        </Form.Group>
        <Form.Group>
          <Form.Label htmlFor='fuelFilter'>What is the condition of the spin on fuel filter?</Form.Label>
          <Form.Control
            type='text'
            name='fuelFilter'
            onChange={handleInputChange}
            value={formState.fuelFilter}
            required
          /> 
        </Form.Group>
        <Form.Group>
          <Form.Label htmlFor='fuelHoses'>What is the condition of the fuel filter inlet and outlet hoses?</Form.Label>
          <Form.Control
            type='text'
            name='fuelHoses'
            onChange={handleInputChange}
            value={formState.fuelHoses}
            required
          /> 
        </Form.Group>
        <Form.Group>
          <Form.Label htmlFor='coolant'>What is the condition of the engine coolant?</Form.Label>
          <Form.Control
            type='text'
            name='coolant'
            onChange={handleInputChange}
            value={formState.coolant}
            required
          /> 
        </Form.Group>
        <Form.Group>
          <Form.Label htmlFor='coolantCap'>What is the condition of the coolant pressure cap?</Form.Label>
          <Form.Control
            type='text'
            name='coolantCap'
            onChange={handleInputChange}
            value={formState.coolantCap}
            required
          /> 
        </Form.Group>
        <Form.Group>
          <Form.Label htmlFor='waterPump'>What is the condition of the raw water pump?</Form.Label>
          <Form.Control
            type='text'
            name='waterPump'
            onChange={handleInputChange}
            value={formState.waterPump}
            required
          /> 
        </Form.Group>
        <Form.Group>
          <Form.Label htmlFor='afterCooler'>What is the condition of the aftercooler assembly?</Form.Label>
          <Form.Control
            type='text'
            name='afterCooler'
            onChange={handleInputChange}
            value={formState.afterCooler}
            required
          /> 
        </Form.Group>
        <Form.Group>
          <Form.Label htmlFor='heatExchanger'>What is the condition of the heat exchanger assembly?</Form.Label>
          <Form.Control
            type='text'
            name='heatExchanger'
            onChange={handleInputChange}
            value={formState.heatExchanger}
            required
          /> 
        </Form.Group>
        <Form.Group>
          <Form.Label htmlFor='waterHoses'>What is the condition of the water hoses and clamps?</Form.Label>
          <Form.Control
            type='text'
            name='waterHoses'
            onChange={handleInputChange}
            value={formState.waterHoses}
            required
          /> 
        </Form.Group>
        <Form.Group>
          <Form.Label htmlFor='zincs'>What is the condition of the engine zincs?</Form.Label>
          <Form.Control
            type='text'
            name='zincs'
            onChange={handleInputChange}
            value={formState.zincs}
            required
          /> 
        </Form.Group>
        <Form.Group>
          <Form.Label htmlFor='starter'>What is the condition of the starter assembly?</Form.Label>
          <Form.Control
            type='text'
            name='starter'
            onChange={handleInputChange}
            value={formState.starter}
            required
          /> 
        </Form.Group>
        <Form.Group>
          <Form.Label htmlFor='alternator'>What is the condition of the alternator assembly?</Form.Label>
          <Form.Control
            type='text'
            name='alternator'
            onChange={handleInputChange}
            value={formState.alternator}
            required
          /> 
        </Form.Group>
        <Form.Group>
          <Form.Label htmlFor='ecm'>What is the condition of the engine ecm?</Form.Label>
          <Form.Control
            type='text'
            name='ecm'
            onChange={handleInputChange}
            value={formState.ecm}
            required
          /> 
        </Form.Group>
        <Form.Group>
          <Form.Label htmlFor='motorMounts'>What is the condition of the motor mounts?</Form.Label>
          <Form.Control
            type='text'
            name='motorMounts'
            onChange={handleInputChange}
            value={formState.motorMounts}
            required
          /> 
        </Form.Group>
        <Form.Group>
          <Form.Label htmlFor='mountingBrackets'>What is the condition of the engine mounting brackets?</Form.Label>
          <Form.Control
            type='text'
            name='mountingBrackets'
            onChange={handleInputChange}
            value={formState.mountingBrackets}
            required
          /> 
        </Form.Group>
        <Form.Group>
          <Form.Label htmlFor='turbo'>What is the condition of the turbo assembly?</Form.Label>
          <Form.Control
            type='text'
            name='turbo'
            onChange={handleInputChange}
            value={formState.turbo}
            required
          /> 
        </Form.Group>
        <Form.Group>
          <Form.Label htmlFor='turboOilLine'>What is the condition of the oil lines on the turbo?</Form.Label>
          <Form.Control
            type='text'
            name='turboOilLine'
            onChange={handleInputChange}
            value={formState.turboOilLine}
            required
          /> 
        </Form.Group>
        <Form.Group>
          <Form.Label htmlFor='turboCoolantLine'>What is the condition of the coolant lines on the turbo?</Form.Label>
          <Form.Control
            type='text'
            name='turboCoolantLine'
            onChange={handleInputChange}
            value={formState.turboCoolantLine}
            required
          /> 
        </Form.Group>
        <Form.Group>
          <Form.Label htmlFor='waterBelt'>What is the condition of the water belt?</Form.Label>
          <Form.Control
            type='text'
            name='waterBelt'
            onChange={handleInputChange}
            value={formState.waterBelt}
            required
          /> 
        </Form.Group>
        <Form.Group>
          <Form.Label htmlFor='driveBelt'>What is the condition of the drive belt?</Form.Label>
          <Form.Control
            type='text'
            name='driveBelt'
            onChange={handleInputChange}
            value={formState.driveBelt}
            required
          /> 
        </Form.Group>
        <Form.Group>
          <Form.Label htmlFor='beltGuard'>What is the condition of the belt guard?</Form.Label>
          <Form.Control
            type='text'
            name='beltGuard'
            onChange={handleInputChange}
            value={formState.beltGuard}
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

export default Engine;