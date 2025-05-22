"use client";

import HomePage from "./(public-view-pages)/home/page";

export default function Home() {
  console.log(process.env.NEXT_PUBLIC_BASE_URL);
  return (
    <div>
      <HomePage />
    </div>
  );
}
