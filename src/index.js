import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './App';
import { NavBar, Sidebar, Footer, Homepage} from './js/temp';
import reportWebVitals from './reportWebVitals';

function loadTemp() {
  const nav = ReactDOM.createRoot(document.querySelector('nav'));
  nav.render(
    <React.StrictMode>
      <NavBar />
    </React.StrictMode>
  );

  const sidebar = ReactDOM.createRoot(document.getElementById('sidebar'));
  sidebar.render(
    <React.StrictMode>
      <Sidebar />
    </React.StrictMode>
  );

  const footer = ReactDOM.createRoot(document.getElementById('footer'));
  footer.render(
    <React.StrictMode>
      <Footer />
    </React.StrictMode>
  );
}
function homeLoad(){
  const Home = ReactDOM.createRoot(document.getElementById('main'));
  Home.render(
    <React.StrictMode>
      <Homepage />
    </React.StrictMode>
  );
}
window.onload = () => {
  switch(window.location.pathname){
    case '/' : loadTemp()
    homeLoad();
    break;
    default: alert('404 Error');
    break;
  }
  
};

reportWebVitals();
