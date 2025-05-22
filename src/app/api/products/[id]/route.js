import dbConnect from "@/lib/dbConnect";
import { ObjectId } from "mongodb";

export async function GET(req, { params }) {
  const p = await params;
  const query = { _id: new ObjectId(p.id) };
  const result = await dbConnect("fake_items").findOne(query);

  return Response.json(result);
}

// its Just An Example Patch
// export async function PATCH(req,{params}) {
// const p = await params;
//   const postedData = await req.json();
//   const query = { _id: new ObjectId(p.id) };
//   const update = { $set: postedData};

//   const result = await dbConnect("fake_items").updateOne(query,update);
//   console.log(result);

//   return Response.json(result);
// }
