import dbConnect from "@/lib/dbConnect";
import { ObjectId } from "mongodb";
import { revalidatePath } from "next/cache";

export async function GET() {
  const result = await dbConnect("fake_items").find({}).toArray();

  return Response.json(result);
}
export async function POST(req) {
  const postedData = await req.json();
  const result = await dbConnect("fake_items").insertOne(postedData);
  revalidatePath("/products");

  return Response.json(result);
}

// its Just An Example For Delete
// export async function DELETE(req) {
//   const postedData = await req.json();
//   const query = { _id: new ObjectId(postedData.id) };
//   const result = await dbConnect("fake_items").deleteOne(query);
//   console.log(result);

//   return Response.json(result);
// }
