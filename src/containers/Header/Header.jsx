import NavBar from '../../components/NavBar/NavBar';
import SearchBar from '../../components/SearchBar/SearchBar';
import styles from "./Header.module.scss";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import { Link } from 'react-router-dom';



 const Header = () => {
  return (
    <div className={styles.Header}>

        <NavBar />
    
        <SearchBar />

        <Link to="/cart">
        <ShoppingCartIcon style={{fill:"white", fontSize:"large"}}/>
        </Link>
    
    </div>
  )
};

export default Header;
