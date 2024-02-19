'use client'

import { Product } from "@/app/types";
import Link from "next/link";
import { useRouter, usePathname } from "next/navigation";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { BsBookmarkDashFill, BsFillBookmarkPlusFill } from "react-icons/bs";
import { useState } from "react";
import { useCookies } from 'next-client-cookies'; 
import Image from "next/image";

export default function CardProduct({ product, fetchWishlist }: { product: Product, fetchWishlist: () => void }) {
  const pathname = usePathname()
  const router = useRouter()
  const [isLiked, setIsLiked] = useState(false);
  const cookies = useCookies()



  const handleAdd = async (productId: string) => {

    const isLogin = cookies.get('Authorization')
    if (!isLogin) {
      toast.error('Please login first!', {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: true,
        closeOnClick: true,
        theme: "light",
      });
      router.push('/login')
    }

    const response = await fetch(process.env.NEXT_PUBLIC_BASE_URL + '/api/wishlist', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        productId
      })
    });

    if (response.ok) {
      setIsLiked(!isLiked)
    }
  };

  const handleDel = async (productId: string) => {
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
  }

  return (
    <>
      <div className="card bg-white px-1 w-1/4 relative overflow-hidden transform transition-transform duration-500 hover:shadow-lg flex flex-col mt-5">
        {pathname === '/wishlist' ? (
          <BsBookmarkDashFill
            className={`absolute bottom-20 right-0 m-2 w-6 h-6 cursor-pointer ${isLiked ? 'text-red-500' : 'text-black'}`}
            onClick={() => handleDel(product._id.toString())}
          />
        ) : (
          <BsFillBookmarkPlusFill
            className={`absolute bottom-20 right-0 m-2 w-6 h-6 cursor-pointer ${isLiked ? 'text-red-500' : 'text-black'}`}
            onClick={() => handleAdd(product._id.toString())}
          />
        )}
        <Link href={`/products/${product.slug}`}>
          <Image src={product.thumbnail as string} alt="Shoes" className="rounded-md" />
        </Link>
        <div className="flex-1 relative">
          <div className="mb-2 mt-3 ml-1 text-black">
            <h2 className="font-sans font-bold text-base antialiased leading-relaxed" style={{ overflow: 'hidden', whiteSpace: 'nowrap', textOverflow: 'ellipsis' }}>{product.name}</h2>
            <p className="text-sm text-gray-400" style={{ overflow: 'hidden', whiteSpace: 'nowrap', textOverflow: 'ellipsis' }}>{product.excerpt}</p>
            <p className="text-sm font-semibold">Rp. {product?.price?.toLocaleString()}</p>
          </div>
        </div>
      </div>
      <ToastContainer />
    </>

  )
}
