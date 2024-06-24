
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
const firebaseConfig = {
  apiKey: "AIzaSyAWz20LNaveY6s40z1dXmYR5y6bmHfi9ko",
  authDomain: "otpverify-92360.firebaseapp.com",
  projectId: "otpverify-92360",
  storageBucket: "otpverify-92360.appspot.com",
  messagingSenderId: "214881935968",
  appId: "1:214881935968:web:4e5641303d802376059905",
  measurementId: "G-LH5GGB8GWW"
};


const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);