import React from 'react';
import "../css/Login.css";

export default function Login() {
  return (
    <div className="login-page">
        <div className="form">
          <form className="login-form">
            <input type="text" placeholder="username"/>
            <input type="password" placeholder="password"/>
            <button>login</button>
            <p className="message">Not registered? <a href="/login.html">Create an account</a></p>
          </form>
        </div>
      </div>
  )
}
