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
  
    const assessment = data?.assessment 
    
   if (assessment) {
    var size = Object.keys(assessment);
    let value = Object.values(assessment);
    
    for (let i = 0; i <= size.length-1; i++) {
        let obj = Object.values(value[i][0])
        for (let j = 0; j <= obj.length-1; j++) {
            if (obj[j] != "" && j != 0) {
                console.log(obj[j])
            }
        }
    }
   }

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
        
    </div> 
  );
};

export default SevenMeterAssessment;