import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { findProduct } from "../../services/products";
import Quantity from "../../components/Quantity";
import Favorite from "../../components/Favorite";
import styles from "./Product.module.scss";
import firestore from "../../services/firestore";


const Product = ({productID}) => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  const [quantity, setQty] = useState(1);

  useEffect(() => {
    async function updateProduct(id, value) {
    
      value = {
        qty: quantity
      }
      const colRef = firestore.collection("products");
      const docRef = colRef.doc(id);
      console.log(docRef);
      await docRef.update(value);
      console.log(product.qty);
    }

    updateProduct();

  },[quantity])

  

  useEffect(() => {
    const populateProduct = async () => {
      const data = await findProduct(id);
      setProduct(data);
    }

    populateProduct();

  },[id]);



  if (!product) {
    return <h1>Product with id: {productID} could not be found</h1>
  } else {

  
  
    console.log(quantity);

  return (
    <div className={styles.Product}>
      <img className={styles.Product__img} src={product.img}></img>
      <h2 className={styles.Product__name}>{product.productName}</h2>
      <h3 className={styles.Product__type}>{product.productType}</h3>
      <p className={styles.Product__des}>{product.description}</p>
      <Quantity value={quantity} onChange={setQty}/>
      <Favorite />
    </div>
  )
}}

export default Product; 
