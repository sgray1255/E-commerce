import { useState, useEffect } from 'react';
import { updateProduct } from '../../services/products';
import styles from "./AddCart.module.scss";

const AddCart = ({onChange}) => {

  const [inCart, setInCart] = useState(false);

  useEffect(() => {
    onChange(!inCart);

  },[inCart]);

  const handleClick = () => {
    setInCart(!inCart);
    console.log(inCart);

    }




    return (
      <div className={styles.AddToCart}>
        <button className={inCart ? styles.inCart : styles.AddToCart__btn}
        onClick={handleClick}>
          {inCart ? "In Cart" : "Add to Cart"}
        </button>
      </div>
    )
  }

  export default AddCart;