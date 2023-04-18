import React, { useState } from 'react';
import { Form, Button, Alert } from 'react-bootstrap';
import { Link } from "react-router-dom";
import { useMutation, useQuery } from '@apollo/client';
import { ADD_ELECTRICAL } from '../utils/mutations';
import { QUERY_ME } from "../utils/queries";
import { useParams } from 'react-router-dom';

//need to add hand held spot light and move position of strobe next to speaker

const Electrical = () => {
  const { id } = useParams();
  const hullNumber = id

  const { loading, data } = useQuery(QUERY_ME);
  const profile = data?.me || {};

  const [formState, setFormState] = useState({ 
    hullNumber: hullNumber, 
    navLights: '',
    anchorLight: '',
    horn: '',
    bilgePump: '',
    pumpLed: '',
    floatSwitch: '',
    controlSwitches: '',
    trimSwitches: '',
    trimGauge: '',
    trimLed: '',
    trimPump: '',
    chargingBreaker: '',
    preHeaterBreaker: '',
    polarityLed: '',
    vhfRadio: '',
    vhfAntenna: '',
    gps: '',
    smartcraft: '',
    whelenControl: '',
    whelenMic: '',
    whelenSpeaker: '',
    strobe: '',
    spotlight: '',
    receptacles: '',
    mobiDisplay: '',
    mobiPower: '',
    mobiData: '',
    mobiAntenna: '',
    barrelSwitch: '',
    batteries: '',
    batteryCables: '',
    batteryCharger: '',
    interiorBreakers: '',
 }); 

  const [addElectrical] = useMutation(ADD_ELECTRICAL)

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormState({ ...formState, [name]: value });
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    try {
      await addElectrical({
        variables: { input: { ...formState } }
      });   
      
      //window.location.assign(`/generate/deck/${hullNumber}`);
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
          <Form.Label htmlFor='navLights'>What is the condition of the navigation lights?</Form.Label>
          <Form.Control
            type='text'
            name='navLights'
            onChange={handleInputChange}
            value={formState.navLights}
            required
          /> 
        </Form.Group>
        <Form.Group>
          <Form.Label htmlFor='anchorLight'>What is the condition of the anchor light?</Form.Label>
          <Form.Control
            type='text'
            name='anchorLight'
            onChange={handleInputChange}
            value={formState.anchorLight}
            required
          /> 
        </Form.Group>
        <Form.Group>
          <Form.Label htmlFor='horn'>What is the condition of the interior console mounted horn?</Form.Label>
          <Form.Control
            type='text'
            name='horn'
            onChange={handleInputChange}
            value={formState.horn}
            required
          /> 
        </Form.Group>
        <Form.Group>
          <Form.Label htmlFor='bilgePump'>What is the condition of the electric bilge pump?</Form.Label>
          <Form.Control
            type='text'
            name='bilgePump'
            onChange={handleInputChange}
            value={formState.bilgePump}
            required
          /> 
        </Form.Group>
        <Form.Group>
          <Form.Label htmlFor='pumpLed'>What is the condition of the bilge pump power indicator LED?</Form.Label>
          <Form.Control
            type='text'
            name='pumpLed'
            onChange={handleInputChange}
            value={formState.pumpLed}
            required
          /> 
        </Form.Group>
        <Form.Group>
          <Form.Label htmlFor='floatSwitch'>What is the condition of the float switch?</Form.Label>
          <Form.Control
            type='text'
            name='floatSwitch'
            onChange={handleInputChange}
            value={formState.floatSwitch}
            required
          /> 
        </Form.Group>
        <Form.Group>
          <Form.Label htmlFor='controlSwitches'>What is the condition of the control panel switches?</Form.Label>
          <Form.Control
            type='text'
            name='controlSwitches'
            onChange={handleInputChange}
            value={formState.controlSwitches}
            required
          /> 
        </Form.Group>
        <Form.Group>
          <Form.Label htmlFor='trimSwitches'>What is the condition of the trim switches?</Form.Label>
          <Form.Control
            type='text'
            name='trimSwitches'
            onChange={handleInputChange}
            value={formState.trimSwitches}
            required
          /> 
        </Form.Group>
        <Form.Group>
          <Form.Label htmlFor='trimGauge'>What is the condition of the trim gauge?</Form.Label>
          <Form.Control
            type='text'
            name='trimGauge'
            onChange={handleInputChange}
            value={formState.trimGauge}
            required
          /> 
        </Form.Group>
        <Form.Group>
          <Form.Label htmlFor='trimLed'>What is the condition of the trim power indicator LED?</Form.Label>
          <Form.Control
            type='text'
            name='trimLed'
            onChange={handleInputChange}
            value={formState.trimLed}
            required
          /> 
        </Form.Group>
        <Form.Group>
          <Form.Label htmlFor='trimPump'>What is the condition of the trim pump?</Form.Label>
          <Form.Control
            type='text'
            name='trimPump'
            onChange={handleInputChange}
            value={formState.trimPump}
            required
          /> 
        </Form.Group>
        <Form.Group>
          <Form.Label htmlFor='chargingBreaker'>What is the condition of the charging breaker?</Form.Label>
          <Form.Control
            type='text'
            name='chargingBreaker'
            onChange={handleInputChange}
            value={formState.chargingBreaker}
            required
          /> 
        </Form.Group>
        <Form.Group>
          <Form.Label htmlFor='preHeaterBreaker'>What is the condition of the pre-heater breaker?</Form.Label>
          <Form.Control
            type='text'
            name='preHeaterBreaker'
            onChange={handleInputChange}
            value={formState.preHeaterBreaker}
            required
          /> 
        </Form.Group>
        <Form.Group>
          <Form.Label htmlFor='polarityLed'>What is the condition of the polarity indicator LED lights?</Form.Label>
          <Form.Control
            type='text'
            name='polarityLed'
            onChange={handleInputChange}
            value={formState.polarityLed}
            required
          /> 
        </Form.Group>
        <Form.Group>
          <Form.Label htmlFor='vhfRadio'>What is the condition of the VHF radio?</Form.Label>
          <Form.Control
            type='text'
            name='vhfRadio'
            onChange={handleInputChange}
            value={formState.vhfRadio}
            required
          /> 
        </Form.Group>
        <Form.Group>
          <Form.Label htmlFor='vhfAntenna'>What is the condition of the vhf radio antenna?</Form.Label>
          <Form.Control
            type='text'
            name='vhfAntenna'
            onChange={handleInputChange}
            value={formState.vhfAntenna}
            required
          /> 
        </Form.Group>
        <Form.Group>
          <Form.Label htmlFor='gps'>What is the condition of the GPS?</Form.Label>
          <Form.Control
            type='text'
            name='gps'
            onChange={handleInputChange}
            value={formState.gps}
            required
          /> 
        </Form.Group>
        <Form.Group>
          <Form.Label htmlFor='smartcraft'>What is the condition of the smartcraft display?</Form.Label>
          <Form.Control
            type='text'
            name='smartcraft'
            onChange={handleInputChange}
            value={formState.smartcraft}
            required
          /> 
        </Form.Group>
        <Form.Group>
          <Form.Label htmlFor='whelenControl'>What is the condition of the whelen control panel?</Form.Label>
          <Form.Control
            type='text'
            name='whelenControl'
            onChange={handleInputChange}
            value={formState.whelenControl}
            required
          /> 
        </Form.Group>
        <Form.Group>
          <Form.Label htmlFor='whelenMic'>What is the condition of the whelen loud hailer microphone?</Form.Label>
          <Form.Control
            type='text'
            name='whelenMic'
            onChange={handleInputChange}
            value={formState.whelenMic}
            required
          /> 
        </Form.Group>
        <Form.Group>
          <Form.Label htmlFor='whelenSpeaker'>What is the condition of the whelen loud hailer speaker on security arch?</Form.Label>
          <Form.Control
            type='text'
            name='whelenSpeaker'
            onChange={handleInputChange}
            value={formState.whelenSpeaker}
            required
          /> 
        </Form.Group>
        <Form.Group>
          <Form.Label htmlFor='strobe'>What is the condition of the blue strobe light on security arch?</Form.Label>
          <Form.Control
            type='text'
            name='strobe'
            onChange={handleInputChange}
            value={formState.strobe}
            required
          /> 
        </Form.Group>
        <Form.Group>
          <Form.Label htmlFor='spotlight'>What is the condition of the hand held spotlight?</Form.Label>
          <Form.Control
            type='text'
            name='spotlight'
            onChange={handleInputChange}
            value={formState.spotlight}
            required
          /> 
        </Form.Group>
        <Form.Group>
          <Form.Label htmlFor='receptacles'>What is the condition of the electrical receptacles?</Form.Label>
          <Form.Control
            type='text'
            name='receptacles'
            onChange={handleInputChange}
            value={formState.receptacles}
            required
          /> 
        </Form.Group>
        <Form.Group>
          <Form.Label htmlFor='mobiDisplay'>What is the condition of the MOBI display head?</Form.Label>
          <Form.Control
            type='text'
            name='mobiDisplay'
            onChange={handleInputChange}
            value={formState.mobiDisplay}
            required
          /> 
        </Form.Group>
        <Form.Group>
          <Form.Label htmlFor='mobiPower'>What is the condition of the MOBI power cable ?</Form.Label>
          <Form.Control
            type='text'
            name='mobiPower'
            onChange={handleInputChange}
            value={formState.mobiPower}
            required
          /> 
        </Form.Group>
        <Form.Group>
          <Form.Label htmlFor='mobiData'>What is the condition of the MOBI data cable?</Form.Label>
          <Form.Control
            type='text'
            name='mobiData'
            onChange={handleInputChange}
            value={formState.mobiData}
            required
          /> 
        </Form.Group>
        <Form.Group>
          <Form.Label htmlFor='mobiAntenna'>What is the condition of the MOBI antenna?</Form.Label>
          <Form.Control
            type='text'
            name='mobiAntenna'
            onChange={handleInputChange}
            value={formState.mobiAntenna}
            required
          /> 
        </Form.Group>
        <Form.Group>
          <Form.Label htmlFor='barrelSwitch'>What is the condition of the barrel switch?</Form.Label>
          <Form.Control
            type='text'
            name='barrelSwitch'
            onChange={handleInputChange}
            value={formState.barrelSwitch}
            required
          /> 
        </Form.Group>
        <Form.Group>
          <Form.Label htmlFor='batteries'>What is the condition of the blue top batteries?</Form.Label>
          <Form.Control
            type='text'
            name='batteries'
            onChange={handleInputChange}
            value={formState.batteries}
            required
          /> 
        </Form.Group>
        <Form.Group>
          <Form.Label htmlFor='batteryCables'>What is the condition of the battery cables?</Form.Label>
          <Form.Control
            type='text'
            name='batteryCables'
            onChange={handleInputChange}
            value={formState.batteryCables}
            required
          /> 
        </Form.Group>
        <Form.Group>
          <Form.Label htmlFor='batteryCharger'>What is the condition of the battery charger?</Form.Label>
          <Form.Control
            type='text'
            name='batteryCharger'
            onChange={handleInputChange}
            value={formState.batteryCharger}
            required
          /> 
        </Form.Group>
        <Form.Group>
          <Form.Label htmlFor='interiorBreakers'>What is the condition of the interior breakers?</Form.Label>
          <Form.Control
            type='text'
            name='interiorBreakers'
            onChange={handleInputChange}
            value={formState.interiorBreakers}
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

export default Electrical;