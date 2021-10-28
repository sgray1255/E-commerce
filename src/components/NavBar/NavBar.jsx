import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import styles from "./NavBar.module.scss";
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import { ReactComponent as Logo } from "../../icons/Logo1.svg";
import "../../Custom.scss";


const NavBar = () => {
  return (
    <div className={styles.NavBar}>

      <div className={styles.Brand}>
      <Logo 
        fill="current" 
        width="100"
        height="50"
      />
      </div>

      <Link className={styles.link, styles.Brand} to="/">
        TenForward
      </Link>
      <Link className={styles.link}to="/products">Products</Link>
      <Link className={styles.link}to="/contactus">Contact</Link>
    </div>
  )
};

export default NavBar;
