import React, { Component } from 'react';
import { connect } from 'react-redux';
import DarkLogo from './darkLogo';
import DarkBio from './darkBio';
import DarkCredits from './darkCredits';
import DarkExit from './darkExit';
import Navbar from './navbar';

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
        <div className="col-lg-2 col-md-2 col-sm-2 col-xs-2"></div>
        <div className="dark-center col-lg-8 col-md-8 col-sm-8 col-xs-8">
          <Navbar />
        </div>
        <div className="col-lg-2 col-md-2 col-sm-2 col-xs-2"></div>

        <div className="col-lg-2 col-md-2 col-sm-2 col-xs-2"></div>
        <div className="dark-center col-lg-8 col-md-8 col-sm-8 col-xs-8">
          <img src="media/death-bg-name.svg" className="death-bg" />
        </div>
        <div className="col-lg-2 col-md-2 col-sm-2 col-xs-2"></div>

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
