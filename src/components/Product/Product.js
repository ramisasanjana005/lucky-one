import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import './Product.css';


const Product = (props) => {
    const { product, handleAddToCart } = props;

    const { name, price, image } = product;
    return (
        <div className="product">
            <div className="product-info">
                <img src={image} alt=""></img>
                <p className="product-name">{name}</p>
                <p>{price} Taka</p>
            </div>
            <button onClick={() => handleAddToCart(product)} className="cart-btn">
                <p className="btn-text">Add to Cart</p>
                <FontAwesomeIcon icon={faShoppingCart} />
            </button>
        </div>
    );
};

export default Product;