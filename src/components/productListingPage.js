import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addToCart } from '../redux/cartSlice';
import { Link } from 'react-router-dom';
import './ProductListingPage.css';
import fiddleLeaf from './assets/fiddle-leaf-fig.jpg';
import snakePlant from './assets/Snake-Plant.jpg';
import aloeVera from './assets/aloe-vera.jpg';
import cactus from './assets/cactus.jpg';
import spiderPlant from './assets/spider-plant.jpg';
import pothos from './assets/pothos.jpg';
import Gollum from './assets/gollum-jade.webp';

const products = [
  { id: 1, name: 'Fiddle Leaf Fig', price: 50, category: 'Indoor', image: fiddleLeaf },
  { id: 2, name: 'Snake Plant', price: 25, category: 'Indoor', image: snakePlant },
  { id: 3, name: 'Aloe Vera', price: 20, category: 'Succulents', image: aloeVera },
  { id: 4, name: 'Cactus', price: 30, category: 'Outdoor', image: cactus },
  { id: 5, name: 'Spider Plant', price: 15, category: 'Indoor', image: spiderPlant },
  { id: 6, name: 'Pothos', price: 18, category: 'Succulents', image: pothos },
  { id: 7, name: 'Gollum Jade', price: 18, category: 'Succulents', image: Gollum },
];

const ProductListingPage = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);

  const handleAddToCart = (product) => {
    console.log('Adding to cart:', product); // Debug log
    dispatch(addToCart({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
      quantity: 1
    }));
  };

  const isInCart = (product) => cartItems.some((item) => item.id === product.id);

  const categories = ['Indoor', 'Outdoor', 'Succulents'];

  return (
    <div className="product-listing">
      <h2>Product Listing</h2>
      <div className="product-categories">
        {categories.map((cat) => (
          <div className="category" key={cat}>
            <h3>{cat} Plants</h3>
            <div className="products">
              {products.filter((p) => p.category === cat).map((product) => (
                <div key={product.id} className="product-card">
                  <img className="plantimg" src={product.image} alt={product.name} />
                  <h4>{product.name}</h4>
                  <p>${product.price.toFixed(2)}</p>
                  <button
                    className={`addToCart ${isInCart(product) ? 'added' : ''}`}
                    onClick={() => handleAddToCart(product)}
                    disabled={isInCart(product)}
                  >
                    {isInCart(product) ? 'Added to Cart' : 'Add to Cart'}
                  </button>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
      <div className="view-cart-container">
      <button className="view-cart-btn">
        <Link to="/cart">
          View Cart ({cartItems.reduce((total, item) => total + item.quantity, 0)})
        </Link>
      </button>
    </div>

    </div>
  );
};

export default ProductListingPage;