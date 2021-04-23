import 'bootstrap/dist/css/bootstrap.min.css';
import { React, useState, useEffect } from "react";
import { Carousel } from "react-bootstrap"
import Carrousel from "./Carrousel.js";
// import Navbar from "./Navbar/Navbar.js";
// import  Products from "./Product/Products.js";
import "./index.js";
import { commerce } from "../lib/commerce.js"


import { Products, Navbar, Cart } from "../components";

const App = () => {
  const [products, setProducts] = useState([])

  const [cart, setCart] = useState({})
       
  const fetchProducts = async () => {
       const { data} = await commerce.products.list();

       setProducts(data);
  }


  const fetchCart = async () => {
  setCart(await commerce.cart.retrieve());
  };


  const handleAddToCart = async (productId, quantity) => {
   const item = await commerce.cart.add(productId, quantity);

   setCart(item.cart);
  }

  useEffect(() => {
    fetchProducts();
    fetchCart();
  }, []);

  console.log(cart)


  

  return (
    <div>
      <Navbar totalItems={cart.total_items}/>
      <Carrousel />,
      {/* <Products products={products} onAddToCart={handleAddToCart}/> */}
      <Cart cart={cart} />
    </div>
  );
}

export default App;
