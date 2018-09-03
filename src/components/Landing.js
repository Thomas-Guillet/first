import React, { Component } from 'react';
import Art from '../assets/img/back.jpg';
import './css/Landing.css';

export default class Landing extends Component {
  render() {
    return (
      <div class="landing__container">
        <div class="landing__line"></div>
        <div class="landing__img">
          <img src={Art} />
          <div>
          </div>
        </div>
      </div>
    );
  }
}
