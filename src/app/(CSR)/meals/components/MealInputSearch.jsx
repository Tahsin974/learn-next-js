"use client";
import { usePathname, useRouter } from "next/navigation";

import { useEffect, useState } from "react";

export default function MealInputSearch() {
  const [search, setSearch] = useState("");
  const router = useRouter();
  const pathname = usePathname();
  useEffect(() => {
    const searchQuery = { search };
    const urlQueryParams = new URLSearchParams(searchQuery);
    // const url = `${pathname}?${urlQueryParams}`; // relying javascript behavior
    const url = `${pathname}?${urlQueryParams.toString()}`; // for improve readability and make my intent clearer to other developers
    router.push(url); // navigate to url
  }, [search]);

  return (
    <div>
      <input
        type="text"
        className="text-black w-full input"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
    </div>
  );
}
