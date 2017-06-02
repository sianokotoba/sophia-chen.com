import React, { Component } from 'react';
import { Link } from 'react-router';

export default class extends Component {
  render () {
    return (
      <div className="row">
        <div className="col-sm-1"></div>
        <div className="col-sm-10">
          <div className="fourth row">
              <div className="col-sm-3 col-xs-6">
                <br />
                <Link to="/bio">
                  <img src="/media/about-me-icon.png" width="100px" />
                </Link>
                <br />
              </div>
              <div className="col-sm-3 col-xs-6">
                <br />
                <br />
                <Link to ="/projects">
                  <img src="/media/projects-icon-2.png" width="100px" />
                </Link>
                <br />
              </div>
            <div className="col-sm-3 col-xs-6">
              <br />
              <Link to="/fun-facts">
                <img src="/media/fun-facts-icon.png" width="100px" />
              </Link>
              <br />
            </div>
            <div className="col-sm-3 col-xs-6">
              <br />
              <Link to="/credits">
                <img src="/media/credits-icon.png" width="100px" />
              </Link>
              <br />
            </div>
          </div>
        </div>
        <div className="col-sm-1"></div>
      </div>
    )
  }
}
