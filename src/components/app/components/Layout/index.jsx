/* Layout component */

// imports
import React, { Fragment } from 'react';
import GlobalStyle from '../../../GlobalStyle';
import getFirebase from '../../../../services/firebase';
import FirebaseContext from '../FirebaseContext';
import Register from '../Register';

// layout content
export default class AppLayout extends React.Component {
  state = {
    firebase: null,
  };

  componentDidMount() {
    const app = import('firebase/app');
    const auth = import('firebase/auth');

    Promise.all([app, auth]).then(values => {
      const firebase = getFirebase(values[0]);
      this.setState({ firebase });

      firebase.auth().onAuthStateChanged(user => {
        if (!user) {
          this.setState({ authenticated: false });
        } else {
          this.setState({ authenticated: true });
        }
      });
    });
  }

  render() {
    const { firebase, authenticated } = this.state;

    if (!firebase) return null;

    return (
      <FirebaseContext.Provider value={firebase}>
        {authenticated ? (
          <Fragment>
            {/* Global CSS styles */}
            <GlobalStyle />

            {/* app content */}
            {this.props.children}
          </Fragment>
        ) : (
          <Register />
        )}
      </FirebaseContext.Provider>
    );
  }
}
