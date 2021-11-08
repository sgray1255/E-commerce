const CartItem =({ product }) => {

  return (
    <div className={styles.ProductCard}>
    <Card style={{ width: '18rem', height: '26rem', padding: '5px'}}>
      <Card.Img variant="top" src={product.img}  />
      <Card.Body>
        <Card.Title style={{font:'arial'}}>{product.productName}</Card.Title>
        <Card.Text>
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
}