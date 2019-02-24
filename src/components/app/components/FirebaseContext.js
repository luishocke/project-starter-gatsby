import React from 'react'

const FirebaseContext = React.createContext(null);

const style = {height: "100%"};

export const withFirebase = Component => props => (
    <FirebaseContext.Consumer style={style}>
      {firebase => <Component {...props} firebase={firebase} />}
    </FirebaseContext.Consumer>
);

export default FirebaseContext
