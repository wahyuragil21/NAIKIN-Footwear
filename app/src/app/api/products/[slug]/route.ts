import { MyResponse, Product } from "@/app/types";
import productsModel from "@/db/models/product";
import { NextResponse } from "next/server";


export async function GET( request: Request, { params }: { params: { slug: string } } ) {
        const slug = params.slug 
        // console.log(slug);
    try {
        const product = await productsModel.findBySlug(slug)    
        // console.log(product);
            
        return NextResponse.json<MyResponse<Product>>({data: product})
        
    } catch (error) {
        console.log(error);
        
    }
}