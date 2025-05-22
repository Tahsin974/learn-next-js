"use client";
import Link from "next/link";

export default function Products({ products }) {
  return (
    <div>
      <ul>
        {products?.map((product) => (
          <li key={product._id}>{product.title}</li>
        ))}
        <Link href="/add-product">
          <button className="btn btn-info">Add Product</button>
        </Link>
      </ul>
    </div>
  );
}
