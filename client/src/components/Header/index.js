import React from 'react';
import { Link } from 'react-router-dom';

import Auth from '../../utils/auth';

const styles = {
  headerStyle: {
    display: 'inline-flex',
    background: 'orange',
    width: '100%',
    color: 'white'
  },
  profileLinks: {
    position: 'absolute',
    right: 0,
    padding: '30px',
  },
  expander: {
    padding: '0 20px 0 0'
  }
};

const Header = () => {
  const logout = (event) => {
    event.preventDefault();
    Auth.logout();
  };
  return (
    <header  className="bg-primary text-light mb-4 py-3 flex-row align-center">
      <div style={styles.headerStyle} className="container flex-row justify-space-between-lg justify-center align-center">
        <div>
          <Link className="text-light" to="/">
            <h1 className="m-0">Fish in a Tank</h1>
          </Link>
        </div>
        <div style={styles.profileLinks}>
          {Auth.loggedIn() ? (
            <>
              <Link className="btn btn-lg btn-info m-2" to="/me">
                {Auth.getProfile().data.username}'s profile
              </Link>
              <button className="btn btn-lg btn-light m-2" onClick={logout}>
                Logout
              </button>
            </>
          ) : (
            <>
              <Link style={styles.expander} className="btn btn-lg btn-info m-2" to="/login">
                Login
              </Link>
              <Link className="btn btn-lg btn-light m-2" to="/signup">
                Signup
              </Link>
            </>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;