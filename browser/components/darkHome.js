import React, { Component } from 'react';
import { connect } from 'react-redux';


class darkHome extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="row">
        <section id="begin" className="panel one">
          <h1>Begin</h1>
        </section>
        <section id="explore" className="panel two">
          <div id="explore_slogan">
            <h1>Surprise</h1>
            <p>This is an example of using d4 and Scrollmagic to control the playback of a d3 visualization.</p>
          </div>
          <div id="explore_visualization"></div>
        </section>
        <section id="end" className="panel three">
          <h1>End</h1>
        </section>
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
)(darkHome);
