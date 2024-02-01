import React,{useState,useContext,useEffect} from 'react'
import './CartbuttonStyle.css'
import CartContext from '../../store/CartContext';
import CartItem from '../Cart/CartItem';

export default function Cartbutton(props) {
  const [btnIsHighlighted, setBtnIsHighlighted] = useState(false);
  const cartCtx = useContext(CartContext);

  const { items } = cartCtx;

  const numberOfCartItems = items.reduce((curNumber, item) => {
    return curNumber + item.amount;
  }, 0);

  const btnClasses = `${'button'} ${
    btnIsHighlighted ? 'bump' : ""
  }`;

  useEffect(() => {
    if (items.length === 0) {
      return;
    }
    setBtnIsHighlighted(true);

    const timer = setTimeout(() => {
      setBtnIsHighlighted(false);
    }, 300);

    return () => {
      clearTimeout(timer);
    };
  }, [items]);


  return (
    <button className={btnClasses} onClick={props.onClick}>
        <span className='icon'><i class="fa-solid fa-cart-shopping"></i>
        <CartItem/></span>
        <span>Your Cart</span>
        <span className='badge'>{numberOfCartItems}</span>
    </button>
  )
}
