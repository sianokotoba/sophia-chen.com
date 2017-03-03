import React, { Component } from 'react';
import { connect } from 'react-redux';
import DarkLogo from './darkLogo';
import DarkBio from './darkBio';
import DarkCredits from './darkCredits';
import DarkExit from './darkExit';

class darkMain extends Component {
  constructor(props) {
    super(props);

    this.state = {
      url: ''
    };

    this.getVideo = this.getVideo.bind(this);
  }

  componentWillMount() {
    this.getVideo();
  }

  getVideo() {
    videoRef.getDownloadURL()
      .then(url => {
        this.setState({ url: url });
      })
      .catch(() => {
        console.log("Could not find video in the database!");
      })
  }

  componentDidMount() {
    $("#darkFadeIn h1").addClass("load");
  }

  render() {
    let { url } = this.state;
    console.log("Vref", videoRef);
    console.log("URL on state", typeof url, url);
    return (
      <div className="row dark-main">
        <video tabIndex="0" autoPlay="autoplay" preload="preload" loop>
          <source type="video/mp4; codecs=&quot;avc1.42E01E, mp4a.40.2&quot;" src="https://firebasestorage.googleapis.com/v0/b/sophia-chen.appspot.com/o/Inkdrops_Hey_Pretty.mp4?alt=media&token=6e7630d7-172f-4757-8a24-a21676cf852a">
          </source>
            <p>Sorry, your browser does not support the &lt;video&gt; element.</p>
        </video>

        <div className="col-lg-2 col-md-2 col-sm-2 col-xs-2"></div>
        <div className="dark-center col-lg-8 col-md-8 col-sm-8 col-xs-8">
          <DarkLogo />
        </div>
        <div className="col-lg-2 col-md-2 col-sm-2 col-xs-2"></div>

        <div className="banner-container above-bio">
          <div className="banner"></div>
        </div>

        <div className="col-lg-2 col-md-2 col-sm-2 col-xs-2"></div>
        <div className="dark-center bio col-lg-8 col-md-8 col-sm-8 col-xs-8">
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
