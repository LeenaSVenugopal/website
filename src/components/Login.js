import React, { useState } from 'react';
import './Login.css';
import PropTypes from 'prop-types';
import * as myConstClass from './LoginCredentials';

export default function Login({ setState, setUser, state } ) {

  const [username, setUsername] = useState();
  const [password, setPassword] = useState();


  const handleSubmit = () => {
    if( username === myConstClass.USERNAME && password === myConstClass.PASSWORD ){
        setState("Valid");
        setUser(username);
    }
  }

return (
    <div className="Auth-form-container">
      <form className="Auth-form" onSubmit={handleSubmit}>
        <div className="Auth-form-content">
          <h3 className="Auth-form-title">Sign In</h3>
          <div className="form-group mt-3">
            <label>Username</label>
            <input
              type="text" onChange={e => setUsername(e.target.value)} id="username" name="username"
              className="form-control mt-1"
              placeholder="Enter username"
            />
          </div>
          <div className="form-group mt-3">
            <label>Password</label>
            <input
              type="password"
              onChange={e => setPassword(e.target.value)}  id="password" name="password"
                required className="form-control mt-1"
              placeholder="Enter password"
            />
          </div>
          <div className="d-grid gap-2 mt-3">
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </div>

        </div>
      </form>
    </div>
  )
}

Login.propTypes = {
    setState: PropTypes.func.isRequired
  };



