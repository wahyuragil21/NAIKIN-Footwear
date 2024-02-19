'use client'
import { Product } from "@/app/types";
import CardProduct from "@/components/cardProduct";
import Footer from "@/components/contentFoot";
import Skeleton from "@/components/skeleton";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function ProductPage() {
    const params = useSearchParams()
    const [products, setProducts] = useState<Product[]>([])
    const [search, setSearch] = useState(params.get('search'))
    const fetchWishlist = async () => {
        try {
            if (!search) {
                const response = await fetch(process.env.NEXT_PUBLIC_BASE_URL + '/api/products/product', { cache: 'no-store' })
                const { data } = await response.json()

                if (!response.ok) {
                    throw new Error()
                }

                setProducts(data)

            } else {
                const response = await fetch(process.env.NEXT_PUBLIC_BASE_URL + '/api/products/product?search=' + search, { cache: 'no-store' })
                const { data } = await response.json()
                if (!response.ok) {
                    throw new Error()
                }

                setProducts(data)
            }

        } catch (error) {
            console.log(error, "ini error");

        }
    }

    

    useEffect(() => {
        fetchWishlist()
    }, [search])
    
    return (
        <>
            <div className="flex flex-wrap mb-5 w-11/12 m-auto">
                {products.length == 0 ?
                    (
                        Array.from({ length: 8 }).map((_, index) => (
                            <Skeleton key={index} />
                        ))
                    )
                    : (
                        products.map((product, index) => (
                            <CardProduct key={index} product={product} fetchWishlist={fetchWishlist} />
                        ))
                    )}
            </div>
            <Footer />
        </>
    )
}