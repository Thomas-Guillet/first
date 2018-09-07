import React, { Component, Fragment } from 'react';
import './css/Menu.css';


// Menu (logo + nav)
export default class Menu extends Component {

  state = {
    transform: 0
  }

  componentDidMount = () => {
    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount = () => {
    window.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll = event => {
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    let landing__text = this.state.transform >= window.innerHeight - 20 ? 'hidden' : '';

    this.setState({
      transform: scrollTop,
      landing__text: landing__text
    });
  }

  render() {
    return (
      <Fragment>
        <div className="menu__top">
          <svg className={this.state.landing__text} width="272" height="305" viewBox="0 0 272 305" fill="none" xmlns="http://www.w3.org/2000/svg">
            <line x1="272" y1="138.5" x2="84" y2="138.5" stroke="white" strokeWidth="5"/>
            <line x1="169.5" y1="136" x2="169.5" y2="247" stroke="white" strokeWidth="5"/>
            <path fillRule="evenodd" clipRule="evenodd" d="M272 57.7486C244.064 22.5633 200.917 0 152.5 0C68.2766 0 0 68.2766 0 152.5C0 236.723 68.2766 305 152.5 305C200.917 305 244.064 282.437 272 247.251V238.982C245.197 275.954 201.657 300 152.5 300C71.038 300 5 233.962 5 152.5C5 71.038 71.038 5 152.5 5C201.657 5 245.197 29.0464 272 66.018V57.7486Z" fill="white"/>
            <line x1="269.5" y1="247" x2="269.5" y2="137" stroke="white" strokeWidth="5"/>
          </svg>



        </div>
      </Fragment>
    );
  }
}
