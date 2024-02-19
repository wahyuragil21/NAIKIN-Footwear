import UserModel from "@/db/models/user"
import WishlistModel from "@/db/models/wishlist"
import { NextRequest, NextResponse } from "next/server"

export async function GET(request : NextRequest) {
    try {
        const userId = request.headers.get('data-user-id') as string
        const wishlist = await UserModel.findWishlist({userId})
        return NextResponse.json({data: wishlist})
    } catch (error) {
       return NextResponse.json({error: "Internal Server Error"}, {status: 500})
    }
}

export async function POST(request : NextRequest){
    try {
        const body = await request.json()
        const userId = request.headers.get('data-user-id') as string
        const newWishlist = {
            productId : body.productId,
            userId
        }
        const result = await WishlistModel.create(newWishlist)
        return NextResponse.json({data : result})
    } catch (error) {
       return NextResponse.json({error: "Internal Server Error"}, {status: 500})
    }
}

export async function DELETE(request : NextRequest){
    try {
        const body = await request.json()
        const result = await WishlistModel.delete(body.productId)
        return NextResponse.json({message : 'success delete'})
    } catch (error) {
        return NextResponse.json({error: "Internal Server Error"}, {status: 500})
    }
}