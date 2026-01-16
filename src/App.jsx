import { GoogleAuthProvider, signInWithPopup, getAuth } from "firebase/auth";
import { useState } from "react";
import "./App.css";

const auth = getAuth();
const googleProvider = new GoogleAuthProvider();

function App() {
  const [user, setUser] = useState(null);

  const handleGoogleSignIn = () => {
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        setUser(result.user);
        console.log("user info:", result.user);
      })
      .catch((error) => {
        console.log("error:", error);
      });
  };

  const handleGoogleSignIn = () => {
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        console.log("user info:", result.user);
      })
      .catch((error) => {
        console.log("error:", error);
      });
  };
  const handleSignOut = () => {};

  return (
    <>
      <h1>Simple Demple Auth</h1>
      {user ? (
        <button onClick={handleSignOut}>Sign Out</button>
      ) : (
        <button onClick={handleGoogleSignIn}>Sign In With Google</button>
      )}
    </>
  );
}

export default App;
