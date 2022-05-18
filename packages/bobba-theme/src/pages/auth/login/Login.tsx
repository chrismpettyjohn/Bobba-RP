import {toast} from 'react-toastify';
import {Link, useLocation} from 'wouter';
import React, {SyntheticEvent, useContext, useState} from 'react';
import {GuestLayout} from '../../../layout/guest-layout/GuestLayout';
import {sessionContext, sessionService, setURL} from '@instinct-web/core';

setURL('login', <LoginPage />);

export function LoginPage() {
  const {setUser} = useContext(sessionContext);
  const [location, setLocation] = useLocation();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const isValidCredentials = username !== '' && password !== '';

  const onSubmitLogin = async (event: SyntheticEvent) => {
    event.preventDefault();
    try {
      if (!isValidCredentials) {
        if (!username) toast.error('Username is required');
        if (!password) toast.error('Password is required');
        return;
      }

      const bearerToken = await sessionService.attemptCredentials(
        username,
        password
      );
      const userData = await sessionService.attemptBearerToken(bearerToken);
      setUser(userData);

      toast.success(`Welcome back, ${userData.username}`);

      setLocation('/me');
    } catch {
      toast.error('Failed to login');
    }
  };

  return (
    <GuestLayout>
      <h2 data-v-da0d1626="">Login</h2>
      <form className="form w-100" data-v-da0d1626="" onSubmit={onSubmitLogin}>
        <input
          className="form-control mb-4"
          placeholder="Username"
          type="text"
          onChange={e => setUsername(e.target.value)}
        />
        <input
          className="form-control mb-4"
          placeholder="Password"
          type="password"
          onChange={e => setPassword(e.target.value)}
        />
        <div className="row mb-4">
          <div className="col-6" />
          <div className="col-6">
            <button
              className="btn btn-primary btn-block"
              type="submit"
              disabled={!isValidCredentials}
            >
              Login
            </button>
          </div>
        </div>
      </form>
      <div
        className="row p-4"
        style={{
          background: '#23232f',
          borderRadius: 5,
          position: 'absolute',
          bottom: 5,
          width: '90%',
          margin: '0 auto',
        }}
      >
        <div className="col-12 pb-4">
          <h2 data-v-da0d1626="" style={{color: 'rgb(64, 200, 215)'}}>
            New Here?
          </h2>
          <div className="w-100 mb-2" style={{fontSize: 20, color: 'white'}}>
            You can <b>create an account</b> today by clicking the button below!
          </div>
          <Link to="/register">
            <button className="btn btn-success btn-block">
              Create Account
            </button>
          </Link>
        </div>
      </div>
    </GuestLayout>
  );
}
