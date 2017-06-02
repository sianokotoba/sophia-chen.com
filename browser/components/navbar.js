import React, { Component } from 'react';

export default class extends Component {
  render () {
    return (
      <div className="row">
        <div className="col-sm-2"></div>
        <div className="col-sm-8">
          <div className="fourth">
            <div className="col-sm-3 col-xs-12">
              <br />
              <a target="_blank" href="https://github.com/sianokotoba">
                <img src="/media/about-me-icon.png" width="100px" />
              </a>
              <br />
            </div>
            <div className="col-sm-3 col-xs-12">
              <br />
              <a target="_blank" href="https://www.linkedin.com/in/schen22">
                <img src="/media/projects-icon-2.png" width="100px" />
              </a>
              <br />
            </div>
            <div className="col-sm-3 col-xs-12">
              <br />
              <a href="/media/Sophia-Chen-resume.pdf" className="button" download>
                <img src="/media/fun-facts-icon.png" width="100px" />
              </a>
              <br />
            </div>
            <div className="col-sm-3 col-xs-12">
              <br />
              <a href="mailto:schen22@gmail.com">
                <img src="/media/credits-icon.png" width="100px" />
              </a>
              <br />
            </div>
          </div>
        </div>
        <div className="col-sm-2"></div>
      </div>
    )
  }
}
