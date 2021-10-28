import { useState } from 'react';
import { updateProduct } from '../../services/products';
import styles from "./Favorite.module.scss";

const Favorite = ({product}) => {

  const [isFavorite, setIsFavorite] = useState(false);

  const handleClick = () => {
    setIsFavorite(!isFavorite);
    console.log(isFavorite);

    }




    return (
      <div className={styles.Favorite}>
        <button className={isFavorite ? styles.Favorited : styles.Favorite__btn}
        onClick={handleClick}>
          {isFavorite ? "Favourited" : "Add to Favourites"}
        </button>
      </div>
    )
  }

  export default Favorite;



  

//   return (

//     <div>
//       <button onClick={handleClick, handleChange}>Add to Favourites</button>
//     </div>
//   )
// }

// export default Favorite;
