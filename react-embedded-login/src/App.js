import React, { useEffect, useState } from 'react';
import { useAuth, useAuthActions } from '@frontegg/react'
import { Link } from 'react-router-dom'
import { AdminPortal } from '@frontegg/react';

function App() {

  const { user, isAuthenticated } = useAuth();
  const { switchTenant } = useAuthActions();

  const handleClick = () => {
    AdminPortal.show();
  };

  const handleSwitchTenant = () => { 
    if (user.tenantId === '4cab2f40-8810-4c89-b85f-e2c1ef8ada3c') {
      console.log(`Swithching tenant: Roy Daniel account`)
      switchTenant({ tenantId: '36ad8775-ea37-4b60-8032-8738af07be87'})
    }
    else {
      console.log(`Swithching tenant: apiTest`)
      switchTenant({ tenantId: '4cab2f40-8810-4c89-b85f-e2c1ef8ada3c'})
    }
  };

  const openPrivacyAndSecurityModule = () => {
    window.location.href = '#/admin-box/privacy';
    AdminPortal.show();
  };

  useEffect(() => {
    console.log(user)
  },[])

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
          <button onClick={handleSwitchTenant}>Switch Active Tenant</button>
          <h4>Active tenant id: {user.tenantId}</h4>
          <button onClick={openPrivacyAndSecurityModule}>Open Privacy & Security</button>
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