import React, { Component } from 'react';
import { connect } from 'react-redux';

class Home extends Component {
  constructor(props) {
    super(props);
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
)(Home);
