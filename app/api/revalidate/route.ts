import { revalidatePath } from "next/cache";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const secret = request.headers.get("x-revalidate-secret");

  if (secret !== process.env.REVALIDATE_SECRET) {
    return new NextResponse("Invalid secret", { status: 401 });
  }

  // Revalidate pages
  revalidatePath("/");
  revalidatePath("/templates");
  revalidatePath("/components");

  return NextResponse.json({ revalidated: true });
}
