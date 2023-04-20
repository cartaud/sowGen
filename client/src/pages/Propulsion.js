import React, { useState } from 'react';
import { Form, Button, Alert } from 'react-bootstrap';
import { Link } from "react-router-dom";
import { useMutation, useQuery } from '@apollo/client';
import { ADD_PROPULSION } from '../utils/mutations';
import { QUERY_ME } from "../utils/queries";
import { useParams } from 'react-router-dom';
//We are passing the hull number through the url and we will use that to findOneAndUpdate by searching for hull number in Assessments
//then we will be adding the new set of data for each section (hull, propulsion, engine, ect. )
const Propulsion = () => {
  const { id } = useParams();
  const hullNumber = id

  const { loading, data } = useQuery(QUERY_ME);
  const profile = data?.me || {};

  const [formState, setFormState] = useState({ 
    hullNumber: hullNumber, 
    outdrive: '', 
    outdrivePaint: '', 
    propeller: '', 
    tillerBracket: '', 
    trimHoses: '', 
    trimCylinders: '', 
    outdriveZincs: '',
    //trim position reader, forgot the name
    outdriveGrounding: '',
    bellows: '',
    outdriveReservoir: '',
    interiorTrimHose: '',
    trimPump: '', //should move trim pump stuff to electrical
    trimSolenoids: '',
    trimBracket: '',
    driveshaft: '',
    aftHoop: '',
    aftBearing: '',
    forwardHoop: '',
    forwardBearing: '',
    shiftCables: '',
    throttleCable: '',
    cableBracket: '',
    controlHead: '',
    throttlePlacard: '',
 }); 
 //need to add steering wheel and helm and related hydraulic hoses

  const [addPropulsion] = useMutation(ADD_PROPULSION)

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormState({ ...formState, [name]: value });
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    try {
      await addPropulsion({
        variables: { input: { ...formState } }
      });   
      
      window.location.assign(`/generate/piping/${hullNumber}`);
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
          <Form.Label htmlFor='outdrive'>What is the condition of the outdrive?</Form.Label>
          <Form.Control
            type='text'
            name='outdrive'
            onChange={handleInputChange}
            value={formState.outdrive}
          /> 
        </Form.Group>
        <Form.Group>
          <Form.Label htmlFor='outdrivePaint'>What is the condition of the outdrive paint?</Form.Label>
          <Form.Control
            type='text'
            name='outdrivePaint'
            onChange={handleInputChange}
            value={formState.outdrivePaint}
          /> 
        </Form.Group>
        <Form.Group>
          <Form.Label htmlFor='propeller'>What is the condition of the propeller</Form.Label>
          <Form.Control
            type='text'
            name='propeller'
            onChange={handleInputChange}
            value={formState.propeller}
          /> 
        </Form.Group>
        <Form.Group>
          <Form.Label htmlFor='tillerBracket'>What is the condition of the emergency tiller bracket?</Form.Label>
          <Form.Control
            type='text'
            name='tillerBracket'
            onChange={handleInputChange}
            value={formState.tillerBracket}
          /> 
        </Form.Group>
        <Form.Group>
          <Form.Label htmlFor='trimHoses'>What is the condition of the trim hoses?</Form.Label>
          <Form.Control
            type='text'
            name='trimHoses'
            onChange={handleInputChange}
            value={formState.trimHoses}
          /> 
        </Form.Group>
        <Form.Group>
          <Form.Label htmlFor='trimCylinders'>What is the condition of the outdrive trim cylinders?</Form.Label>
          <Form.Control
            type='text'
            name='trimCylinders'
            onChange={handleInputChange}
            value={formState.trimCylinders}
          /> 
        </Form.Group>
        <Form.Group>
          <Form.Label htmlFor='outdriveZincs'>What is the condition of the outdrive zincs?</Form.Label>
          <Form.Control
            type='text'
            name='outdriveZincs'
            onChange={handleInputChange}
            value={formState.outdriveZincs}
          /> 
        </Form.Group>
        <Form.Group>
          <Form.Label htmlFor='outdriveGrounding'>What is the condition of the outdrive grounding wires?</Form.Label>
          <Form.Control
            type='text'
            name='outdriveGrounding'
            onChange={handleInputChange}
            value={formState.outdriveGrounding}
          /> 
        </Form.Group>
        <Form.Group>
          <Form.Label htmlFor='bellows'>What is the condition of the bellows?</Form.Label>
          <Form.Control
            type='text'
            name='bellows'
            onChange={handleInputChange}
            value={formState.bellows}
          /> 
        </Form.Group>
        <Form.Group>
          <Form.Label htmlFor='outdriveReservoir'>What is the condition of the outdrive fluid reservoir?</Form.Label>
          <Form.Control
            type='text'
            name='outdriveReservoir'
            onChange={handleInputChange}
            value={formState.outdriveReservoir}
          /> 
        </Form.Group>
        <Form.Group>
          <Form.Label htmlFor='interiorTrimHose'>What is the condition of the interior trim hoses?</Form.Label>
          <Form.Control
            type='text'
            name='interiorTrimHose'
            onChange={handleInputChange}
            value={formState.interiorTrimHose}
          /> 
        </Form.Group>
        <Form.Group>
          <Form.Label htmlFor='trimPump'>What is the condition of the trim pump?</Form.Label>
          <Form.Control
            type='text'
            name='trimPump'
            onChange={handleInputChange}
            value={formState.trimPump}
          /> 
        </Form.Group>
        <Form.Group>
          <Form.Label htmlFor='trimSolenoids'>What is the condition of the trim pump solenoids?</Form.Label>
          <Form.Control
            type='text'
            name='trimSolenoids'
            onChange={handleInputChange}
            value={formState.trimSolenoids}
          /> 
        </Form.Group>
        <Form.Group>
          <Form.Label htmlFor='trimBracket'>What is the condition of the trim pump bracket?</Form.Label>
          <Form.Control
            type='text'
            name='trimBracket'
            onChange={handleInputChange}
            value={formState.trimBracket}
          /> 
        </Form.Group>
        <Form.Group>
          <Form.Label htmlFor='driveshaft'>What is the condition of the drive shaft?</Form.Label>
          <Form.Control
            type='text'
            name='driveshaft'
            onChange={handleInputChange}
            value={formState.driveshaft}
          /> 
        </Form.Group>
        <Form.Group>
          <Form.Label htmlFor='aftHoop'>What is the condition of the aft driveshaft containment hoop?</Form.Label>
          <Form.Control
            type='text'
            name='aftHoop'
            onChange={handleInputChange}
            value={formState.aftHoop}
          /> 
        </Form.Group>
        <Form.Group>
          <Form.Label htmlFor='aftBearing'>What is the condition of the aft driveshaft bearing?</Form.Label>
          <Form.Control
            type='text'
            name='aftBearing'
            onChange={handleInputChange}
            value={formState.aftBearing}
          /> 
        </Form.Group>
        <Form.Group>
          <Form.Label htmlFor='forwardHoop'>What is the condition of the forward driveshaft containment hoop?</Form.Label>
          <Form.Control
            type='text'
            name='forwardHoop'
            onChange={handleInputChange}
            value={formState.forwardHoop}
          /> 
        </Form.Group>
        <Form.Group>
          <Form.Label htmlFor='forwardBearing'>What is the condition of the forward driveshaft bearing?</Form.Label>
          <Form.Control
            type='text'
            name='forwardBearing'
            onChange={handleInputChange}
            value={formState.forwardBearing}
          /> 
        </Form.Group>
        <Form.Group>
          <Form.Label htmlFor='shiftCables'>What is the condition of the shift cables?</Form.Label>
          <Form.Control
            type='text'
            name='shiftCables'
            onChange={handleInputChange}
            value={formState.shiftCables}
          /> 
        </Form.Group>
        <Form.Group>
          <Form.Label htmlFor='throttleCable'>What is the condition of the throttle control cable?</Form.Label>
          <Form.Control
            type='text'
            name='throttleCable'
            onChange={handleInputChange}
            value={formState.throttleCable}
          /> 
        </Form.Group>
        <Form.Group>
          <Form.Label htmlFor='cableBracket'>What is the condition of the throttle control cable bracket?</Form.Label>
          <Form.Control
            type='text'
            name='cableBracket'
            onChange={handleInputChange}
            value={formState.cableBracket}
          /> 
        </Form.Group>
        <Form.Group>
          <Form.Label htmlFor='controlHead'>What is the condition of the throttle control head?</Form.Label>
          <Form.Control
            type='text'
            name='controlHead'
            onChange={handleInputChange}
            value={formState.controlHead}
          /> 
        </Form.Group>
        <Form.Group>
          <Form.Label htmlFor='throttlePlacard'>What is the condition of the throttle position placard?</Form.Label>
          <Form.Control
            type='text'
            name='throttlePlacard'
            onChange={handleInputChange}
            value={formState.throttlePlacard}
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

export default Propulsion;