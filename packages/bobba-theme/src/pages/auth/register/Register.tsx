import React from 'react';
import {Link} from 'wouter';
import {setURL} from '@instinct-web/core';
import {GuestLayout} from '../../../layout/guest-layout/GuestLayout';

setURL('register', <RegisterPage />);

export function RegisterPage() {
  return (
    <GuestLayout>
      <h2 data-v-da0d1626="">Register</h2>
      <form className="form w-100" data-v-da0d1626="">
        <input
          className="form-control mb-4"
          name="username"
          placeholder="Username"
          type="text"
        />
        <input
          className="form-control mb-4"
          name="email"
          placeholder="Email Address"
          type="email"
        />
        <input
          className="form-control mb-4"
          name="password"
          placeholder="Password"
          type="password"
        />
        <input
          className="form-control mb-4"
          name="password_again"
          placeholder="Password Again"
          type="password"
        />
        <div className="row mb-4">
          <div className="col-6" />
          <div className="col-6">
            <button className="btn btn-primary btn-block">
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
