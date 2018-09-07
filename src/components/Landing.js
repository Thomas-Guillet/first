import React, { Component } from 'react';
import './css/Landing.css';
import { Parallax } from 'react-scroll-parallax';

// Entête d'accueil
export default class Landing extends Component {
  state = {
    transform: 0,
    landing__line: 'landing__line',
    landing__text: 'landing__text',
  }

  componentDidMount = () => {
    window.addEventListener('scroll', this.handleScroll);
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    let landing__text = scrollTop >= 500 ? 'landing__text hidden' : 'landing__text';
    console.log(landing__text);
    this.setState({
      landing__text: landing__text,
    });
    console.log(this.state);
  }

  componentWillUnmount = () => {
    window.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll = event => {
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    let landing__line = this.state.transform >= 500 ? 'landing__line hidden' : 'landing__line';
    let landing__text = this.state.transform >= 500 ? 'landing__text hidden' : 'landing__text';

    this.setState({
      transform: scrollTop,
      landing__line: landing__line,
      landing__text: landing__text,
    });
  }

  render() {
    const sentence = 'What a story Mark !';
    return (
      <div className="landing__container">
        <div className={this.state.landing__line}></div>
        <div className="landing__img">
          <svg width="1000" height="541" viewBox="0 0 1000 541" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g clipPath="url(#clip0)">
          <rect width="1000" height="541" fill="#1B1A18"/>
          <line y1="10.5" x2="1000" y2="10.5" stroke="white"/>
          <line y1="20.5" x2="1000" y2="20.5" stroke="white"/>
          <line y1="30.5" x2="1000" y2="30.5" stroke="white"/>
          <line y1="40.5" x2="1000" y2="40.5" stroke="white"/>
          <line y1="50.5" x2="1000" y2="50.5" stroke="white"/>
          <line y1="60.5" x2="1000" y2="60.5" stroke="white"/>
          <line y1="70.5" x2="1000" y2="70.5" stroke="white"/>
          <line y1="80.5" x2="1000" y2="80.5" stroke="white"/>
          <line y1="90.5" x2="1000" y2="90.5" stroke="white"/>
          <line y1="100.5" x2="1000" y2="100.5" stroke="white"/>
          <line y1="0.5" x2="1000" y2="0.5" stroke="white"/>
          <line y1="120.5" x2="1000" y2="120.5" stroke="white"/>
          <line y1="130.5" x2="1000" y2="130.5" stroke="white"/>
          <line y1="140.5" x2="1000" y2="140.5" stroke="white"/>
          <line y1="150.5" x2="1000" y2="150.5" stroke="white"/>
          <line y1="160.5" x2="1000" y2="160.5" stroke="white"/>
          <line y1="170.5" x2="1000" y2="170.5" stroke="white"/>
          <line y1="180.5" x2="1000" y2="180.5" stroke="white"/>
          <line y1="190.5" x2="1000" y2="190.5" stroke="white"/>
          <line y1="200.5" x2="1000" y2="200.5" stroke="white"/>
          <line y1="210.5" x2="1000" y2="210.5" stroke="white"/>
          <line y1="110.5" x2="1000" y2="110.5" stroke="white"/>
          <line y1="230.5" x2="1000" y2="230.5" stroke="white"/>
          <line y1="240.5" x2="1000" y2="240.5" stroke="white"/>
          <line y1="250.5" x2="1000" y2="250.5" stroke="white"/>
          <line y1="260.5" x2="1000" y2="260.5" stroke="white"/>
          <line y1="270.5" x2="1000" y2="270.5" stroke="white"/>
          <line y1="280.5" x2="1000" y2="280.5" stroke="white"/>
          <line y1="290.5" x2="1000" y2="290.5" stroke="white"/>
          <line y1="300.5" x2="1000" y2="300.5" stroke="white"/>
          <line y1="310.5" x2="1000" y2="310.5" stroke="white"/>
          <line y1="320.5" x2="1000" y2="320.5" stroke="white"/>
          <line y1="220.5" x2="1000" y2="220.5" stroke="white"/>
          <line y1="340.5" x2="1000" y2="340.5" stroke="white"/>
          <line y1="350.5" x2="1000" y2="350.5" stroke="white"/>
          <line y1="360.5" x2="1000" y2="360.5" stroke="white"/>
          <line y1="370.5" x2="1000" y2="370.5" stroke="white"/>
          <line y1="380.5" x2="1000" y2="380.5" stroke="white"/>
          <line y1="390.5" x2="1000" y2="390.5" stroke="white"/>
          <line y1="400.5" x2="1000" y2="400.5" stroke="white"/>
          <line y1="410.5" x2="1000" y2="410.5" stroke="white"/>
          <line y1="420.5" x2="1000" y2="420.5" stroke="white"/>
          <line y1="430.5" x2="1000" y2="430.5" stroke="white"/>
          <line y1="330.5" x2="1000" y2="330.5" stroke="white"/>
          <line y1="450.5" x2="1000" y2="450.5" stroke="white"/>
          <line y1="460.5" x2="1000" y2="460.5" stroke="white"/>
          <line y1="470.5" x2="1000" y2="470.5" stroke="white"/>
          <line y1="480.5" x2="1000" y2="480.5" stroke="white"/>
          <line y1="490.5" x2="1000" y2="490.5" stroke="white"/>
          <line y1="500.5" x2="1000" y2="500.5" stroke="white"/>
          <line y1="510.5" x2="1000" y2="510.5" stroke="white"/>
          <line y1="520.5" x2="1000" y2="520.5" stroke="white"/>
          <line y1="530.5" x2="1000" y2="530.5" stroke="white"/>
          <line y1="540.5" x2="1000" y2="540.5" stroke="white"/>
          <line y1="440.5" x2="1000" y2="440.5" stroke="white"/>
          </g>
          <defs>
          <clipPath id="clip0">
          <rect width="1000" height="541" fill="white"/>
          </clipPath>
          </defs>
          </svg>
          <Parallax
          className="landing__text_1"
          offsetYMax={160}
          offsetYMin={-160}
          slowerScrollRate
          tag="div"
          >
            {sentence}
          </Parallax>
        </div>
        <div className={this.state.landing__text}>
          {sentence}
        </div>
            lol
      </div>
    );
  }
}
