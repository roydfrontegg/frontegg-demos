import {initialize} from "@frontegg/js"

const style = document.createElement('style');
style.setAttribute('type', 'text/css');
style.innerHTML = '';
document.getElementsByTagName('head')[0].appendChild(style);


const app = initialize({
  contextOptions: {
    baseUrl: "https://app-frtqiefxjqn9.frontegg.com", //set your Frontegg environment domain and client ID here
    clientId: '04017595-4e5d-4e7e-aff6-93c58d489d2f'
  },
  hostedLoginBox: true
})

document.getElementById("loginWithRedirect").addEventListener('click', () => {
    app.loginWithRedirect()
  })
  
  document.getElementById("logout").addEventListener('click', () => {
    app.logout()
  })
  
  app.store.subscribe(() => {
    const state = app.store.getState();
    if (state.auth.user) {
      document.getElementById('user-container').innerText = state.auth.user.email;
    } else {
      document.getElementById('user-container').innerText = 'Not Authenticated'
    }
  
    document.getElementById('app-root').style.display = state.auth.isLoading ? 'hidden' : 'block'
  
  
    let styleHtml = ''
    if (state.auth.isAuthenticated) {
      styleHtml += '[fe-state="isAuthenticated"] { }';
      styleHtml += '[fe-state="!isAuthenticated"] { display: none; }';
    } else {
      styleHtml += '[fe-state="isAuthenticated"] { display: none; }';
      styleHtml += '[fe-state="!isAuthenticated"] { }';
    }
  
    if(app.options.hostedLoginBox){
      styleHtml += '[fe-mode="hosted"] { }';
    } else {
      styleHtml += '[fe-mode="hosted"] { display: none; }';
    }
  
    style.innerHTML = styleHtml;
  })