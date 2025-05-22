"use client";

import { useRouter } from "next/navigation";

export default function AddProductForm() {
  const router = useRouter();
  const handleAddProduct = async (e) => {
    e.preventDefault();
    const form = e.target;
    const title = form.title.value;
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/api/products`,
      {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify({ title }),
      }
    );
    const data = await res.json();
    form.reset();
    router.push("/products");

    return data;
  };
  return (
    <form
      onSubmit={handleAddProduct}
      className="flex justify-center items-center my-20 join"
    >
      <input
        type="text"
        name="title"
        className="input join-item"
        placeholder="Product Title"
      />
      <button className="btn join-item shadow-none border-0 btn-error">
        Submit
      </button>
    </form>
  );
}
