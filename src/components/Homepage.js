import React, { Component } from 'react';
import './css/Homepage.css';
import piano from '../assets/img/piano.jpg';
import { Parallax } from 'react-scroll-parallax';
import ItemProject from './ItemProject.js';

export default class Homepage extends Component {



  state = {
    transform: 0,
    obj_head: null,
    homepage__head: 'homepage__head',
    homepage__head_1: 'homepage__head_1',
    homepage__head_2: null,
    homepage__head_3: null,
    x: 0,
    y: 0
  }

  componentDidMount = () => {
    window.addEventListener('scroll', this.handleScroll);
    window.addEventListener('mousemove', this.handleMouseMove);
    this.setState({
      obj_head: this.head.getBoundingClientRect().y + 170 + (window.pageYOffset || document.documentElement.scrollTop),
      obj_head_2: this.head2.getBoundingClientRect().y + 170 + (window.pageYOffset || document.documentElement.scrollTop)
    });
  }

  componentWillUnmount = () => {
    window.removeEventListener('scroll', this.handleScroll);
    window.removeEventListener('mousemove', this.handleMouseMove);
  }


  handleMouseMove = event => {
    this.setState({ x: event.clientX, y: event.clientY });
  }

  handleScroll = event => {
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    let head = this.state.transform <= this.state.obj_head ? 'homepage__head' : 'homepage__head active';
    let head1 = this.state.transform <= this.state.obj_head ? 'homepage__head_1' : 'homepage__head_1 active';
    let head2 = this.state.transform >= this.state.obj_head_2 ? 'homepage__head_2 active' : 'homepage__head_2';
    let head3 = this.state.transform >= this.state.obj_head_2 ? 'homepage__head_3 active' : 'homepage__head_3';

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
          offsetYMax={200}
          offsetYMin={-200}
          slowerScrollRate={500}
          >
            <img height="300" src={piano} />
          </Parallax>
          <Parallax
          className="homepage__content_text"
          offsetYMax={400}
          offsetYMin={-400 }
          slowerScrollRate
          tag="div"
          >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. In purus risus, rutrum et odio egestas, aliquet mattis metus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Suspendisse et nunc at odio semper venenatis ac sed eros. Maecenas pellentesque tincidunt dui non rhoncus. Donec cursus malesuada pharetra. Cras tincidunt faucibus scelerisque. Vestibulum mi ex, porta et velit a, vulputate pharetra ante. In hac habitasse platea dictumst. Mauris nec ultrices magna, ut faucibus libero. Nullam non leo quis ante porttitor tempor.

            Donec et nulla rutrum, convallis elit sed, rutrum lacus. Sed non erat eu lorem condimentum volutpat hendrerit non felis. Sed ac tortor sem. Morbi vestibulum magna eu felis faucibus suscipit. Proin auctor ligula arcu, at porttitor mauris feugiat non. Praesent quis ornare purus. Nulla quam odio, laoreet eu dui eu, pellentesque consequat dui. Morbi quis enim ut arcu aliquet semper quis id nulla. Donec vel pellentesque enim, in pretium mauris. Mauris porta fringilla justo eget finibus. Cras non augue a ante porta maximus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Quisque dignissim in orci a dictum. Vivamus tellus velit, accumsan in ligula vitae, ullamcorper dignissim justo. Duis scelerisque congue nunc, nec gravida elit tincidunt et. Cras sem nibh, vehicula et nibh vel, malesuada finibus neque.

            Nulla posuere neque non dictum ultricies. Donec venenatis in neque eget maximus. Etiam placerat orci leo, at condimentum metus suscipit sit amet. Sed pulvinar turpis vitae augue convallis semper. Aliquam ut nunc ante. Nulla dui orci, lobortis ac libero porta, mollis posuere justo. In consequat finibus neque, nec consequat turpis bibendum eget. Integer sagittis eget justo fringilla convallis. Mauris eget finibus leo.
            </Parallax>
        </div>
        <div ref={el2 => this.head2 = el2} className="homepage__head_2" className={this.state.homepage__head_2}></div>
        <div className="homepage__head_3" className={this.state.homepage__head_3}></div>
        <div className="homepage__content">
          <Parallax
          className="homepage__project"
          offsetYMax={250}
          offsetYMin={-200 }
          slowerScrollRate
          tag="div"
          >
            <ItemProject title="beau titre" />
            <ItemProject title="Woaw" />
            <ItemProject title="c bo" />
            <ItemProject title="ok." />
            <ItemProject title="beau titre" />
            <ItemProject title="héhée" />
            <ItemProject title="beau titre" />
          </Parallax>
        </div>
        <div className="homepage__block_3"></div>
        <div className="homepage__block_4"></div>
        <div className="homepage__content">

        </div>
      </div>
    );
  }
}
