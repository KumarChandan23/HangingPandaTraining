import React, { useEffect, useState } from 'react';
import { auth } from './firebase';

const Profile = () => {
  const [userDetails, setUserDetails] = useState(null);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        console.log('Logged-in user:', user);
        setUserDetails({
          name: user.displayName,
          email: user.email,
          uid: user.uid,
        });
      } else {
        console.log('User not logged in');
        setUserDetails(null);
      }
    });

    // Cleanup listener when component unmounts
    return () => unsubscribe();
  }, []);

  return (
    <div className='p-5'>
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

export default Profile;
