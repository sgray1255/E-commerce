import Card from 'react-bootstrap/Card';
import { useState, useEffect, useParams } from 'react';
import { findProduct} from '../../services/products';
import Quantity from '../Quantity';
import firestore from "../../services/firestore";

async function updateCart(id, quantity) {
  if (id) {
    console.log(id);
    console.log(quantity);

    const value = {
      qty: quantity
    }
    
    console.log(value);

    const colRef = firestore.collection("products");
    const docRef = colRef.doc(id);
    console.log(docRef);
    await docRef.update(value);
  }
};

const CartItem =({product}) => {

  const [quantity, setQty] = useState(0);
  

  const id = product.productID;

  useEffect(() => {


    console.log(quantity);
    updateCart(id, quantity);
    
  },[quantity])



  return (
    <div>
    <Card style={{ width: '18rem', height: '26rem', padding: '5px'}}>
      <Card.Img variant="top" src={product.img}  />
      <Card.Body>
        <Card.Title style={{font:'arial'}}>{product.productName}</Card.Title>
        <Card.Text>
          Price: ${product.price}
        </Card.Text>
      <Quantity value={quantity} onChange={setQty}/>
      </Card.Body>
    </Card>
  </div>
  )
};


export default CartItem;