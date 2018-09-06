import React, { Component } from 'react';
import './css/Homepage.css';

export default class ItemProject extends Component {

  state = {
    x: 0,
    y: 0
  }

  componentDidMount = () => {
    window.addEventListener('mousemove', this.handleMouseMove);
  }

  componentWillUnmount = () => {
    window.removeEventListener('mousemove', this.handleMouseMove);
  }

  handleMouseMove = event => {
    let itemTop = this.itemproject.getBoundingClientRect().y;
    let itemLeft = this.itemproject.getBoundingClientRect().x;
    this.setState({ x: event.clientX - itemLeft, y: event.clientY - itemTop - 35});
  }

  render() {

    return (
        <div ref={item => this.itemproject = item}  className="item">
          <div className='black'></div>
          <div style={{transform:`translate3d(calc(-50% + ${this.state.x}px), ${this.state.y}px, 0px)`}} class="hoverText">{this.props.title}</div>
        </div>
    );
  }
}
