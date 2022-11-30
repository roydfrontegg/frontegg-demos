import React from 'react';
import { useAuth } from '@frontegg/react'
import { Link } from 'react-router-dom'
import { AdminPortal } from '@frontegg/react';

function App() {

  const { user, isAuthenticated } = useAuth();

  const handleClick = () => {
    AdminPortal.show();
  };

  return (
    <div className='App'>
      {isAuthenticated ? (
        
        <div className='user-zone'>
          <img src={user.profilePictureUrl} alt={user.name} />
          <span>{user.name}</span>
          <button>
            <Link to={`/account/logout`}>logout</Link>
          </button>
          <button onClick={handleClick}>Settings</button>
        </div>

      ) :
      
      <div className='user-zone'>
        <p>Not logged in</p>
        <button>
          <Link to={`/account/login`}>login</Link>
        </button>
      </div>

      }
    </div>
  )
}

export default App;