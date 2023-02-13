import React from "react";
import Auth from "../../utils/auth";
import { Link } from "react-router-dom";

function Nav() {

    const styles = {
      container: {
        position: 'fixed',
        top: '0',
        width: '100%',
        height: '3vw',
        backgroundColor: '#e7e7e7ce',
        display: 'flex',
        justifyContent: 'space-between',
        alignContent: 'center',
        padding: '0% 5% 0% 5%',
      },
      navLinks: {
        display: 'flex',
        gap: '2vw',
        listStyle: 'none',
        color: 'white',
        paddingTop: '10px',
        fontSize: '15px'
      },
      log: {
        textDecoration: 'none',
        color: 'black',
        fontWeight: '300'
      },
      link: {
        textDecoration: 'none',
        fontSize: '15px'
      }
      
    }
  
      function showNavigation() {
          if (Auth.loggedIn()) {
            return (
              <ul style={styles.navLinks}>
                <li>
                  <Link to="/home" style={styles.log}>
                    Home
                  </Link>
                </li>
                <li>
                  {/* this is not using the Link component to logout user and then refresh the application to the start */}
                  <a href="/" onClick={() => Auth.logout()} style={styles.log}>
                    Logout
                  </a>
                </li>
              </ul>
            );
          } else {
            return (
              <ul style={styles.navLinks}>
                <li >
                  <Link to="/" style={styles.log}>
                    Login
                  </Link>
                </li>
              </ul>
            );
          }
        }
  
        return (
          <header style={styles.container}>
              <div>
                  <Link to="/" style={styles.link}>
                  <span className="port">CNSP</span><span className="folio">small boats</span>
                  </Link>
              </div>
              <nav>
                  {showNavigation()}
              </nav>
          </header>
        )
  }
  
  export default Nav