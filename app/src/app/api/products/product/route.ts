import { MyResponse, Product } from "@/app/types";
import productsModel from "@/db/models/product";
import { NextResponse } from "next/server";
export const dynamic = "force-dynamic"

export async function GET(request: Request) {
    try {
        
        const { searchParams } = new URL(request.url);
        const search: string = searchParams.get("search") as string 
        const product = await productsModel.findAll(search)  
        return NextResponse.json<MyResponse<Product[]>>({data: product})
    } catch (error) {
        return NextResponse.json({error: "Internal Server Error"}, {status: 500})
    }
}