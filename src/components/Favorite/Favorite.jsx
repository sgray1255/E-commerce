import { useState, useEffect } from 'react';
import { updateProduct } from '../../services/products';
import styles from "./Favorite.module.scss";

const Favorite = ({onChange}) => {

  const [isFavorite, setIsFavorite] = useState(false);

  useEffect(() => {
    onChange(!isFavorite);

  },[isFavorite]);

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
