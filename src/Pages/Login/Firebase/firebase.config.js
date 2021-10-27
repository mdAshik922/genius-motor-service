const firebaseConfig = {
  //   apiKey: "AIzaSyC70Kr9pelOn4FvXUxMt28hAubi2XxscE0",
  //   authDomain: "genius-car-ab171.firebaseapp.com",
  //   projectId: "genius-car-ab171",
  //   storageBucket: "genius-car-ab171.appspot.com",
  //   messagingSenderId: "802001312219",
  //   appId: "1:802001312219:web:507459ab09794e1e8c2ffe",
  //   measurementId: "G-V7JD1YL1KX"
  // };
    apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
    authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
    projectId:process.env.REACT_APP_FIREBASE_PROJECT_ID,
    storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.REACT_APP_FIREBASE_APP_ID,
    measurementId: process.env.REACT_APP_FIREBASE_MEASUREMENT_ID,
  };

  export default firebaseConfig;