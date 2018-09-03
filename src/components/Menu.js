import React, { Component, Fragment } from 'react';
import './css/Menu.css';

export default class Menu extends Component {
  render() {
    return (
      <Fragment>
        <div class="menu__top">
          <div class="left">
            Thomas Guillet
          </div>
          <div class="right">
            Menu
          </div>
        </div>
        <div class="menu__bottom">
          <div class="left">
            Projects
          </div>
          <div class="right">
            Contact
          </div>
        </div>
      </Fragment>
    );
  }
}
