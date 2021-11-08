import 'bootstrap/dist/css/bootstrap.css';
import Carousel from 'react-bootstrap/Carousel';
import styles from "./CarouselList.module.scss"

const CarouselList = ( {products} ) => {

  
  return (
    <div className={styles.CarouselList}>
    <Carousel className={styles.Carousel}>
        <Carousel.Item interval={2000}>
          <img style={{'height':"300px"}}
          className="d-block w-100"
          src= "https://www.herocollector.com/uploads/media/Build-Ent-D-below.jpg"
          alt= "Image One"
          />
          <Carousel.Caption>
          <h3>Models</h3>
          <p>Build the Enterprise 1701-D, The Defiant, and more!</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={2000}>
          <img style={{'height':"300px"}}
          className="d-block w-100"
          src= "https://blog.trekcore.com/wp-content/uploads/2018/07/defiant5.jpg"
          alt= "Image Two"
          />
          <Carousel.Caption>
          <h3>Memorabilia</h3>
          <p>Get the props used in your favourite Star Trek episodes!</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={2000}>
          <img style={{'height':"300px"}}
          className="d-block w-100"
          src= "https://canary.contestimg.wish.com/api/webimage/5a07dfc57298d91974dead4b-large.jpg?cache_buster=b812add267fc9932e08f36a4ae6a4f67"
          alt= "Image Three"
          />
          <Carousel.Caption>
          <h3>Merchandise</h3>
          <p>Find the coolest Star Trek merch in the Alpha Quadrant!</p>
          </Carousel.Caption>
        </Carousel.Item>
    </Carousel>
  </div>
  )};

export default CarouselList; 
