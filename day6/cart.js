import React, { useState } from 'react'

export const Cart = () => {
    const [item,additem]=useState([])
    const addtocart=(productname)=>
    {
      additem(prevproduct)=>[...prevproduct,productname]
    }

    return (
      <div>
        
          <h1>Shopping Cart</h1>
          <ul>
      {product.map((product, index) => (
          <li key={index}>{product}</li>
      ))}
  </ul>
          <Product addProductToCart={addProductToCart} />
  
  
      </div>
    )
  }
  
  