import React, { Component } from 'react';

export default class extends Component {
  render () {
    return (
      <div className="row">
        <div className="col-sm-1"></div>
        <div className="col-sm-10">
          <div className="row">
            <div className="col-sm-3 col-xs-6">
              <br />
              <a target="_blank" href="https://github.com/sianokotoba">
                <img src="/media/github-drawn.png" width="75px" />
              </a>
              <br />
            </div>
            <div className="col-sm-3 col-xs-6">
              <br />
              <a target="_blank" href="https://www.linkedin.com/in/schen22">
                <img src="/media/Linkedin-57.png" width="75px" />
              </a>
              <br />
            </div>
            <div className="col-sm-3 col-xs-6">
              <br />
              <a href="/media/Sophia-Chen-resume.pdf" className="button" download>
                <img src="/media/Notepad-resume.png" width="75px" />
              </a>
              <br />
            </div>
            <div className="col-sm-3 col-xs-6">
              <br />
              <a href="mailto:schen22@gmail.com">
                <img src="/media/Gmail.png" width="70px" />
              </a>
              <br />
            </div>
            <div className="col-xs-12">
              <br />
              <h4>© Sophia Chen 2017</h4>
              <br />
            </div>
          </div>
        </div>
        <div className="col-sm-1"></div>
      </div>
    )
  }
}
