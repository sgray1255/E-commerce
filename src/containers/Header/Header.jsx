import NavBar from '../../components/NavBar/NavBar';
import SearchBar from '../../components/SearchBar/SearchBar';
import styles from "./Header.module.scss";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";



 const Header = () => {
  return (
    <div className={styles.Header}>

        <NavBar />
    
        <SearchBar />

        <ShoppingCartIcon style={{fill:"white", fontSize:"large"}}/>
    
    </div>
  )
};

export default Header;
