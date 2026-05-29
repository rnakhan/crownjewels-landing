import { initializeApp, getApps, getApp } from "firebase/app";
import { getAnalytics, isSupported } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFunctions } from "firebase/functions";

const firebaseConfig = {
  apiKey: "AIzaSyCsXzqusEKw1JVktR0W3Ps2eDH_OOaEcAs",
  authDomain: "crownjewels2.firebaseapp.com",
  databaseURL: "https://crownjewels2-default-rtdb.firebaseio.com",
  projectId: "crownjewels2",
  storageBucket: "crownjewels2.firebasestorage.app",
  messagingSenderId: "333452023121",
  appId: "1:333452023121:web:0ffac85773a71722776f70",
  measurementId: "G-YFV2YY3V2H"
};

// Initialize Firebase (safeguarding against multiple initializations in SSR)
const app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApp();

// Export auth and functions instances
export const auth = getAuth(app);
export const functions = getFunctions(app, "us-central1");

// Initialize Analytics conditionally as it only runs in browser environments
export const initAnalytics = async () => {
  if (typeof window !== "undefined" && (await isSupported())) {
    return getAnalytics(app);
  }
  return null;
};

export default app;
