import React, { useState } from 'react';
import { Link } from "react-router-dom";
import { useMutation } from '@apollo/client';

const Home = () => {

    const styles = {
        container: {
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '20px',
            marginTop: '20px'
        },
        button: {
          textDecoration: 'none',
          color: 'black',
          backgroundColor: 'grey',
          textAlign: 'center',
          width: '50%',
          padding: '20px'
        }
    };

  return (
    <div style={styles.container}>
      <Link to="/generate" style={styles.button}>7MRB Assessment and SOW Generator</Link>
      <Link to="/generate" style={styles.button}>11MRB Assessment and SOW Generator (coming soon)</Link>
      <div style={styles.button}>Job Board</div>
    </div> 
  );
};

export default Home;