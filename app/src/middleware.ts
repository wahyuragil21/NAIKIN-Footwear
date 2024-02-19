import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";
import { readPayloadJose } from "./db/helpers/jwt";



export async function middleware(request: NextRequest) {
    // console.log(request);
    
    if (request.url.includes("/api/wishlist") || request.url.includes("/wishlist")) {
        
        const authorization = cookies().get("Authorization")
        // console.log(authorization);
        

        if (!authorization) {
            return NextResponse.next()
        }
        
        const access_token = authorization.value.split(" ")[1]
        // console.log(access_token);
        
        const decoder = await readPayloadJose<{_id : string, email: string}>(access_token)
        // console.log(decoder, "decoderrrrrrrrrrrrrrrrrrrrr");
        
        const requestHeaders = new Headers(request.headers)
        requestHeaders.set('data-user-id', decoder._id)
        requestHeaders.set('data-user-email', decoder.email)

        return NextResponse.next({
            request: {
                headers : requestHeaders
            }
        })
    }
}

export const config = {
    matcher: ['/api/wishlist/:path*', '/wishlist/:path*'],
}