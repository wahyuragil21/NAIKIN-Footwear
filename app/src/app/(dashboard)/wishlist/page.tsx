'use client'
import CardProduct from "@/components/cardProduct";
import Footer from "@/components/contentFoot";
import Hero from "@/components/hero";
import Skeleton from "@/components/skeleton";
import { UserWishlist } from "@/db/models/user";
import { useEffect, useState } from "react";

export default function Wishlist() {

    const [data, setData] = useState<UserWishlist[]>([])
    const fetchWishlist = async () => {
        const response = await fetch(process.env.NEXT_PUBLIC_BASE_URL + '/api/wishlist', { cache: 'no-store', })
        const { data } = await response.json()
        
        setData(data)
    }

    useEffect(() => {
        fetchWishlist()
    }, [])

    // console.log(data);
    
    return (
        <>
            {data[0]?.productWishlists.length == 0 ?
                (
                    <>
                        <div className="w-11/12 m-auto">
                            <Hero name={data[0]?.username} />
                        </div>
                        <Footer />
                    </>
                )
                : (
                    data.length == 0 ? (
                        <div className="flex flex-wrap mb-5 w-11/12 m-auto">
                            {Array.from({ length: 4 }).map((_, index) => (
                                <Skeleton key={index} />
                            ))}
                        </div>
                    ) : (
                        <>
                            <h1 className="text-2xl mb-3 text-center items-center justify-center text-black">Welcome to your wishlists <span className="font-bold text-3xl">{data[0]?.username}</span></h1>
                            <div className="flex flex-wrap mb-3 w-11/12 m-auto">
                                {data[0]?.productWishlists?.map((product: any, index: number) => (
                                    <CardProduct key={index} product={product} fetchWishlist={fetchWishlist} />
                                ))}
                            </div>
                            <Footer />
                        </>
                    )
                )}
        </>
    );
}
