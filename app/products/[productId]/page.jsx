
import React from "react";


export async function generateMetadata({ params, searchParams }, parent) {
  const {productId} = await params;
 
  // fetch post information
  const post = await fetch(`https://api.escuelajs.co/api/v1/products/${productId}`).then((res) =>
    res.json()
  )

  console.log(post);
  
 
  return {
    title: post.title,
    description: post.description,
  }
}

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
