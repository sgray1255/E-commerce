import { useState, useEffect } from 'react';
import { findCartItems } from '../../services/products';
import CartItem from "../../components/CartItem";
import styles from "./Cart.module.scss";

const Cart = () => {
  const [cartItems, setCartItems] = useState(null);
  

  useEffect(() => {
    const gatherCartItems = async () => {
      const data = await findCartItems();
      setCartItems(data);
    }
    gatherCartItems();
  }, []);

 
  console.log(cartItems)
  return (
    <div>
      { cartItems && cartItems.map((product, index) => {
        return (
          <div className={styles.Cart}>
          <CartItem product={product} key={index} />
          </div>
        )
      })}
    </div>
  )
}
export default Cart;
