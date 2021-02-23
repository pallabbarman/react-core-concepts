import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Person name="Tom Cruise" profession="Actor"></Person>
        <Person name="Kate" profession="Actress"></Person>
      </header>
    </div>
  );
}

function Person(props) {
  const personStyle = {
    border:'2px solid green',
    margin: '20px',
    borderRadius: '10px',
    width:'500px'
  }
  return (
    <div style={personStyle}>
      <h1>Name: {props.name}</h1>
      <h3>Profession: {props.profession}</h3>
    </div>
  )
}

export default App;
