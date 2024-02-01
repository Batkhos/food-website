import  "./CartItemStyle.css"


const CartItem = (props) => {
  const price = props.price ? `$${props.price.toFixed(2)}` : "";

  return (
    <li className="cart-item2">
      <div>
        <h2>{props.name}</h2>
        <div className="summary2">
          <span className="price2">{price}</span>
          <span className="amount2">x{props.amount}</span>
        </div>
      </div>
      <div className='actions2'>
        <button id onClick={props.onRemove}>−</button>
        <button onClick={props.onAdd}>+</button>
      </div>
    </li>
  );
}; 

export default CartItem;;
