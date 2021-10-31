import { updateProduct, getProducts, findProduct } from "../../services/products";
import { useState, useEffect } from 'react';
import styles from "./Quantity.module.scss";


const Quantity = ({onChange}) => {

  const [count, setCount] = useState(1);

  useEffect(() => {
    onChange(count);

  }, [count]);



  const increment = (event) => {

      setCount(count + 1);
  };

  const decrement = (event) => {
      if (count !== 0) {
          setCount(count - 1);
      }
  };

 
  console.log(count);



  return (
      <div className={styles.Quantity}>
          <button onClick={decrement} className={styles.button}>-</button>
          <span>{count}</span>
          <button onClick={increment}className={styles.button}>+</button>
      </div>
  );
};

export default Quantity;