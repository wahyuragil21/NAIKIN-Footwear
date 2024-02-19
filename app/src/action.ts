'use server'
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export async function Logout() {
    cookies().delete('Authorization')
    redirect('/login')
}


export async function FetchWishlist(){
        await fetch(process.env.NEXT_PUBLIC_BASE_URL + '/api/wishlist', {
          cache: 'no-store',
          headers: {
            Cookie: cookies().toString()
          }
        })
}


export async function GetProduct(){
    const response = await fetch(process.env.NEXT_PUBLIC_BASE_URL + '/api/wishlist', {
        cache: 'no-store',
        headers: {
            Cookie: cookies().toString()
        }
    })
    const { data } = await response.json()
    return data
}