import firestore from "./firestore";

const  cleanProduct= (docSnapshot) => ({
  productID: docSnapshot.id,
  ...docSnapshot.data()
});

const cleanProducts = (querySnapshot) => {
  return querySnapshot.docs.map(cleanProduct);
}

export const getProducts = async () => {

  // get all products from firestore
  const colRef = firestore.collection('products');
  //snapshot in the form of promise 
  const snapshot = await colRef.get();


  return cleanProducts(snapshot);
  }

export const findProduct = async(id) => {
  const colRef = firestore.collection("products");
  const docRef = colRef.doc(id);

  const docSnap = await docRef.get();

  return cleanProduct(docSnap);
}

export const updateProduct = async (id, partial) => {
  console.log(partial);
  const colRef = firestore.collection("products");
  const docRef = colRef.doc(id);
  await docRef.update(partial);
 
};
