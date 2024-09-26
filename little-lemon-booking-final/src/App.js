import './App.css';
import Footer from './Footer';
import Header from './Header';
import Main from './Main';
import Nav from './Nav';
import picture from './images/Picture1.jpg';


function App() {
  return (
    <div className="App">
      <meta name="description" content="Little Lemon restaurant web app"/>
      <meta name="og:title" content="Little Lemon Italian Restaurant web app"/>
      <meta name="og:description" content="This is the web app for the Little Lemon restaurant, where you can order food and make and update reservations online"/>
      <meta name="og:image" content={picture}/>
      <Header/>
      <Nav/>
      <Main/>
      <Footer/>
    </div>
  );
}

export default App;
