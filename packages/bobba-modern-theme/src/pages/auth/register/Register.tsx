import {toast} from 'react-toastify';
import {Link, useLocation} from 'wouter';
import ReCAPTCHA from 'react-google-recaptcha';
import {isUsernameTaken} from '../../../utility/is-username-taken';
import React, {SyntheticEvent, useContext, useState} from 'react';
import {GuestLayout} from '../../../layout/guest-layout/GuestLayout';
import {
  configContext,
  sessionContext,
  sessionService,
  setURL,
  userService,
} from '@instinct-web/core';

setURL('register', <RegisterPage />);

export function RegisterPage() {
  const {config} = useContext(configContext);
  const {setUser} = useContext(sessionContext);
  const [location, setLocation] = useLocation();
  const [email, setEmail] = useState('');
  const [betaCode, setBetaCode] = useState('');
  const [username, setUsername] = useState('');
  const [recaptcha, setRecaptcha] = useState('');
  const [password, setPassword] = useState('');
  const [passwordAgain, setPasswordAgain] = useState('');

  const isValidCredentials =
    username !== '' &&
    password !== '' &&
    passwordAgain === password &&
    email !== '';

  const onSubmitRegistration = async (event: SyntheticEvent) => {
    event.preventDefault();
    try {
      if (!isValidCredentials) {
        if (!username) toast.error('Username is required');
        if (!password) toast.error('Password is required');
        if (passwordAgain !== password)
          toast.error('Password needs to be confirmed');
        if (!betaCode) toast.error('A beta code is required');
        return;
      }

      const isUsernameInUse = await isUsernameTaken(username);

      if (isUsernameInUse) {
        toast.error('Username is taken!');
      }

      await userService.create(username, email, password, recaptcha, betaCode);

      const bearerToken = await sessionService.attemptCredentials(
        username,
        password
      );
      const userData = await sessionService.attemptBearerToken(bearerToken);
      setUser(userData);

      toast.success(`Welcome to ${config.siteName}, ${userData.username}`);

      setLocation('/me');
    } catch {
      toast.error('Failed to create account');
    }
  };

  return (
    <GuestLayout>
      <h2 data-v-da0d1626="">Register</h2>
      <form
        className="form w-100"
        data-v-da0d1626=""
        onSubmit={onSubmitRegistration}
        style={{height: 750}}
      >
        <input
          className="form-control mb-4"
          placeholder="Username"
          type="text"
          value={username}
          onChange={e => setUsername(e.target.value)}
        />
        <input
          className="form-control mb-4"
          placeholder="Email Address"
          type="email"
          value={email}
          onChange={e => setEmail(e.target.value)}
        />
        <input
          className="form-control mb-4"
          placeholder="Password"
          type="password"
          value={password}
          onChange={e => setPassword(e.target.value)}
        />
        <input
          className="form-control mb-4"
          placeholder="Password Again"
          type="password"
          value={passwordAgain}
          onChange={e => setPasswordAgain(e.target.value)}
        />
        <input
          className="form-control mb-4"
          placeholder="Beta Code"
          type="text"
          value={betaCode}
          onChange={e => setBetaCode(e.target.value)}
        />
        <div className="mb-4" style={{height: 150}}>
          <ReCAPTCHA
            sitekey={config.googleRecaptchaClientKey}
            onChange={x => setRecaptcha(x as string)}
          />
        </div>
        <div className="row mb-4">
          <div className="col-6" />
          <div className="col-6">
            <button className="btn btn-primary btn-block" type="submit">
              Finish Creating Account
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
            Already Joined?
          </h2>
          <div className="w-100 mb-2" style={{fontSize: 20, color: 'white'}}>
            You can <b>login to your existing account</b> by clicking the button
            below!
          </div>
          <Link to="/login">
            <button className="btn btn-success btn-block">Login</button>
          </Link>
        </div>
      </div>
    </GuestLayout>
  );
}
