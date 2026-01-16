import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from "../firebase.init.js";
import { useState } from "react";
import "./App.css";
import { getAuth, signOut } from "firebase/auth";
import { GithubAuthProvider } from "firebase/auth";

const githubProvider = new GithubAuthProvider();
const googleProvider = new GoogleAuthProvider();
githubProvider.addScope('user:email');

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
  const handleGitHubSignIn = ()=>{
    signInWithPopup(auth, githubProvider)
    .then(result=>{
      const loggedInUser = result.user;
      if(!loggedInUser.email){
        if(loggedInUser.providerData){
          const gitprovider = loggedInUser.
          providerData.find(p=> p.providerId === 'github.com');
          if(gitprovider && gitprovider.email){
            loggedInUser.email = gitprovider.email;
          }
        }
      }
      setUser(result.user);
    })
    .catch(error=>{
      console.log("error:", error);
    })
  }

  const handleSignOut = () => {
    const auth = getAuth();
    signOut(auth)
    .then(() =>{
      setUser(null);
    })
    .catch(error =>{
      console.log("error:", error);
    })
  };

  return (
    <>
      <h1>Simple Demple Auth</h1>
      {user ? (
        <button onClick={handleSignOut}>Sign Out</button>
      ) : (
        <>
          <button onClick={handleGoogleSignIn}>Sign In With Google</button>
          <button onClick={handleGitHubSignIn}>Sign In With GitHub</button>
        </>
      )}

      {user && (
        <div>
          <h3>User Name: {user.displayName}</h3>
          <p>Email: {user.email}</p>
          <img src={user.photoURL} alt="User Profile" />
        </div>
      )}
    </>
  );
}

export default App;
