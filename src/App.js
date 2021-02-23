import logo from './logo.svg';
import './App.css';

function App() {
  const products = [
    { name: 'PhotoShop', price: '$90.99' },
    { name: 'Illustrator', price: '$60.99' },
    { name: 'PDF Reader', price: '$6.99' }
  ]
  return (
    <div className="App">
      <header className="App-header">
        <Product product={products[0]}></Product>
        <Product product={products[1]}></Product>
        <Product product={products[2]}></Product>
        <Person name="Tom Cruise" profession="Actor"></Person>
        <Person name="Kate" profession="Actress"></Person>
      </header>
    </div>
  );
}

function Product(props) {
  const productStyle = {
    border: '1px solid gray',
    borderRadius: '10px',
    backgroundColor: 'darkgray',
    height: '200px',
    width: '200px',
    float: 'left'
  }
  const { name, price } = props.product;
  console.log(name, price);
  return (
    <div style={productStyle}>
      <h3>{name}</h3>
      <h5>{price}</h5>
      <button>Buy Now</button>
    </div>
  )
}

function Person(props) {
  const personStyle = {
    border: '2px solid green',
    margin: '20px',
    borderRadius: '10px',
    width: '500px'
  }
  return (
    <div style={personStyle}>
      <h1>Name: {props.name}</h1>
      <h2>Profession: {props.profession}</h2>
    </div>
  )
}

export default App;
