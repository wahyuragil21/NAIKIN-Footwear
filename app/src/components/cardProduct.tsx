'use client'

import { Product } from "@/app/types";
import Link from "next/link";
import { Favourite } from "./componentAddWishlist";
import { usePathname } from "next/navigation";

export default function CardProduct({ product, fetchWishlist }: { product: Product, fetchWishlist: () => void }) {
  const pathname = usePathname()

  
  const handleAdd = async (productId: string) => {
 
    const response = await fetch(process.env.NEXT_PUBLIC_BASE_URL + '/api/wishlist', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          productId
        })
      });
  };

  const handleDel = async (productId: string) => {
    try {
     const response = await fetch(process.env.NEXT_PUBLIC_BASE_URL + '/api/wishlist', {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          productId
        })

      });
      if (response.ok) {
        fetchWishlist()
      }


      //teos

    } catch (error) {
      console.error('Error occurred:', error);
    } 
  }

    return (
        <div className="card bg-base-100 w-[370px] h-[500px] m-2 relative overflow-hidden transform transition-transform duration-300 hover:scale-105 hover:shadow-lg flex flex-col mt-5 mb-5">
            <Link href={`/products/${product.slug}`}>
                <img src={product.thumbnail as string} alt="Shoes" className="rounded-md" />
            </Link>
            <div className="flex-1 relative">
                <div className="mb-2 mt-3 ml-1">
                    <h2 className="font-bold">{product.name}</h2>
                    <p className="text-sm text-gray-400">{product.excerpt}</p>
                </div>
                <div className="absolute bottom-0 right-0 mb-2 mr-2">
                    {/* <Favourite product={product._id.toString()} fetchWishlist={fetchWishlist} /> */}

                    {pathname === '/wishlist' ? (
                        <button
                            type="submit"
                            onClick={() =>handleDel(product._id.toString())}
                            className="w-full bg-gray-900 dark:bg-gray-600 text-white py-2 px-4 rounded-full font-bold hover:bg-gray-800 dark:hover:bg-gray-700"
                        >
                            Remove
                        </button>
                    ) : (
                        <button
                            type="submit"
                            onClick={() =>handleAdd(product._id.toString())}
                            className="w-full bg-gray-900 dark:bg-gray-600 text-white py-2 px-4 rounded-full font-bold hover:bg-gray-800 dark:hover:bg-gray-700"
                        >
                            Favourite
                        </button>
                    )}
                </div>
            </div>
        </div>
    )
}
