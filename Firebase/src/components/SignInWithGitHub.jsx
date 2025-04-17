import React, { useState, useEffect } from 'react';
import { GithubAuthProvider, signInWithPopup, signOut } from 'firebase/auth';
import { auth } from './firebaseConfig';

const SigninWithGithub = () => {
  const [userDetails, setUserDetails] = useState(null);

  const handleGithubLogin = async () => {
    const provider = new GithubAuthProvider();
    provider.addScope("user:email");

    try {
      const result = await signInWithPopup(auth, provider);
      const credential = GithubAuthProvider.credentialFromResult(result);
      const token = credential.accessToken;
      const user = result.user;
        console.log(result)
      console.log("User Info:", user);
      console.log("Email:", email);

      setUserDetails({
        name: user.displayName,
        email: email,
        uid: user.uid,
      });
    } catch (error) {
      console.error("GitHub Login Error:", error);
    }
  };

  const handleLogout = () => {
    signOut(auth)
      .then(() => {
        console.log("User logged out");
        setUserDetails(null);
      })
      .catch((error) => {
        console.error("Logout Error:", error);
      });
  };

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        setUserDetails({
          name: user.displayName,
          email: user.email,
          uid: user.uid,
        });
      } else {
        setUserDetails(null);
      }
    });

    return () => unsubscribe();
  }, []);

  return (
    <div className='p-5'>
      {!userDetails ? (
        <button
          onClick={handleGithubLogin}
          className='mb-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600'
        >
          Login with GitHub
        </button>
      ) : (
        <button
          onClick={handleLogout}
          className='mb-4 px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600'
        >
          Logout
        </button>
      )}

      <h1 className='text-2xl font-bold mb-4'>User Profile</h1>
      {userDetails ? (
        <div className='bg-gray-100 p-4 rounded shadow-md w-fit'>
          <p><strong>Name:</strong> {userDetails.name || 'N/A'}</p>
          <p><strong>Email:</strong> {userDetails.email}</p>
          <p><strong>UID:</strong> {userDetails.uid}</p>
        </div>
      ) : (
        <p>Loading or not logged in...</p>
      )}
    </div>
  );
};

export default SigninWithGithub;
