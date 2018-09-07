import React, { Component } from 'react';
import './css/ProjectDetails.css';

export default class ProjectDetails extends Component {

  componentDidMount() {
    window.scrollTo(0, 0)
  }

  render() {

    return (
      <div className="projectDetails__container">
        <div className="projectDetails__content">
          <div className="projectDetails__title">
            {this.props.title}
          </div>
          <div className="projectDetails__description">
            Ceci est la description
          </div>
        </div>
        <div className="projectDetails__panel">
          <div className="projectDetails__head">
          </div>
        </div>
      </div>
    );
  }
}
