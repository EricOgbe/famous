import React from "react";
import { Grid } from "@material-ui/core";
import Product from './Product.js';

// const products = [
//     {id: 1,name: 't-shirt',description: 'A simple t-shirt', price: "$35", image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmd82iuicembc7SRdfEcx9LsK5hJReW99FNA&usqp=CAU' },
//     {id: 2,name: 'hoodie',description: 'A simple hoodie', price: "$45" , image: 'data:image/jpeg;base64,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'}
// ]

const Products = ({ products, onAddToCart }) => {
    return (
    <main>
        <Grid container justify="center" spacing={4}>
          {products.map((product) => (
              <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
                  <Product product={product} onAddToCart={onAddToCart}/>
              </Grid>
          ))}
        </Grid>
    </main>
    )
}


export default Products