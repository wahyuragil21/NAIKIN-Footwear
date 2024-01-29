import { NextResponse } from "next/server";
import { MyResponse, User } from "../types";
import UserModel from "@/db/models/user";
export const dynamic = "force-dynamic"


export async function GET() {
    const user = await UserModel.findAll()
    return NextResponse.json<MyResponse<User[]>>({data: user})

}