import React, { useState } from 'react';

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
          border: 'none',
          width: '50%',
          padding: '20px'
        }
    };

  return (
    <div style={styles.container}>
      <button style={styles.button}>7MRIB Assessment and SOW Generator</button>
      <button style={styles.button}>11MRIB Assessment and SOW Generator (coming soon)</button>
    </div> 
  );
};

export default Home;