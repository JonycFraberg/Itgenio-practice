import logo from './logo.svg';
import './App.css';

function App() {
  const divStyle = {
    'text-align':'center'
  }
  return (
    <>
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        
      </header>
      <main>
        <div style={divStyle}>
          Hello world
        </div>
        </main>
    </div>
    </>
  );


 
}

export default App;
