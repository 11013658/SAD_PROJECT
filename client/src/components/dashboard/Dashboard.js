import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect, Provider } from "react-redux";
import { logoutUser } from "../../actions/authActions";
import ExitToAppSharpIcon from '@material-ui/icons/ExitToAppSharp';
import { Button } from '@material-ui/core';

class Dashboard extends Component {
  onLogoutClick = e => {
    e.preventDefault();
    this.props.logoutUser();
  };
render() {
    const { user } = this.props.auth;
return (
        <div className="logout">
            <h4>
              <b>Hey there,</b> {user.name.split(" ")[0]}
              <br />
              <span> Are you sure you want to logout? </span>
            </h4>
            <Button onClick={this.onLogoutClick} startIcon={<ExitToAppSharpIcon />} size="large" variant="outlined" color="secondary">
                  Logout 
            </Button>
        </div>
    );
  }
}

Dashboard.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};
const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(
  mapStateToProps,
  { logoutUser }
)(Dashboard);