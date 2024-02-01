import { useState } from 'react';
import './App.css';
import Headering from './componets/Layout/Header';
import Meals from './componets/Meals/Meals';
import CartProvider from './store/CartProvider';
import Cart from "./componets/Cart/Cart"

function App() {
  const[cartIsShow, setCartShowIsShow] = useState(false)

  const showCartHandler = () =>{
    setCartShowIsShow(true)
  }

  const hideCartHandler = () =>{
    setCartShowIsShow(false)
  }

  return (
   <CartProvider>
    {cartIsShow && <Cart onClose={hideCartHandler} />}
      <Headering onShowCart={showCartHandler} onClose={hideCartHandler}/>
      
      <main>
      <Meals/>
      </main>
   </CartProvider> 

  );
}

export default App;
