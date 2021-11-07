import styles from "./Models.module.scss";
import Card from 'react-bootstrap/Card';
import {Link} from 'react-router-dom';



const Models = ({ products }) => {

  if(products === null || products === undefined) {
    return (
        <>
        </>
    )
}


const searchResults = products.filter((product) =>
    {
        return (
         product.productName.includes("Model"));
    }
);


  return (
    <div>
      <h3 className={styles.Models__header}>Best Sellers in Models</h3>

    <div className={styles.Models}>
      {searchResults.map((product, index) => (
        <Link to={`/products/${product.productID}`}>
        <img className={styles.Models__img} src={product.img} key={product.productID}/>
        </Link>
      ))}
      
    </div>
  </div>
  );
};

export default Models;
