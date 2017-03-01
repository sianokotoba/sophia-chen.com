import React, { Component } from 'react';

export default class extends Component {
  render () {
    return (
      <div className="row">
        <div className="first">
          <div id="name-logo-wrapper">
            <img className="base" src="/media/name-logo-dark.png" />
            <img className="hovered" src="/media/name-logo-light.png" />
          </div>
        </div>
      </div>
    )
  }
}
