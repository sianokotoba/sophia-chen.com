import React, { Component } from 'react';

export default class extends Component {
  render () {
    return (
      <div className="row">
        <div className="col-sm-1"></div>
        <div className="col-sm-10">
          <div className="fourth row">
              <div className="col-sm-3 col-xs-6">
                <br />
                <a target="_blank" href="https://github.com/sianokotoba">
                  <img src="/media/about-me-icon.png" width="100px" />
                </a>
                <br />
              </div>
              <div className="col-sm-3 col-xs-6">
                <br />
                <br />
                <a target="_blank" href="https://www.linkedin.com/in/schen22">
                  <img src="/media/projects-icon-2.png" width="100px" />
                </a>
                <br />
              </div>
            <div className="col-sm-3 col-xs-6">
              <br />
              <a href="/media/Sophia-Chen-resume.pdf" className="button" download>
                <img src="/media/fun-facts-icon.png" width="100px" />
              </a>
              <br />
            </div>
            <div className="col-sm-3 col-xs-6">
              <br />
              <a href="mailto:schen22@gmail.com">
                <img src="/media/credits-icon.png" width="100px" />
              </a>
              <br />
            </div>
          </div>
        </div>
        <div className="col-sm-1"></div>
      </div>
    )
  }
}
