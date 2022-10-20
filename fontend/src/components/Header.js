import React from 'react'
import "../css/Header.css";

export default function Header() {
  return (
    <header className="header">
        <h1 className="logo"><a href="./index.html">TRUYENfull</a></h1>
        <nav>
            <ul className="main-nav">
                <li><a href="./login.html">Login</a></li>
                <li><a href="./register.html">Register</a></li>
                <li><span href="#" className="user-name">Hello, Truc</span></li>
                <li><a href="/">Sign out</a></li>
            </ul>
        </nav>
    </header>
  )
}
