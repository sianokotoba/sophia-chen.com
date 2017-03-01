import React, { Component } from 'react';
import { connect } from 'react-redux';


class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="app-container">
        {this.props.children}
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
)(App);
