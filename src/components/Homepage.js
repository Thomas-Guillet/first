import React, { Component } from 'react';
import './css/Homepage.css';

export default class Homepage extends Component {
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

    this.setState({
      transform: scrollTop,
      landing__text: "homepage__content"
    });
  }


  render() {

    if(this.state.transform >= 600){
      this.state.landing__text == 'homepage__content active';
    }else{
      this.state.landing__text == 'homepage__content';
    }

    return (
      <div class="homepage__container">
        <svg width="272" height="305" viewBox="0 0 272 305" fill="#1B1A18" xmlns="http://www.w3.org/2000/svg">
          <line x1="272" y1="138.5" x2="84" y2="138.5" stroke="#1B1A18" stroke-width="5"/>
          <line x1="169.5" y1="136" x2="169.5" y2="247" stroke="#1B1A18" stroke-width="5"/>
          <path fill-rule="evenodd" clip-rule="evenodd" d="M272 57.7486C244.064 22.5633 200.917 0 152.5 0C68.2766 0 0 68.2766 0 152.5C0 236.723 68.2766 305 152.5 305C200.917 305 244.064 282.437 272 247.251V238.982C245.197 275.954 201.657 300 152.5 300C71.038 300 5 233.962 5 152.5C5 71.038 71.038 5 152.5 5C201.657 5 245.197 29.0464 272 66.018V57.7486Z" fill="#1B1A18"/>
          <line x1="269.5" y1="247" x2="269.5" y2="137" stroke="#1B1A18" stroke-width="5"/>
        </svg>
        <div class="homepage__head"></div>
        <div class="homepage__head_1"></div>
        <div className={this.state.landing__text}></div>
        <div class="homepage__block"></div>
        <div class="homepage__block_1"></div>
        <div class="homepage__block_3"></div>
        <div class="homepage__block_4"></div>
      </div>
    );
  }
}
