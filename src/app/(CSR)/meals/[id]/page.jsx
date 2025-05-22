import Link from "next/link";

export const getMealDetails = async (id) => {
  const res = await fetch(
    `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`
  );
  const data = await res.json();

  return data.meals;
};
export async function generateMetadata({ params }) {
  const id = (await params).id;

  // fetch meal information
  const [meal] = await getMealDetails(id);

  return {
    title: meal.strMeal,
    description: meal.strInstructions,
  };
}
export default async function MealDetails({ params }) {
  const id = await params.id;
  const [meal] = await getMealDetails(id);

  return (
    <div className="flex justify-center items-center min-h-screen py-20">
      <div className="card lg:card-side h-[max-content] bg-white text-black shadow-sm">
        <figure>
          <img src={meal?.strMealThumb} alt="Album" className="w-[10%]" />
        </figure>
        <div className="card-body w-[70%]">
          <h2 className="card-title">{meal?.strMeal}</h2>
          <p>{meal?.strInstructions}</p>
          <div className="card-actions justify-end">
            <Link href={`${meal?.strYoutube}`}>
              <button className="btn btn-primary">Recipe</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
