import React, { useState } from 'react';
import { Form, Button, Alert } from 'react-bootstrap';
import { Link } from "react-router-dom";
import { useQuery } from '@apollo/client';
import { QUERY_ASSESSMENT } from "../utils/queries";
import { useParams } from 'react-router-dom';

const SevenMeterAssessment = () => {
  const { id } = useParams();
  const hullNumber = id;
  

  const { loading, data } = useQuery(QUERY_ASSESSMENT, {
    variables: { hullNumber },
    });
  
    const assessment = data?.assessment;
    const sections = []; 
    const Hull = [];
    const Sponson = [];
    const Propulsion = [];
    const Piping = [];
    const Engine = [];
    const Electrical = [];
    const Deck = [];
    
   if (assessment) {
    var size = Object.keys(assessment);
    let value = Object.values(assessment);
    
    for (let i = 0; i <= size.length-1; i++) {
        let obj = Object.values(value[i][0])
        
        sections.push(obj)
        
        for (let j = 1; j <= obj.length-1; j++) {
            if (obj[j] !== "" & obj[0] == "Hull") {
               Hull.push(<li>{obj[j]}</li>)
               
            } else if (obj[j] !== "" & obj[0] == "Sponson") {
              Sponson.push(<li>{obj[j]}</li>)
            } else if (obj[j] !== "" & obj[0] == "Propulsion") {
              Propulsion.push(<li>{obj[j]}</li>)
            } else if (obj[j] !== "" & obj[0] == "Piping") {
              Piping.push(<li>{obj[j]}</li>)
            } else if (obj[j] !== "" & obj[0] == "Engine") {
              Engine.push(<li>{obj[j]}</li>)
            } else if (obj[j] !== "" & obj[0] == "Electrical") {
              Electrical.push(<li>{obj[j]}</li>)
            } else if (obj[j] !== "" & obj[0] == "Deck") {
              Deck.push(<li>{obj[j]}</li>)
            }
            
            // if (obj[j] != "" && j != 0) {
            //     //obj[j] is the value of all non empty strings or data entrys in the assessment

            // }
        }
    }
   }
   console.log(Sponson)

    //need to loop through the assessment object
    //Grab the _typname and make that the header for each section
    //If key value is not "" then add it to the list for that section
  
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
        },
        noUser: {

        }
    };

  if (!assessment) {
    return (
      <h4 style={styles.noUser}>
        Oops, there is no assessment found for this hull number! Click 
        <Link to="/generate" style={styles.link}> here </Link>
        to start one.
      </h4>
    );
  }

  return (
    <div style={styles.container}>
        <header style={styles.header}>7-Meter RIB Hull Assessment</header>
        <h2>HULL</h2>
            <ul>
                {Hull}
            </ul>
        <h2>SPONSON</h2>
          <ul>
            {Sponson}
          </ul>
        <h2>PROPULSION</h2>
          <ul>
            {Propulsion}
          </ul>
        <h2>PIPING</h2>
          <ul>
            {Piping}
          </ul>
        <h2>ENGINE</h2>
          <ul>
            {Engine}
          </ul>
        <h2>ELECTRICAL</h2>
          <ul>
            {Electrical}
          </ul>
        <h2>DECK</h2>
          <ul>
            {Deck}
          </ul>
    </div> 
  );
};

export default SevenMeterAssessment;