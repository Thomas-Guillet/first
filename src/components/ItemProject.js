import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
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
    this.setState({ x: event.clientX - itemLeft, y: event.clientY - itemTop - 60});
  }

  render() {
     const sectionStyle = {
       backgroundImage: `url(${this.props.imgSrc})`
     };
    const linkProject = this.props.linkProject + '';
    return (
      <NavLink to={linkProject} params={{ title: "hello" }}>
        <div ref={item => this.itemproject = item}  className="item" style={sectionStyle}>
          <div className='black'></div>
          <div style={{transform:`translate3d(calc(-50% + ${this.state.x}px), ${this.state.y}px, 0px)`}} className="hoverText">{this.props.title}</div>
        </div>
      </NavLink>
    );
  }
}
