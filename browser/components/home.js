import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import IconButton from 'material-ui/IconButton';
import ActionHome from 'material-ui/svg-icons/action/home';
import Lightbulb from 'material-ui/svg-icons/action/lightbulb-outline';
import FontIcon from 'material-ui/FontIcon';
import { yellow100, yellow400, blueGrey400, blueGrey700 } from 'material-ui/styles/colors';

class Home extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const iconStyles = {
      marginRight: 24
    };
    const styles = {
      smallIcon: {
        width: 36,
        height: 36
      },
      mediumIcon: {
        width: 48,
        height: 48
      },
      largeIcon: {
        width: 60,
        height: 60
      },
      small: {
        width: 72,
        height: 72,
        padding: 16
      },
      medium: {
        width: 96,
        height: 96,
        padding: 24
      },
      large: {
        width: 120,
        height: 120,
        margin: -8,
        padding: 30
      },
    };

    return (
      <div className="row home-container">
        <div className="col-lg-6 col-md-6 col-sm-6 col-xs-6 home-button">
          <div className="round-lightbulb" style={{ 'float': `right` }}>
            <Link to="/lightmain">
              <IconButton
                iconStyle={styles.largeIcon}
                style={styles.large}
              >
                <Lightbulb
                  color={yellow400}
                  hoverColor={yellow100}
                />
              </IconButton>
            </Link>
          </div>
        </div>
        <div className="col-lg-6 col-md-6 col-sm-6 col-xs-6 home-button">
          <div className="round-home">
            <Link to="/darkmain">
              <IconButton
                iconStyle={styles.largeIcon}
                style={styles.large}
              >
                <ActionHome
                color={blueGrey400}
                hoverColor={blueGrey700}
                />
              </IconButton>
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({

});

const mapDispatchToProps = () => ({

});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
