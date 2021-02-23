import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Person></Person>
        <Person></Person>
        <Person></Person>
        <Person></Person>
      </header>
    </div>
  );
}
function Person() {
  const personStyle = {
    border: '2px solid green',
    margin: '10px',
    borderRadius: '10px'
  }
  return (
    <div style={personStyle}>
      <h1>Name: Tom khan</h1>
      <h3>Hero of the year</h3>
    </div>
  )
}

export default App;
