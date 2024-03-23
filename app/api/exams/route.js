import { connectDatabase } from "@/helpers/db-util";
import { NextResponse } from "next/server";

export async function GET(request) {
  let client = await connectDatabase();

  const query = {
    query: "SELECT * from c",
  };
  const { resources } = await client.items.query(query).fetchAll();
  return NextResponse.json(resources);
}