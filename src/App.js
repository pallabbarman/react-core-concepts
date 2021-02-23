import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const heros = ['Tom', 'Hanks', 'Leo', 'Holland', 'Khan']

  const products = [
    { name: 'PhotoShop', price: '$90.99' },
    { name: 'Illustrator', price: '$60.99' },
    { name: 'PDF Reader', price: '$6.99' },
    { name: 'Premiere El', price: '$399.99' }
  ]

  const heroNames = heros.map(hero => hero);
  console.log(heroNames);

  return (
    <div className="App">
      <header className="App-header">
        <Counter></Counter>
        <Users></Users>
        <ul>
          {
            heros.map(hero => <li>{hero}</li>)
          }
          {
            products.map(product => <li>{product.name}</li>)
          }
        </ul>
        {
          products.map(product => <Product product={product}></Product>)
        }
        <Person name="Tom Cruise" profession="Actor"></Person>
        <Person name="Kate" profession="Actress"></Person>
      </header>
    </div>
  );
}

function Counter() {
  const [count, setCount] = useState(0);
  const handleIncrease = () => setCount(count + 1);

  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={() => setCount(count - 1)}>Decrease</button>
      <button onClick={handleIncrease}>Increase</button>
    </div>
  )
}

function Users() {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(data => setUsers(data));
  }, [])

  return (
    <div>
      <h3>Dynamic User: {users.length}</h3>
      <ul>
        {
          users.map(user => <li>{user.name}</li>)
        }
      </ul>
    </div>
  )
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
