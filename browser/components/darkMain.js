import React, { Component } from 'react';
import { connect } from 'react-redux';
import DarkLogo from './darkLogo';
import DarkBio from './darkBio';
import DarkCredits from './darkCredits';


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
    return (
      <div className="row">
        <img src="media/death-bg-name.svg" className="death-bg" />
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
