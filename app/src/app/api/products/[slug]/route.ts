import { MyResponse, Product } from "@/app/types";
import productsModel from "@/db/models/product";
import { NextResponse } from "next/server";

export async function GET( request: Request, { params }: { params: { slug: string } } ) {
    try {
        const slug = params.slug 
        const product = await productsModel.findBySlug(slug)    
        return NextResponse.json<MyResponse<Product>>({data: product})
    } catch (error) {
        return NextResponse.json({error: "Internal Server Error"}, {status: 500})
    }
}