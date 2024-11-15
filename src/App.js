import { useDispatch } from 'react-redux';
import './App.css';
import Cart from './Components/cart';
import { addItem } from './features/AddToCart/addToCartSlice';

function App() {
  const dispatch = useDispatch();

  const items = [
    { id: '1', name: 'Item 1', price: 10 },
    { id: '2', name: 'Item 2', price: 20 },
    { id: '3', name: 'Item 3', price: 30 },
  ];

  const handleAddToCart = (item) => {
    dispatch(addItem(item));
  };

  return (
    <div className="App">
      <header class="global-header">
        <span role="status" aria-live="polite"></span>
        <div class="banner">
          <div class="banner__inner l-center">
            <p>This is a new Order website. <a href="https://github.com/w3c/w3c-website">Give feedback</a> to help us improve it.</p>
          </div>
        </div>
        <nav id="lang-nav" aria-label="Language options">
          <div class="l-center">
            <div class="l-cluster">
            </div>
          </div>
        </nav>
        <nav id="global-nav" aria-label="Main">
          <div class="global-nav__inner l-center">
            <a class="logo-link" href="/">
              <span class="logo">
                <img src="https://www.w3.org/assets/logos/cart/w3c-no-bars.svg" alt="?" role="img" />
              </span>
              <span class="visuallyhidden">MY CART</span>
            </a>
          </div>
        </nav>
      </header>
      <header className="App-header">
        <h1>Redux Cart Example -</h1>
        <div>
          <a href='./Components/cart.js'>🧺 <span styles={{ textDecoration: 'none' }}>{items?.length}</span> </a>
        </div>

      </header>
      <body className='App-Body'>
        <div className="App-Body-Container">
          <div className="App-Body-Container-Row">
            {items.map((item) => (
              <div key={item.id} className="App-Body-Container-Row-Item">
                <div className="App-Body-Container-Row-Item-Image">
                  <img src="https://images.unsplash.com/photo-1551963831-b3b1ca40c98e" alt="product" />
                </div>
                <div className="App-Body-Container-Row-Item-Details">
                  <h3>{item.name}</h3>
                  <p>₹: {item.price}</p>
                  <button onClick={() => handleAddToCart(item)}>Add to Cart</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </body>
      <Cart />
    </div>
  );
}

export default App;
