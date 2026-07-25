/* =========================================================
   firebase-config.js
   -----------------------------------------------------------
   Holds YOUR Firebase project's connection details so the
   Login / Sign up feature actually works.

   These values are safe to be public / committed to GitHub —
   Firebase's web config keys are not secret. Real security
   comes from Firebase's own Authentication + rules, not from
   hiding this file.

   HOW TO GET YOUR OWN VALUES (free, ~10 minutes):
   1. Go to https://console.firebase.google.com
   2. Click "Add project" → give it any name → you can skip
      Google Analytics (not needed) → Create project
   3. On the project overview page, click the "</>" (Web) icon
      to register a new web app → give it any nickname →
      Register app
   4. Firebase will show you a code block containing an object
      called `firebaseConfig` — copy those values into the
      object below, replacing every "REPLACE_ME".
   5. In the left sidebar: Build → Authentication → Get started
      → Sign-in method tab → click "Email/Password" → Enable → Save
   6. Save this file, refresh index.html, and Log in / Sign up
      will work for real.
   ========================================================= */

const firebaseConfig = {
  apiKey: "AIzaSyAtGEYg3Og-eFHsnuBg7LeYTm57sB9mO30",
  authDomain: "streamin-services-ranked.firebaseapp.com",
  projectId: "streamin-services-ranked",
  storageBucket: "streamin-services-ranked.firebasestorage.app",
  messagingSenderId: "550108599516",
  appId: "1:550108599516:web:422edd4f568b4b2c0e1019",
};

// Only initialize if the placeholders have actually been replaced,
// so the rest of the site still works fine before you've set this up.
if (firebaseConfig.apiKey !== "REPLACE_ME") {
  firebase.initializeApp(firebaseConfig);
} else {
  console.warn(
    "firebase-config.js still has placeholder values — Login/Sign up won't work until you fill in your own Firebase project keys. See the instructions at the top of this file."
  );
}
