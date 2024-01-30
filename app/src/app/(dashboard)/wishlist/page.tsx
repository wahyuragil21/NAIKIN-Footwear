'use client'

import CardProduct from "@/components/cardProduct";
import Footer from "@/components/contentFoot";
import { UserWishlist } from "@/db/models/user";
import { useEffect, useState } from "react";

export default function Wishlist() {

    const [data, setData] = useState<UserWishlist[]>([])
    const fetchWishlist = async () => {
        const response = await fetch(process.env.NEXT_PUBLIC_BASE_URL + '/api/wishlist', {cache: 'no-store',})
        const { data } = await response.json()
        // console.log(data);
        setData(data)
    }


    useEffect(() => {
        fetchWishlist()
    }, [])
    

    return (
        <>
            {data[0]?.productWishlists.length == 0 ?
                (
                    <>
                    <h1 className="text-2xl mb-3 text-center items-center justify-center">Welcome to your wishlists <span className="font-bold text-3xl">{data[0]?.username}</span></h1>
                    <h1 className="text-2xl mb-3 text-center items-center justify-center">Your Wishlist is empty</h1>
                    </>
                    )
                : (
                    <>
                        <h1 className="text-2xl mb-3 text-center items-center justify-center">Welcome to your wishlists <span className="font-bold text-3xl">{data[0]?.username}</span></h1>
                        <div className="flex flex-wrap mb-3">
                            {data[0]?.productWishlists?.map((product: any, index: number) => (
                                <CardProduct key={index} product={product} fetchWishlist={fetchWishlist}/>
                            ))}
                            <Footer />
                        </div>
                    </>
                )}
        </>
    );
}
