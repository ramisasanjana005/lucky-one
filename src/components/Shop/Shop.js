import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import Cart from '../Cart/Cart';
import './Shop.css';

const Shop = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);

    useEffect(() => {
        fetch('products.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])

    const handleAddToCart = (product) => {
        console.log(product.name);

        const newCart = [...cart, product];
        setCart(newCart);
    }


    const chooseProduct = (cart) => {
        var randomItem = cart[Math.floor(Math.random() * cart.length)];
        document.getElementById('randomItem').value = randomItem;
    }

    return (
        <div className="shop-container">
            <div className="products-container">
                {

                    products.map(product => <Product
                        key={product.id}
                        product={product}
                        handleAddToCart={handleAddToCart}
                    ></Product>)
                }

            </div>

            <div className="cart-container">

                <h3>Cart Details</h3>
                <p>Selected Products:</p>

                {


                    cart.map(selectedProduct => <p>
                        {selectedProduct.name}
                    </p>)
                }

                <button onClick=
                    {
                        () => chooseProduct()


                    } className="chooseOne-btn">Choose 1 for me</button>
                {
                    <p id="randomItem">
                    </p>
                }

                <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Shop;