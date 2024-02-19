import UserModel from "@/db/models/user"
import { ZodError } from "zod"

export async function POST(request: Request) {
    try {
        const body = await request.json()
        
        const cekUsername = await UserModel.findByUsername(body.username)
        if (cekUsername) {
            return Response.json({error: "Username already exist"}, {status: 400})
        }

        const cekEmail = await UserModel.findByEmail(body.email)
        if (cekEmail) {
            return Response.json({error: "Email already exist"}, {status: 400})
        }

        const result = await UserModel.create(body)
        return Response.json({data: result})
    } catch (error) {
        if (error instanceof ZodError) {
            return Response.json({error: error.issues[0].message}, {status: 400})  
        }
        return Response.json({error: "Internal Server Error"}, {status: 500})
    }
}