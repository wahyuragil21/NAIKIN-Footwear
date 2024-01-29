import { comparePassword } from "@/db/helpers/bcrypt";
import { generateToken } from "@/db/helpers/jwt";
import UserModel from "@/db/models/user";
import { cookies } from "next/headers";
import { NextResponse } from "next/server";
import { ZodError, z } from "zod";

const User = z.object({
    email : z.string().nonempty(),
    password : z.string().nonempty()
})
export async function POST(request : Request) {
    const body : {email : string, password : string} = await request.json();

    try {

        const validation = User.safeParse(body)

        if (!validation.success) {
            throw validation.error
        }
        
        const emailFound = await UserModel.findByEmail(body.email)
        
        if(!emailFound) {
            return NextResponse.json({err: "Email not found"}, {status: 401})
        }
        
        const cekPassword = comparePassword(body.password, emailFound.password)

        // console.log(emailFound , "dari emaillll");
        
        
        if (!cekPassword) {
            return NextResponse.json({err: "Password not match"}, {status: 401})
        } 
        
        const payload = {
            _id : new Object(emailFound._id),
            email: emailFound.email
        }
        
        const token = generateToken(payload)


        // cookies().set('Authorization', `Bearer ${token}`)
        
        return NextResponse.json({
           message : 'Success Login!',
           data : {
            access_token : token
           }
        })
        
    } catch (error) {
        // console.log(error);
        
        if (error instanceof ZodError) {
            return NextResponse.json({error: error.issues[0].message}, {status: 400})
        }

        return NextResponse.json({error: "Internal Server Error"}, {status: 500})
    }
}