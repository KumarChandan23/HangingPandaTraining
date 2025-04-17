import React, { useState, useEffect } from 'react';
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { auth } from './firebaseConfig';

const SigninWithGoogle = () => {
  const [userDetails, setUserDetails] = useState(null);

  const handleGoogleLogin = () => {
    const provider = new GoogleAuthProvider();
    try {
      const result =  signInWithPopup(auth, provider);
      const credential =  GoogleAuthProvider.credentialFromResult(result);
      const token  = credential.accessToken;
      const user = result.user;

      console.log("userInfo: ",user)
      console.log("userToken:",token)
    } catch (error) {
      console.log(error)
    }
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
      <button
        onClick={handleGoogleLogin}
        className='mb-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600'
      >
        Login with Google
      </button>
      

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

export default SigninWithGoogle;
