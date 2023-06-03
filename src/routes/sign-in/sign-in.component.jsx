import { useEffect } from 'react';
import { getRedirectResult } from 'firebase/auth';

import {
  auth,
  signInWithGooglePopup,
  signInWithGoogleRedirect,
  createUserDocumentFromAuth
} from '../../utils/firebase/firebase.utils';

const SignIn = () => {
  useEffect(() => {
    async function getResult() {
      const response = await getRedirectResult(auth);
      if (response) {
        const userdocRef = await createUserDocumentFromAuth(response.user);
      }
    }
    getResult();
  }, []);

  const logGoogleUser = async () => {
    const { user } = await signInWithGooglePopup();
    const userDocRef = await createUserDocumentFromAuth(user);
  }

  return (
    <div>
      <h1>Sign In Page</h1>
      <button onClick={ logGoogleUser }>
        Sign In with Google Popup
      </button>
      <button onClick={ signInWithGoogleRedirect }>
        Sign In with Google Redirect
      </button>
    </div>
  );
};

export default SignIn;
