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
    const hull = assessment.hull 
   

    //Need to create a query that uses the hull number in the url to get the developed assessment with that hull number from the db
    //See Share page in Portfol.io project for similar example
  
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