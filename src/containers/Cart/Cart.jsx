import { useState } from 'react';

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
          <CartItem product={product} key={index} />
        )
      })}
    </div>
  )
}
export default Cart;
