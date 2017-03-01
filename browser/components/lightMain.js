import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import { AutoRotatingCarousel, Slide } from 'material-auto-rotating-carousel'
import { cyan100, cyan600, deepPurpleA100, deepPurpleA200, blue200, blue500, blueGrey50, blueGrey300, red400, red600 } from 'material-ui/styles/colors'

class lightMain extends Component {
  constructor(props) {
    super(props);

    this.state = {
      width: window.innerWidth,
      height: window.innerHeight,
      play: false
    };

    this.updateCanvasSize = this.updateCanvasSize.bind(this);
    this.mouseover = this.mouseover.bind(this);
    this.mouseleave = this.mouseleave.bind(this);
  }

  // this function allows for state to be changed/responsive on window size change WITHOUT reloading
  updateCanvasSize() {
    var w = window,
        d = document,
        documentElement = d.documentElement,
        body = d.getElementsByTagName('body')[0],
        width = w.innerWidth || documentElement.clientWidth || body.clientWidth,
        height = w.innerHeight|| documentElement.clientHeight|| body.clientHeight;

    this.setState({width: width, height: height});
  }

  mouseover() {
    this.setState({play: true});
  }

  mouseleave() {
    this.setState({play: false});
  }

  componentWillMount() {
    this.updateCanvasSize();
  }

  componentDidMount() {
    // $("#lightFadeIn h1").addClass("load");
    window.addEventListener('resize', this.updateCanvasSize);

    var carousel = document.getElementById("carousel");
    carousel.addEventListener("mouseover", this.mouseover);
    carousel.addEventListener("mouseleave", this.mouseleave);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.updateCanvasSize);
  }

  render() {
    return (
      <div id="carousel">
        <AutoRotatingCarousel
          label="READ BIO"
          mobile={this.state.width <= 500 || this.state.height <= 650 ? true : false}
          autoplay={!this.state.play}
          open
          onStart={() => { window.location = "" }}
        >
          <Slide
            media={<iframe width="100%" height="100%" src="https://www.youtube.com/embed/5izv_zAEQEI" frameBorder="0" allowFullScreen></iframe>}
            mediaBackgroundStyle={{ backgroundColor: cyan100 }}
            contentStyle={{ backgroundColor: cyan600 }}
            title="ARCHIVER"
            subtitle="A desktop application created through Electron for collaborative editing and version control with text documents."
          />
          <Slide
            media={<iframe width="100%" height="100%" src="https://www.youtube.com/embed/iMZdNIWygHw" frameBorder="0" allowFullScreen></iframe>}
            mediaBackgroundStyle={{ backgroundColor: red400 }}
            contentStyle={{ backgroundColor: red600 }}
            title="WEBGL AND 3D RENDERING TUTORIAL"
            subtitle="How to Render in the Web Browser with WebGL"
          />
          <Slide
            media={<img src="/media/linkedin-logo-long.png" width="300px" />}
            mediaBackgroundStyle={{ backgroundColor: blueGrey50 }}
            contentStyle={{ backgroundColor: blueGrey300 }}
            title="LINKEDIN CONNECTIONS"
            subtitle="Chrome extension which takes in a list of LinkedIn profiles and adds them as new connections automatically without crashing the browser"
          />
          <Slide
            media={<img src="/media/bartendr-half.png" height="100%" width="100%" />}
            mediaBackgroundStyle={{ backgroundColor: blue200 }}
            contentStyle={{ backgroundColor: blue500 }}
            title="BARTENDR"
            subtitle="e-commerce website selling liquors; functionality includes persistent cart for different users, filtered searches, etcetera."
          />
          <Slide
            media={<img src="/media/sandy-bosko.png" height="100%" width="100%" />}
            mediaBackgroundStyle={{ backgroundColor: deepPurpleA100 }}
            contentStyle={{ backgroundColor: deepPurpleA200 }}
            title="SANDY BOSKO PERFORMANCE STUDIO"
            subtitle="Well just mix two colors and your are good to go!"
          />
        </AutoRotatingCarousel>
      </div>
    )
  }
}

const mapStateToProps = () => ({

});

const mapDispatchToProps = () => ({

});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(lightMain);
