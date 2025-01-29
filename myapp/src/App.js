// import logo from './logo.svg';
// import './App.css';
import Userprofile from "./Userprofile";

function App() {
  const userData = {
    name: 'Tanisha',
    age: 20,
    location: 'Surat',
    bio: 'PRACTICAL2-REACT PROPS'
  }
  return (
    <div className="App">
      <Userprofile name={userData.name} age={userData.age} location={userData.location} bio={userData.bio} />
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        </header> */}
    </div>
  );
}

export default App;
