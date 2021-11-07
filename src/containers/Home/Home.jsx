import styles from "../Home/Home.module.scss";
import CarouselList from "../../components/CarouselList";
import { useState, useEffect } from 'react';
import {getProducts} from "../../services/products";
import Models from "../../components/Models";
import firestore from "../../services/firestore";


const Home = () => {

  const  cleanProduct= (docSnapshot) => ({
    productID: docSnapshot.id,
    ...docSnapshot.data()
  });
  
  const cleanProducts = (querySnapshot) => {
    return querySnapshot.docs.map(cleanProduct);
  }

const getProducts = async () => {

  // get all products from firestore
  const colRef = firestore.collection('products');
  //snapshot in the form of promise 
  const snapshot = await colRef.get();


  return cleanProducts(snapshot);
  }

  

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
    <div>
      <CarouselList />
    </div>
      <Models products={products}/>
  </div>
  )
};

export default Home;
