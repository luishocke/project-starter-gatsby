import { withFirebase } from "../FirebaseContext";
import React, { Component, Fragment } from "react";
import { getUiConfig } from "../../../../services/firebase";
import { StyledFirebaseAuth } from "react-firebaseui";

class Register extends Component {
  state = {
    uiConfig: []
  };

  componentWillMount() {
    this.setState({ uiConfig: getUiConfig(this.props.firebase) });
  }

  render() {
    const firebase = this.props.firebase;
    return (
      <Fragment>
        <StyledFirebaseAuth
          uiConfig={this.state.uiConfig}
          firebaseAuth={firebase.auth()}
        />
      </Fragment>
    );
  }
}
export default withFirebase(Register);
