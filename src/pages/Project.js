import React, { Component, Fragment } from 'react';
import '../css/App.css';
import ProjectDetails from '../components/ProjectDetails.js';

class Project extends Component {
  render() {
    return (
      <Fragment>
        <ProjectDetails />
      </Fragment>
    );
  }
}

export default Project;
