import React, { Component } from 'react';
import { connect } from 'react-redux';
import DarkLogo from './darkLogo';
import DarkBio from './darkBio';
import DarkCredits from './darkCredits';
import DarkExit from './darkExit';

class darkMain extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  componentDidMount() {
    $("#darkFadeIn h1").addClass("load");
  }

  render() {
    return (
      <div className="row">
        <video tabIndex="0" autoPlay="autoplay" preload="preload" loop>
          <source type="video/mp4; codecs=&quot;avc1.42E01E, mp4a.40.2&quot;">
          </source>
            <p>Sorry, your browser does not support the &lt;video&gt; element.</p>
        </video>

        <div className="col-lg-2 col-md-2 col-sm-2 col-xs-2"></div>
        <div className="dark-center col-lg-8 col-md-8 col-sm-8 col-xs-8">
          <DarkLogo />
        </div>
        <div className="col-lg-2 col-md-2 col-sm-2 col-xs-2"></div>

        <div className="banner-container">
          <div className="banner"></div>
        </div>

        <div className="col-lg-2 col-md-2 col-sm-2 col-xs-2"></div>
        <div className="dark-center col-lg-8 col-md-8 col-sm-8 col-xs-8">
          <DarkBio />
        </div>
        <div className="col-lg-2 col-md-2 col-sm-2 col-xs-2"></div>

        <div className="banner-container">
          <div className="banner"></div>
        </div>

        <div className="col-lg-2 col-md-2 col-sm-2 col-xs-2"></div>
        <div className="dark-center col-lg-8 col-md-8 col-sm-8 col-xs-8">
          <DarkCredits />
        </div>
        <div className="col-lg-2 col-md-2 col-sm-2 col-xs-2"></div>

        <div className="banner-container">
          <div className="banner"></div>
        </div>

        <div className="col-lg-2 col-md-2 col-sm-2 col-xs-2"></div>
        <div className="dark-center col-lg-8 col-md-8 col-sm-8 col-xs-8">
          <DarkExit />
        </div>
        <div className="col-lg-2 col-md-2 col-sm-2 col-xs-2"></div>
      </div>
    );
  }
}

const mapStateToProps = () => ({

});

const mapDispatchToProps = () => ({

});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(darkMain);

/*
        <nav>
          <ul className="pagination">
            <li>
              <a onClick={this.moveone()} aria-label="Previous">
                <span aria-hidden="true">&laquo;</span>
              </a>
            </li>
            <li><a onClick={this.moveit(0)}>1</a></li>
            <li><a onClick={this.moveit(1)}>2</a></li>
            <li><a onClick={this.moveit(2)}>3</a></li>
            <li><a onClick={this.moveit(3)}>4</a></li>
            <li><a onClick={this.moveit(4)}>5</a></li>
            <li>
              <a onClick="moveone()" aria-label="Next">
                <span aria-hidden="true">&raquo;</span>
              </a>
            </li>
          </ul>
        </nav>
*/

/*
        <div className="testcontent" style={{position: `absolute`, top: `3500px`, left: `150px`, height: `200px`, width: `500px`, background: `blue`, color: `white`, padding:`20px`}}>
          <p>American, 1996</p>
          <p><strong>Interactive Reaction</strong> 2009<br/>>Mixed Media</p>
        </div>
*/
