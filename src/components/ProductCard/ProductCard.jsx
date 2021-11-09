import styles from "../ProductCard/ProductCard.module.scss";
import 'bootstrap/dist/css/bootstrap.css';
import Card from 'react-bootstrap/Card';
import Quantity from "../Quantity";
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { getProducts, updateProducts } from "../../services/products";
// import Favorite from "../../components/Favorite/Favorite";


// import getProducts from "../../services/products";

export const ProductCard = ({product}) => {


  return (
  <div className={styles.ProductCard}>
    <Card style={{ width: '18rem', height: '26rem', padding: '5px', display: 'flex', alignItems: 'center'}}>
      <Card.Img variant="top" src={product.img}  />
      <Card.Body>
        <Card.Title className={styles.title}>{product.productName}</Card.Title>
        <Card.Text className={styles.text}>
          Price: ${product.price}
        </Card.Text>
         {/* <Quantity /> */}
        {/* <Favorite /> */}
          <Link to={`/products/${product.productID}`}>
          See Product
          </Link>
      </Card.Body>
    </Card>
  </div>
  )
};
