import React, { Component } from 'react';
import './css/Homepage.css';
import { Parallax } from 'react-scroll-parallax';

export default class Homepage extends Component {



  state = {
    transform: 0,
    obj_head: null,
    homepage__head: 'homepage__head',
    homepage__head_1: 'homepage__head_1',
    homepage__head_2: null,
    homepage__head_3: null,
  }

  componentDidMount = () => {
    window.addEventListener('scroll', this.handleScroll);
    this.setState({ obj_head: this.head.getBoundingClientRect().y + 170 + (window.pageYOffset || document.documentElement.scrollTop) });
  }

  componentWillUnmount = () => {
    window.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll = event => {
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    let head = this.state.transform <= this.state.obj_head ? 'homepage__head' : 'homepage__head active';
    let head1 = this.state.transform <= this.state.obj_head ? 'homepage__head_1' : 'homepage__head_1 active';
    let head2 = this.state.transform >= 2000 ? 'homepage__head_2 active' : 'homepage__head_2';
    let head3 = this.state.transform >= 2000 ? 'homepage__head_3 active' : 'homepage__head_3';

    console.log(this.state.obj_head);

    this.setState({
      transform: scrollTop,
      homepage__head: head,
      homepage__head_1: head1,
      homepage__head_2: head2,
      homepage__head_3: head3,
    });
  }


  render() {

    return (
      <div className="homepage__container">
        <svg width="272" height="305" viewBox="0 0 272 305" fill="#1B1A18" xmlns="http://www.w3.org/2000/svg">
          <line x1="272" y1="138.5" x2="84" y2="138.5" stroke="#1B1A18" strokeWidth="5"/>
          <line x1="169.5" y1="136" x2="169.5" y2="247" stroke="#1B1A18" strokeWidth="5"/>
          <path fillRule="evenodd" clipRule="evenodd" d="M272 57.7486C244.064 22.5633 200.917 0 152.5 0C68.2766 0 0 68.2766 0 152.5C0 236.723 68.2766 305 152.5 305C200.917 305 244.064 282.437 272 247.251V238.982C245.197 275.954 201.657 300 152.5 300C71.038 300 5 233.962 5 152.5C5 71.038 71.038 5 152.5 5C201.657 5 245.197 29.0464 272 66.018V57.7486Z" fill="#1B1A18"/>
          <line x1="269.5" y1="247" x2="269.5" y2="137" stroke="#1B1A18" strokeWidth="5"/>
        </svg>
        <div ref={el => this.head = el} className={this.state.homepage__head}></div>
        <div className={this.state.homepage__head_1}></div>
        <div className="homepage__content">

          <Parallax
          offsetYMax={575}
          offsetYMin={-375}
          slowerScrollRate
          >
            <img src="https://via.placeholder.com/350x150" />
          </Parallax>
        </div>
        <div className="homepage__head_2" className={this.state.homepage__head_2}></div>
        <div className="homepage__head_3" className={this.state.homepage__head_3}></div>
        <div className="homepage__block_3"></div>
        <div className="homepage__block_4"></div>
        <div className="homepage__content">

        </div>
      </div>
    );
  }
}
