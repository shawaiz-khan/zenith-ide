import clientPromise from "@/services/ConnectDB";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const client = await clientPromise;
    const db = client.db();

    // Ping the database to check connection
    return NextResponse.json({ success: true, message: 'Connected to MongoDB!' });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ success: false, message: `Connection failed: ${error.message}` });
  }
}