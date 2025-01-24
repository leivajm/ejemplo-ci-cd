import logo from './logo.svg';
import './App.css';
import ButtonComponent from './ButtonComponent';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <p>Ejemplo</p>
        <p>Ejemplo 2</p>
        <p>Ejemplo 3</p>
        <p>nuevo parrafo</p>
        <p>nuevo parrafo 2</p>
        <p>nuevo parrafo 3</p>
        <p>nuevo gitparrafo 4</p>
        <P>RAMA 3</P>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <ButtonComponent></ButtonComponent>
      </header>
    </div>
  );
}

export default App;
