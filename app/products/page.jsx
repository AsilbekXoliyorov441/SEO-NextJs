
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { cacheLife, cacheTag } from "next/cache";

async function ProductsPage() {


  const data = await fetch(
    "https://api.escuelajs.co/api/v1/products?limit=1000&offset=1",
    {
      cache:"force-cache",
      next:{
        stale:5,
        revalidate:5
      }
    }
  );
  let products = await data.json();

  if (products?.length === 0) {
    return (
      <p className="py-20 text-center text-slate-500">
        Hozircha mahsulotlar yo'q.
      </p>
    );
  }

  return (
    <section className="mx-auto max-w-7xl px-5 py-10 text-slate-800">
      <h1 className="text-3xl font-bold md:text-4xl">Mahsulotlar</h1>
      <p className="mt-1 mb-7 text-slate-500">{products.length} ta mahsulot</p>

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {products.map((product) => (
          <Link
            href={`/products/${product.id}`}
            key={product.id}
            className="flex flex-col overflow-hidden rounded-xl border border-slate-200 bg-white transition hover:shadow-md"
          >
            <div className="relative aspect-square bg-slate-100">
              <div>
                <img
                  src={product?.images[1]}
                  alt={product.title}
                  loading="lazy"
                  width={400}
                  height={200}
                  className="h-full w-full absolute object-cover"
                />
              </div>
            </div>

            <div className="flex flex-1 flex-col p-4">
              <span className="text-sm capitalize text-blue-700">
                {product.category.title}
              </span>

              <h2 className="mt-1 mb-3 line-clamp-2 font-semibold leading-snug">
                {product.title}
              </h2>

              <div className="mt-auto flex items-center justify-between">
                <span className="text-lg font-bold">{product.price}</span>
                <span className="text-sm text-slate-500">
                  ★ {product.description}
                </span>
              </div>

              <button className="mt-4 rounded-lg bg-blue-700 py-2 text-sm font-medium text-white transition hover:bg-blue-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-700 disabled:cursor-not-allowed disabled:bg-slate-300">
                {product.id ? "Savatga qo'shish" : "Mavjud emas"}
              </button>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}

export default ProductsPage;
