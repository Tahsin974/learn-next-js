import { Roboto, Inter } from "next/font/google";

import Link from "next/link";
import MealInputSearch from "./components/MealInputSearch";
import Image from "next/image";
const inter = Inter({
  weight: ["500", "700"],

  subsets: ["latin"],
});
const roboto = Roboto({
  weight: ["400"],
  subsets: ["latin"],
});
export const metadata = {
  title: "All Meals",
};

export const getMeals = async (query) => {
  const res = await fetch(
    `https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`
  );
  const data = await res.json();
  if (data.meals) {
    return data.meals;
  } else {
    return [];
  }
};
export default async function Meals({ searchParams }) {
  const query = await searchParams;
  const meals = await getMeals(query.search);

  return (
    <div className="py-20 space-y-20">
      <div className="flex justify-center  ">
        <div className="w-full">
          <MealInputSearch />
        </div>
      </div>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-5 ">
        {meals.map((meal) => (
          <div key={meal.idMeal} className="card bg-white shadow-sm">
            <figure>
              <Image
                src={meal.strMealThumb}
                alt={meal.strMealThumb}
                width={384}
                height={384}
              />
            </figure>
            <div className="card-body">
              <h2 className={`text-xl font-bold ${inter.className}`}>
                {meal.strMeal}
              </h2>
              <p className={`${roboto.className} text-justify`}>
                {meal.strInstructions.split(" ").slice(0, 40).join(" ")}.....
              </p>
              <div className="card-actions justify-end">
                <Link href={`/meals/${meal.idMeal}`}>
                  <button className="btn btn-primary">Buy Now</button>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
