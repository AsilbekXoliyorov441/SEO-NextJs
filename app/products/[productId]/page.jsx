
import React from "react";

async function getProduct(productId) {
  const res = await fetch(`https://api.escuelajs.co/api/v1/products/${productId}`)
  return res.json()
}


async function SinglePage({ params }) {
  const {productId}  = await params;
  const product = await getProduct(productId)
  console.log(product);
  

  return (
    <div>
      <img src={product.images[1]} alt="" />
      <h1>{product?.title}</h1>
    </div>
  );
}

export default SinglePage;
