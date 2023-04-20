import React, { useState } from 'react';
import { Form, Button, Alert } from 'react-bootstrap';
import { Link } from "react-router-dom";
import { useMutation, useQuery } from '@apollo/client';
import { ADD_DECK } from '../utils/mutations';
import { QUERY_ME } from "../utils/queries";
import { useParams } from 'react-router-dom';

const Deck = () => {
  const { id } = useParams();
  const hullNumber = id

  const { loading, data } = useQuery(QUERY_ME);
  const profile = data?.me || {};

  const [formState, setFormState] = useState({ 
    hullNumber: hullNumber, 
    nonskid: '',
    fwdHatchGasket: '',
    fwdHatchHinge: '',
    fwdHatchLatch: '',
    fwdHatchStopper: '',
    archStowage: '',
    archFrame: '',
    centerLifeline: '',
    fwdSeatCushion: '',
    fwdSeatGasket: '',
    fwdSeatHinges: '',
    fwdSeatLatches: '',
    consoleSupportPost: '',
    consoleDeckGasket: '',
    consoleDeckLatches: '',
    consoleDeckHinges: '',
    stbdAccessGasket: '',
    stbdAccessHinges: '',
    stbdAccessBolts: '',
    aftAccessGasket: '',
    aftAccessHinges: '',
    aftAccessBolts: '',
    vhfCover: '',
    gpsCover: '',
    smartcraftCover: '',
    mobiCover: '',
    vhfMicClip: '',
    whelenMicClip: '',
    handrails: '',
    handrailPushpins: '',
    consolePreservation: '',
    coxianCaulk: '',
    aftStowageCushion: '',
    aftStowageGasket: '',
    aftStowageHinges: '',
    aftStowageLatches: '',
    aftBilgeGasket: '',
    aftBilgeHinges: '',
    aftBilgeLatches: '',
    ringBracket: '',
    manualPump: '',
    manualPumpHandle: '',
    mobiPost: '',
    mobiPostPin: '',
    sternPost: '',
    sternPin: '',
    transomCap: '',
    transomCaulk: '',
    scuppers: '',
 }); 

  const [addDeck] = useMutation(ADD_DECK)

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormState({ ...formState, [name]: value });
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    try {
      await addDeck({
        variables: { input: { ...formState } }
      });   
      
      window.location.assign(`/home`);
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
          <Form.Label htmlFor='nonskid'>What is the condition of the non-skid?</Form.Label>
          <Form.Control
            type='text'
            name='nonskid'
            onChange={handleInputChange}
            value={formState.nonskid}
          /> 
        </Form.Group>
        <Form.Group>
          <Form.Label htmlFor='fwdHatchGasket'>What is the condition of the forward hatch gasket?</Form.Label>
          <Form.Control
            type='text'
            name='fwdHatchGasket'
            onChange={handleInputChange}
            value={formState.fwdHatchGasket}
          /> 
        </Form.Group>
        <Form.Group>
          <Form.Label htmlFor='fwdHatchHinge'>What is the condition of the forward hatch hinge?</Form.Label>
          <Form.Control
            type='text'
            name='fwdHatchHinge'
            onChange={handleInputChange}
            value={formState.fwdHatchHinge}
          /> 
        </Form.Group>
        <Form.Group>
          <Form.Label htmlFor='fwdHatchLatch'>What is the condition of the forward hatch latches?</Form.Label>
          <Form.Control
            type='text'
            name='fwdHatchLatch'
            onChange={handleInputChange}
            value={formState.fwdHatchLatch}
          /> 
        </Form.Group>
        <Form.Group>
          <Form.Label htmlFor='fwdHatchStopper'>What is the condition of the forward hatch rubber stopper?</Form.Label>
          <Form.Control
            type='text'
            name='fwdHatchStopper'
            onChange={handleInputChange}
            value={formState.fwdHatchStopper}
          /> 
        </Form.Group>
        <Form.Group>
          <Form.Label htmlFor='archStowage'>What is the condition of the security arch stowage sockets?</Form.Label>
          <Form.Control
            type='text'
            name='archStowage'
            onChange={handleInputChange}
            value={formState.archStowage}
          /> 
        </Form.Group>
        <Form.Group>
          <Form.Label htmlFor='archFrame'>What is the condition of the security arch metal frame?</Form.Label>
          <Form.Control
            type='text'
            name='archFrame'
            onChange={handleInputChange}
            value={formState.archFrame}
          /> 
        </Form.Group>
        <Form.Group>
          <Form.Label htmlFor='centerLifeline'>What is the condition of the center lifeline?</Form.Label>
          <Form.Control
            type='text'
            name='centerLifeline'
            onChange={handleInputChange}
            value={formState.centerLifeline}
          /> 
        </Form.Group>
        <Form.Group>
          <Form.Label htmlFor='fwdSeatCushion'>What is the condition of the forward seat cushion?</Form.Label>
          <Form.Control
            type='text'
            name='fwdSeatCushion'
            onChange={handleInputChange}
            value={formState.fwdSeatCushion}
          /> 
        </Form.Group>
        <Form.Group>
          <Form.Label htmlFor='fwdSeatGasket'>What is the condition of the forward seat hatch gasket?</Form.Label>
          <Form.Control
            type='text'
            name='fwdSeatGasket'
            onChange={handleInputChange}
            value={formState.fwdSeatGasket}
          /> 
        </Form.Group>
        <Form.Group>
          <Form.Label htmlFor='fwdSeatHinges'>What is the condition of the forward seat hatch hinges?</Form.Label>
          <Form.Control
            type='text'
            name='fwdSeatHinges'
            onChange={handleInputChange}
            value={formState.fwdSeatHinges}
          /> 
        </Form.Group>
        <Form.Group>
          <Form.Label htmlFor='fwdSeatLatches'>What is the condition of the forward seat hatch latches?</Form.Label>
          <Form.Control
            type='text'
            name='fwdSeatLatches'
            onChange={handleInputChange}
            value={formState.fwdSeatLatches}
          /> 
        </Form.Group>
        <Form.Group>
          <Form.Label htmlFor='consoleSupportPost'>What is the condition of the console lifting support post?</Form.Label>
          <Form.Control
            type='text'
            name='consoleSupportPost'
            onChange={handleInputChange}
            value={formState.consoleSupportPost}
          /> 
        </Form.Group>
        <Form.Group>
          <Form.Label htmlFor='consoleDeckGasket'>What is the condition of the console to deck gasket?</Form.Label>
          <Form.Control
            type='text'
            name='consoleDeckGasket'
            onChange={handleInputChange}
            value={formState.consoleDeckGasket}
          /> 
        </Form.Group>
        <Form.Group>
          <Form.Label htmlFor='consoleDeckLatches'>What is the condition of the console to deck latches?</Form.Label>
          <Form.Control
            type='text'
            name='consoleDeckLatches'
            onChange={handleInputChange}
            value={formState.consoleDeckLatches}
          /> 
        </Form.Group>
        <Form.Group>
          <Form.Label htmlFor='consoleDeckHinges'>What is the condition of the console to deck hinges?</Form.Label>
          <Form.Control
            type='text'
            name='consoleDeckHinges'
            onChange={handleInputChange}
            value={formState.consoleDeckHinges}
          /> 
        </Form.Group>
        <Form.Group>
          <Form.Label htmlFor='stbdAccessGasket'>What is the condition of the starboard console access hatch gasket?</Form.Label>
          <Form.Control
            type='text'
            name='stbdAccessGasket'
            onChange={handleInputChange}
            value={formState.stbdAccessGasket}
          /> 
        </Form.Group>
        <Form.Group>
          <Form.Label htmlFor='stbdAccessHinges'>What is the condition of the starboard console access hatch hinges?</Form.Label>
          <Form.Control
            type='text'
            name='stbdAccessHinges'
            onChange={handleInputChange}
            value={formState.stbdAccessHinges}
          /> 
        </Form.Group>
        <Form.Group>
          <Form.Label htmlFor='stbdAccessBolts'>What is the condition of the starboard console access hatch barrel bolts?</Form.Label>
          <Form.Control
            type='text'
            name='stbdAccessBolts'
            onChange={handleInputChange}
            value={formState.stbdAccessBolts}
          /> 
        </Form.Group>
        <Form.Group>
          <Form.Label htmlFor='aftAccessGasket'>What is the condition of the aft console access hatch gasket?</Form.Label>
          <Form.Control
            type='text'
            name='aftAccessGasket'
            onChange={handleInputChange}
            value={formState.aftAccessGasket}
          /> 
        </Form.Group>
        <Form.Group>
          <Form.Label htmlFor='aftAccessHinges'>What is the condition of the aft console access hatch hinges?</Form.Label>
          <Form.Control
            type='text'
            name='aftAccessHinges'
            onChange={handleInputChange}
            value={formState.aftAccessHinges}
          /> 
        </Form.Group>
        <Form.Group>
          <Form.Label htmlFor='aftAccessBolts'>What is the condition of the aft console access hatch barrel bolts?</Form.Label>
          <Form.Control
            type='text'
            name='aftAccessBolts'
            onChange={handleInputChange}
            value={formState.aftAccessBolts}
          /> 
        </Form.Group>
        <Form.Group>
          <Form.Label htmlFor='vhfCover'>What is the condition of the vhf radio protective cover?</Form.Label>
          <Form.Control
            type='text'
            name='vhfCover'
            onChange={handleInputChange}
            value={formState.vhfCover}
          /> 
        </Form.Group>
        <Form.Group>
          <Form.Label htmlFor='gpsCover'>What is the condition of the gps protective cover?</Form.Label>
          <Form.Control
            type='text'
            name='gpsCover'
            onChange={handleInputChange}
            value={formState.gpsCover}
          /> 
        </Form.Group>
        <Form.Group>
          <Form.Label htmlFor='smartcraftCover'>What is the condition of the smartcraft display protective cover?</Form.Label>
          <Form.Control
            type='text'
            name='smartcraftCover'
            onChange={handleInputChange}
            value={formState.smartcraftCover}
          /> 
        </Form.Group>
        <Form.Group>
          <Form.Label htmlFor='mobiCover'>What is the condition of the mobi protective cover?</Form.Label>
          <Form.Control
            type='text'
            name='mobiCover'
            onChange={handleInputChange}
            value={formState.mobiCover}
          /> 
        </Form.Group>
        <Form.Group>
          <Form.Label htmlFor='vhfMicClip'>What is the condition of the vhf radio microphone clip?</Form.Label>
          <Form.Control
            type='text'
            name='vhfMicClip'
            onChange={handleInputChange}
            value={formState.vhfMicClip}
          /> 
        </Form.Group>
        <Form.Group>
          <Form.Label htmlFor='whelenMicClip'>What is the condition of the whelen loud hailer microphone clip?</Form.Label>
          <Form.Control
            type='text'
            name='whelenMicClip'
            onChange={handleInputChange}
            value={formState.whelenMicClip}
          /> 
        </Form.Group>
        <Form.Group>
          <Form.Label htmlFor='handrails'>What is the condition of the console handrails?</Form.Label>
          <Form.Control
            type='text'
            name='handrails'
            onChange={handleInputChange}
            value={formState.handrails}
          /> 
        </Form.Group>
        <Form.Group>
          <Form.Label htmlFor='handrailPushpins'>What is the condition of the handrail pushpins and lanyard?</Form.Label>
          <Form.Control
            type='text'
            name='handrailPushpins'
            onChange={handleInputChange}
            value={formState.handrailPushpins}
          /> 
        </Form.Group>
        <Form.Group>
          <Form.Label htmlFor='consolePreservation'>What is the condition of the console preservation?</Form.Label>
          <Form.Control
            type='text'
            name='consolePreservation'
            onChange={handleInputChange}
            value={formState.consolePreservation}
          /> 
        </Form.Group>
        <Form.Group>
          <Form.Label htmlFor='coxianCaulk'>What is the condition of the coxains flat caulk?</Form.Label>
          <Form.Control
            type='text'
            name='coxianCaulk'
            onChange={handleInputChange}
            value={formState.coxianCaulk}
          /> 
        </Form.Group> 
        <Form.Group>
          <Form.Label htmlFor='aftStowageCushion'>What is the condition of the aft stowage box cushion?</Form.Label>
          <Form.Control
            type='text'
            name='aftStowageCushion'
            onChange={handleInputChange}
            value={formState.aftStowageCushion}
          /> 
        </Form.Group>
        <Form.Group>
          <Form.Label htmlFor='aftStowageGasket'>What is the condition of the aft stowage box gasket?</Form.Label>
          <Form.Control
            type='text'
            name='aftStowageGasket'
            onChange={handleInputChange}
            value={formState.aftStowageGasket}
          /> 
        </Form.Group>
        <Form.Group>
          <Form.Label htmlFor='aftStowageHinges'>What is the condition of the aft stowage box hinges?</Form.Label>
          <Form.Control
            type='text'
            name='aftStowageHinges'
            onChange={handleInputChange}
            value={formState.aftStowageHinges}
          /> 
        </Form.Group>
        <Form.Group>
          <Form.Label htmlFor='aftStowageLatches'>What is the condition of the aft stowage box latches?</Form.Label>
          <Form.Control
            type='text'
            name='aftStowageLatches'
            onChange={handleInputChange}
            value={formState.aftStowageLatches}
          /> 
        </Form.Group>
        <Form.Group>
          <Form.Label htmlFor='aftBilgeGasket'>What is the condition of the aft bilge access gasket?</Form.Label>
          <Form.Control
            type='text'
            name='aftBilgeGasket'
            onChange={handleInputChange}
            value={formState.aftBilgeGasket}
          /> 
        </Form.Group>
        <Form.Group>
          <Form.Label htmlFor='aftBilgeHinges'>What is the condition of the aft bilge access hinges?</Form.Label>
          <Form.Control
            type='text'
            name='aftBilgeHinges'
            onChange={handleInputChange}
            value={formState.aftBilgeHinges}
          /> 
        </Form.Group>
        <Form.Group>
          <Form.Label htmlFor='aftBilgeLatches'>What is the condition of the aft bilge access latches?</Form.Label>
          <Form.Control
            type='text'
            name='aftBilgeLatches'
            onChange={handleInputChange}
            value={formState.aftBilgeLatches}
          /> 
        </Form.Group>
        <Form.Group>
          <Form.Label htmlFor='ringBracket'>What is the condition of the life ring bracket?</Form.Label>
          <Form.Control
            type='text'
            name='ringBracket'
            onChange={handleInputChange}
            value={formState.ringBracket}
          /> 
        </Form.Group>
        <Form.Group>
          <Form.Label htmlFor='manualPump'>What is the condition of the manual bilge pump?</Form.Label>
          <Form.Control
            type='text'
            name='manualPump'
            onChange={handleInputChange}
            value={formState.manualPump}
          /> 
        </Form.Group>
        <Form.Group>
          <Form.Label htmlFor='manualPumpHandle'>What is the condition of the manual bilge pump handle?</Form.Label>
          <Form.Control
            type='text'
            name='manualPumpHandle'
            onChange={handleInputChange}
            value={formState.manualPumpHandle}
          /> 
        </Form.Group>
        <Form.Group>
          <Form.Label htmlFor='mobiPost'>What is the condition of the MOBI post?</Form.Label>
          <Form.Control
            type='text'
            name='mobiPost'
            onChange={handleInputChange}
            value={formState.mobiPost}
          /> 
        </Form.Group>
        <Form.Group>
          <Form.Label htmlFor='mobiPostPin'>What is the condition of the MOBI post locking pin?</Form.Label>
          <Form.Control
            type='text'
            name='mobiPostPin'
            onChange={handleInputChange}
            value={formState.mobiPostPin}
          /> 
        </Form.Group>
        <Form.Group>
          <Form.Label htmlFor='sternPost'>What is the condition of the stern light post?</Form.Label>
          <Form.Control
            type='text'
            name='sternPost'
            onChange={handleInputChange}
            value={formState.sternPost}
          /> 
        </Form.Group>
        <Form.Group>
          <Form.Label htmlFor='sternPin'>What is the condition of the stern light post locking pin?</Form.Label>
          <Form.Control
            type='text'
            name='sternPin'
            onChange={handleInputChange}
            value={formState.sternPin}
          /> 
        </Form.Group>
        <Form.Group>
          <Form.Label htmlFor='transomCap'>What is the condition of the transom cap?</Form.Label>
          <Form.Control
            type='text'
            name='transomCap'
            onChange={handleInputChange}
            value={formState.transomCap}
          /> 
        </Form.Group>
        <Form.Group>
          <Form.Label htmlFor='transomCaulk'>What is the condition of the transom to deck caulking?</Form.Label>
          <Form.Control
            type='text'
            name='transomCaulk'
            onChange={handleInputChange}
            value={formState.transomCaulk}
          /> 
        </Form.Group>
        <Form.Group>
          <Form.Label htmlFor='scuppers'>What is the condition of the scuppers?</Form.Label>
          <Form.Control
            type='text'
            name='scuppers'
            onChange={handleInputChange}
            value={formState.scuppers}
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

export default Deck;