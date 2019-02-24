const config = {
 /* API KEY ETC */
};

let firebaseCache;

export const getUiConfig = firebase => ({
  signInOptions: [
    {
      provider: firebase.auth.EmailAuthProvider.PROVIDER_ID,
    },
  ],
  signInSuccessUrl: '../app/',
  credentialHelper: 'none',
});

const getFirebase = firebase => {
  if (firebaseCache) {
    return firebaseCache;
  }

  firebase.initializeApp(config);
  firebaseCache = firebase;
  return firebase;
};

export default getFirebase;
