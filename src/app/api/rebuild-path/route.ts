"use server"
import { revalidatePath } from "next/cache"

export async function GET(request: Request) {
	try {
		const path = new URL(request.url).searchParams.get("path")
		// console.log("path", path)
		await revalidatePath(path as string)
		return Response.json({ data: { success: true } })
	} catch (error: any) {
		return Response.json({ error: "Error rebuilding path" })
	}

}