import ProductsList from "./../../components/ProductsList/ProductsList";
import { getProducts } from "../../services/products"
import { useState, useEffect } from 'react';
import styles from "./Products.module.scss";

export const Products = () => {
  const [products, setProducts] = useState(null);

  useEffect(() => {
    const populateProducts = async () => { 
      const data = await getProducts();
      setProducts(data);
    };

    populateProducts();
  }, []);

  console.log(products)

  
  return (
  
    <div className={styles.background}>
      <div className={styles.ProductsHeader}>
        <h1 className={styles.h1}>To Boldly Go...</h1>
        <h2 className={styles.h2}>straight to your cart.</h2>
      </div>
      <div className={styles.ProductsList}>
        <ProductsList products={ products }/>
      </div>
    </div>
  );
};

export default Products;