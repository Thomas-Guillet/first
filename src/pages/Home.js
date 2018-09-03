import React, { Component, Fragment } from 'react';
import logo from '../assets/logo.svg';
import '../css/App.css';
import Menu from '../components/Menu.js';
import Landing from '../components/Landing.js';
import Homepage from '../components/Homepage.js';

class Home extends Component {
  render() {
    return (
      <Fragment>
        <Menu />
        <Landing />
        <Homepage />
      </Fragment>
    );
  }
}

export default Home;
