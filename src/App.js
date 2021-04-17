import image from './images/JavaScript-Developer-Memes.jpg';
import './App.css';

import Button from "./components/Button.js"
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={image} className="my-brand" alt="wedding-pic" />
        <p>
          on the fly change
          <Button>press me</Button>

        </p>

        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
