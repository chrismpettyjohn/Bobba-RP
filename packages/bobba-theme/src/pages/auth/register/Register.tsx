import {toast} from 'react-toastify';
import {FormGroup} from 'reactstrap';
import {Link, useLocation} from 'wouter';
import React, {useContext, useState} from 'react';
import {GuestLayout} from '../../../components/layout/guest/GuestLayout';
import {defaultRegisterState, RegisterState} from './Register.types';
import {
  configContext,
  Form,
  Icon,
  Input,
  sessionContext,
  sessionService,
  setURL,
  userService,
} from '@instinct-web/core';
import ReCAPTCHA from 'react-google-recaptcha';

setURL('register', <Register />);

export function Register() {
  const {config} = useContext(configContext);
  const {setUser} = useContext(sessionContext);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [location, setLocation] = useLocation();
  const [state, setState] = useState<RegisterState>(defaultRegisterState);

  const disabled =
    state.username === '' ||
    state.password === '' ||
    state.password !== state.passwordAgain ||
    state.captcha === '' ||
    (config.siteBeta && state.betaCode === '') ||
    state.showSpinner;

  function onChange<K extends keyof RegisterState>(
    key: K,
    value: RegisterState[K]
  ) {
    setState(_ => ({
      ..._,
      [key]: value,
    }));
  }

  async function onSubmit() {
    try {
      onChange('showSpinner', true);
      onChange('showError', false);

      if (!/^[a-zA-Z0-9]+$/.test(state.username)) {
        toast.error("Usernames can't contain invalid characters");
        return;
      }

      await userService.create(
        state.username,
        state.password,
        state.email,
        state.captcha!,
        state.betaCode
      );
      const bearer = await sessionService.attemptCredentials(
        state.username,
        state.password
      );
      const user = await sessionService.attemptBearerToken(bearer);
      await setUser(user);
      setLocation('/welcome');
    } catch (e) {
      onChange('showError', true);
    } finally {
      onChange('showSpinner', false);
    }
  }

  return (
    <GuestLayout>
      {state.showError && (
        <div className="alert alert-danger">
          <p>There was a problem creating your account</p>
        </div>
      )}

      <Form className="" disabled={disabled} onSubmit={onSubmit}>
        <FormGroup>
          <h3>Username</h3>
          <Input
            type="text"
            name="username"
            value={state.username}
            onChange={onChange}
          />
        </FormGroup>
        <FormGroup>
          <h3>Email</h3>
          <Input
            type="email"
            name="email"
            value={state.email}
            onChange={onChange}
          />
        </FormGroup>
        <FormGroup>
          <h3>Password</h3>
          <Input
            type="password"
            name="password"
            value={state.password}
            onChange={onChange}
          />
        </FormGroup>
        <FormGroup>
          <h3>Password Again</h3>
          <Input
            type="password"
            name="passwordAgain"
            value={state.passwordAgain}
            onChange={onChange}
          />
        </FormGroup>
        {config.siteBeta && (
          <FormGroup>
            <h3>Beta Code</h3>
            <Input
              type="text"
              name="betaCode"
              value={state.betaCode}
              onChange={onChange}
            />
          </FormGroup>
        )}
        <FormGroup>
          <ReCAPTCHA
            sitekey={config.googleRecaptchaClientKey}
            onChange={x => onChange('captcha', x as string)}
          />
        </FormGroup>
        <FormGroup style={{marginBottom: 0}}>
          <button
            className="btn btn-success btn-block"
            disabled={disabled}
            type="submit"
          >
            Register
          </button>
          <hr />
          <Link to="/login">
            <button className="btn btn-dark btn-block">
              {state.showSpinner ? (
                <Icon className="fa-spin" type="spinner" />
              ) : (
                <>Already Have an Account?</>
              )}
            </button>
          </Link>
        </FormGroup>
      </Form>
    </GuestLayout>
  );
}
