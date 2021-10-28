import styles from "../Home/Home.module.scss";
import CarouselList from "../../components/CarouselList";
import Products from "../Products";
import { Link } from 'react-router-dom';
import Models from "../../components/Models/Models";

const Home = ( {products} ) => {
  return (
  <div className={styles.background}> 
    <div>
      <CarouselList />
    </div>
    <div>
      <Models />
    </div>
    <div className={styles.Apparel}>
      <h2>Best Sellers in Apparel</h2>
      <img></img>
      <img></img>
      <img></img>
      <Link>See More</Link>
    </div>
  </div>
  )
};

export default Home;
