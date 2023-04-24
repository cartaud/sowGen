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
            type='radio'
            name='outdrive'
            onChange={handleInputChange}
            value='Outdrive condition is average, recommend accomplishing 100 hour service.'
          /> 
          <span>100 hour service</span>
          <Form.Control
            type='radio'
            name='outdrive'
            onChange={handleInputChange}
            value='Outdrive is severely damaged, recommend replacing with new.'
          /> 
          <span>Replace</span>
        </Form.Group>
        <Form.Group>
          <Form.Label htmlFor='outdrivePaint'>What is the condition of the outdrive paint?</Form.Label>
          <Form.Control
            type='radio'
            name='outdrivePaint'
            onChange={handleInputChange}
            value='Outdrive is missing paint in some areas, recommend accomplishing X square feet of preservation to cover all exposed surfaces of outdrive with paint.'
          /> 
          <span>Paint</span>
        </Form.Group>
        <Form.Group>
          <Form.Label htmlFor='propeller'>What is the condition of the propeller</Form.Label>
          <Form.Control
            type='radio'
            name='propeller'
            onChange={handleInputChange}
            value='Propeller is missing paint, recommend painting propeller so there are no exposed surfaces.'
          /> 
          <span>Paint</span>
          <Form.Control
            type='radio'
            name='propeller'
            onChange={handleInputChange}
            value='Propeller is damaged beyond repair, recommend replacing with new.'
          /> 
          <span>Replace</span>
        </Form.Group>
        <Form.Group>
          <Form.Label htmlFor='tillerBracket'>What is the condition of the emergency tiller bracket?</Form.Label>
          <Form.Control
            type='radio'
            name='tillerBracket'
            onChange={handleInputChange}
            value='EM tiller bracket is missing, recommend procuring and installing new.'
          /> 
          <span>Missing</span>
          <Form.Control
            type='radio'
            name='tillerBracket'
            onChange={handleInputChange}
            value='EM tiller bracket is damaged, recommend removing existing and installing new.'
          /> 
          <span>Damaged</span>
        </Form.Group>
        <Form.Group>
          <Form.Label htmlFor='trimHoses'>What is the condition of the trim hoses?</Form.Label>
          <Form.Control
            type='radio'
            name='trimHoses'
            onChange={handleInputChange}
            value='Trim hoses are fraying, recommend removing existing and installing new.'
          /> 
          <span>Fraying</span>
        </Form.Group>
        <Form.Group>
          <Form.Label htmlFor='trimCylinders'>What is the condition of the outdrive trim cylinders?</Form.Label>
          <Form.Control
            type='radio'
            name='trimCylinders'
            onChange={handleInputChange}
            value='Trim cylinders are damaged beyond repair, recommend replacing with new.'
          /> 
          <span>Replace</span>
          <Form.Control
            type='radio'
            name='trimCylinders'
            onChange={handleInputChange}
            value='Trim cylinders seals are leaking, recommend removing seals, accomplishing preservation to remove all corrosion, and installing new seals.'
          /> 
          <span>Replace Seals</span>
        </Form.Group>
        <Form.Group>
          <Form.Label htmlFor='outdriveZincs'>What is the condition of the outdrive zincs?</Form.Label>
          <Form.Control
            type='radio'
            name='outdriveZincs'
            onChange={handleInputChange}
            value='Outdrive zincs are beyond 50% of life, recommend removing existing and installing new.'
          /> 
          <span>Replace</span>
        </Form.Group>
        <Form.Group>
          <Form.Label htmlFor='outdriveGrounding'>What is the condition of the outdrive grounding wires?</Form.Label>
          <Form.Control
            type='radio'
            name='outdriveGrounding'
            onChange={handleInputChange}
            value='Outdrive grounding wire is damaged, recommend replacing with new.'
          /> 
          <span>Replace</span>
        </Form.Group>
        <Form.Group>
          <Form.Label htmlFor='bellows'>What is the condition of the bellows?</Form.Label>
          <Form.Control
            type='radio'
            name='bellows'
            onChange={handleInputChange}
            value='Outdrive bellows are damaged, recommend replacing with new.'
          /> 
          <span>Replace</span>
        </Form.Group>
        <Form.Group>
          <Form.Label htmlFor='outdriveReservoir'>What is the condition of the outdrive fluid reservoir?</Form.Label>
          <Form.Control
            type='radio'
            name='outdriveReservoir'
            onChange={handleInputChange}
            value='Outdrive fluid reservoir has low fluid, recommend removing fluid and replenishing with new.'
          /> 
          <span>Replenish Fluid</span>
          <Form.Control
            type='radio'
            name='outdriveReservoir'
            onChange={handleInputChange}
            value='Outdrive fluid reservoir is damaged, recommend replacing the reservoir, hose, and clamps with new and replenishing the fluid.'
          /> 
          <span>Replace bottle, hose, and fluid</span>
        </Form.Group>
        <Form.Group>
          <Form.Label htmlFor='interiorTrimHose'>What is the condition of the interior trim hoses?</Form.Label>
          <Form.Control
            type='radio'
            name='interiorTrimHose'
            onChange={handleInputChange}
            value='Interior trim hoses are in poor condition, recommend replacing with new.'
          /> 
          <span>Replace</span>
        </Form.Group>
        <Form.Group>
          <Form.Label htmlFor='trimPump'>What is the condition of the trim pump?</Form.Label>
          <Form.Control
            type='radio'
            name='trimPump'
            onChange={handleInputChange}
            value='Trim pump is in poor condition/non-op, recommend replacing with new.'
          /> 
          <span>Replace</span>
        </Form.Group>
        <Form.Group>
          <Form.Label htmlFor='trimSolenoids'>What is the condition of the trim pump solenoids?</Form.Label>
          <Form.Control
            type='radio'
            name='trimSolenoids'
            onChange={handleInputChange}
            value='Trim pump solenoids are corroded, recommend replacing with new.'
          /> 
          <span>Replace</span>
        </Form.Group>
        <Form.Group>
          <Form.Label htmlFor='trimBracket'>What is the condition of the trim pump bracket?</Form.Label>
          <Form.Control
            type='radio'
            name='trimBracket'
            onChange={handleInputChange}
            value='Trim pump bracket is in poor condition, recommend replacing with new.'
          /> 
          <span>Replace</span>
        </Form.Group>
        <Form.Group>
          <Form.Label htmlFor='driveshaft'>What is the condition of the drive shaft?</Form.Label>
          <Form.Control
            type='radio'
            name='driveshaft'
            onChange={handleInputChange}
            value='Drive shaft is missing paint, recommend removing all existing paint and accomplishing preservation to paint the surface of the drive shaft 
            in its entirety black with the words "NO STEP" in one inch white lettering.'
          /> 
          <span>Paint</span>
          <Form.Control
            type='radio'
            name='driveshaft'
            onChange={handleInputChange}
            value='Drive shaft is missing material due to corrosion, recommend replacing with new.'
          /> 
          <span>Replace</span>
        </Form.Group>
        <Form.Group>
          <Form.Label htmlFor='aftHoop'>What is the condition of the aft driveshaft containment hoop?</Form.Label>
          <Form.Control
            type='radio'
            name='aftHoop'
            onChange={handleInputChange}
            value='Aft drive shaft containment hoops are missing paint, recommend accomplishing preservation to paint all exposed surfaces.'
          /> 
          <span>Paint</span>
          <Form.Control
            type='radio'
            name='aftHoop'
            onChange={handleInputChange}
            value='Aft drive shaft containment hoops are missing material due to corrosion, recommend replacing with new.'
          /> 
          <span>Replace</span>
        </Form.Group>
        <Form.Group>
          <Form.Label htmlFor='aftBearing'>What is the condition of the aft driveshaft bearing?</Form.Label>
          <Form.Control
            type='radio'
            name='aftBearing'
            onChange={handleInputChange}
            value='Aft driveshaft bearing has excessive vibration and corrosion, recommend replacing with new.'
          /> 
          <span>Replace</span>
        </Form.Group>
        <Form.Group>
          <Form.Label htmlFor='forwardHoop'>What is the condition of the forward driveshaft containment hoop?</Form.Label>
          <Form.Control
            type='radio'
            name='forwardHoop'
            onChange={handleInputChange}
            value='Forward drive shaft containment hoops are missing paint, recommend accomplishing preservation to paint all exposed surfaces.'
          /> 
          <span>Paint</span>
          <Form.Control
            type='radio'
            name='forwardHoop'
            onChange={handleInputChange}
            value='Forward drive shaft containment hoops are missing material due to corrosion, recommend replacing with new.'
          /> 
          <span>Replace</span>
        </Form.Group>
        <Form.Group>
          <Form.Label htmlFor='forwardBearing'>What is the condition of the forward driveshaft bearing?</Form.Label>
          <Form.Control
            type='radio'
            name='forwardBearing'
            onChange={handleInputChange}
            value='Forward driveshaft bearing has excessive vibration and corrosion, recommend replacing with new.'
          /> 
          <span>Replace</span>
        </Form.Group>
        <Form.Group>
          <Form.Label htmlFor='shiftCables'>What is the condition of the shift cables?</Form.Label>
          <Form.Control
            type='radio'
            name='shiftCables'
            onChange={handleInputChange}
            value='Drive shaft shift cables are in poor condition, recommend replacing with new'
          /> 
          <span>Replace</span>
        </Form.Group>
        <Form.Group>
          <Form.Label htmlFor='throttleCable'>What is the condition of the throttle control cable?</Form.Label>
          <Form.Control
            type='radio'
            name='throttleCable'
            onChange={handleInputChange}
            value='Throttle control cable is in poor condition, recommend replacing with new.'
          /> 
          <span>Replace</span>
        </Form.Group>
        <Form.Group>
          <Form.Label htmlFor='cableBracket'>What is the condition of the throttle control cable bracket?</Form.Label>
          <Form.Control
            type='radio'
            name='cableBracket'
            onChange={handleInputChange}
            value='Throttle control bracket is in poor condition, recommend replacing with new.'
          /> 
          <span>Replace</span>
        </Form.Group>
        <Form.Group>
          <Form.Label htmlFor='controlHead'>What is the condition of the throttle control head?</Form.Label>
          <Form.Control
            type='radio'
            name='controlHead'
            onChange={handleInputChange}
            value='Throttle control head has surface corrosion, recommend accomplishing preservation to remove the corrosion.'
          /> 
          <span>Preservation</span>
          <Form.Control
            type='radio'
            name='controlHead'
            onChange={handleInputChange}
            value='Throttle control head is damaged beyond repair, recommend replacing with new.'
          /> 
          <span>Replace</span>
        </Form.Group>
        <Form.Group>
          <Form.Label htmlFor='throttlePlacard'>What is the condition of the throttle position placard?</Form.Label>
          <Form.Control
            type='radio'
            name='throttlePlacard'
            onChange={handleInputChange}
            value='Throttle position placard is illegible, recommend replacing with new.'
          /> 
          <span>Replace</span>
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