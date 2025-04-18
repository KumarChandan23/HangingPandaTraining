import { getRedirectResult, GoogleAuthProvider, signInWithRedirect } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { auth } from '../firebaseConfig';

const SignInWithGoogleRedirect = () => {
  const [userData, setUserData] = useState(null);

  const handleSignInWithGoogleRedirect = () => {
    const provider = new GoogleAuthProvider();
    signInWithRedirect(auth, provider);
  };

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const result = await getRedirectResult(auth); // ✅ this must be awaited
        if (result) {
          const user = result.user;
          console.log("User Data: ", user);
          setUserData({
            name: user.displayName,
            email: user.email,
            photo: user.photoURL
          });
        }
      } catch (error) {
        console.error("Error getting redirect result: ", error);
      }
    };

    fetchUser();
  }, []);

  console.log(userData)

  return (
    <div>
      <button onClick={handleSignInWithGoogleRedirect}>
        Sign in with Google Redirect
      </button>

      {userData && (
        <div>
          <h1>User Profile</h1>
          <p>Name: {userData.name}</p>
          <p>Email: {userData.email}</p>
          <img src={userData.photo} alt="Profile" width={100} />
        </div>
      )}
    </div>
  );
};

export default SignInWithGoogleRedirect;
