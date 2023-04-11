"use client";
import { useAuth, useLoginWithRedirect } from "@frontegg/nextjs";//, useLoginWithRedirect 
import { AdminPortal } from '@frontegg/nextjs'
import { useRouter } from 'next/navigation';

export const ClientComponent = () => {
  const { user, isAuthenticated } = useAuth();
  const loginWithRedirect = useLoginWithRedirect();
  const router = useRouter();

  const logout = useCallback(() => {
    router.replace('/account/logout');
  }, [router]);


  return (
    <div className="App">
      {isAuthenticated ? (
        <div>
          <div>
            <img src={user?.profilePictureUrl} alt={user?.name} />
          </div>
          <div>
            <span>Logged in as: {user?.name}</span>
          </div>
          <div>
            <button onClick={() => alert(user?.accessToken)}>
              What is my access token?
            </button>
          </div>
          <div>
            <button onClick={() => logout()}>Click to logout</button>
          </div>
          <div>
          <button onClick={handleClick}>Settings</button>
          </div>
        </div>
      ) : (
        <><></><div>
            <button onClick={() => loginWithRedirect()}>Click me to login</button>
         </div></>
      )}
    </div>
  );
};