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