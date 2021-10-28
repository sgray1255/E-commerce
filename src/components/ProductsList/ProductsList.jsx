import {ProductCard} from "../ProductCard/ProductCard.jsx";
import { useContext } from "react";
import { SearchContext }  from "../../context/SearchContext/SearchContext";
import styles from "../ProductCard/ProductCard.module.scss";




const ProductsList = ({ products }) => {
    const { search } = useContext(SearchContext);

    if(products === null || products === undefined) {
        return (
            <>
            </>
        )
    }


    const searchResults = products.filter((product) =>
        {
            return (
             product.productName.includes(search));
        }
    );

    return (
        <>
            {searchResults.map((product, index) => (
                <ProductCard product={product} key={index} />
            ))}
        </>
    );
};

export default ProductsList;

