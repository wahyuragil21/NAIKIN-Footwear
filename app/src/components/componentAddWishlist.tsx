'use client'

// import { cookies } from 'next/headers';
// import { redirect, usePathname } from 'next/navigation';
import { usePathname } from 'next/navigation';


export function Favourite({ product, fetchWishlist }: { product: string, fetchWishlist: () => void }) {
  const pathname = usePathname()
  const productId = product;

  const handleAdd = async () => {
 
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

  const handleDel = async () => {
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
    <>
      {pathname === '/wishlist' ? (
        <button
          type="submit"
          onClick={handleDel}
          className="w-full bg-gray-900 dark:bg-gray-600 text-white py-2 px-4 rounded-full font-bold hover:bg-gray-800 dark:hover:bg-gray-700"
        >
          Remove
        </button>
      ) : (
        <button
          type="submit"
          onClick={handleAdd}
          className="w-full bg-gray-900 dark:bg-gray-600 text-white py-2 px-4 rounded-full font-bold hover:bg-gray-800 dark:hover:bg-gray-700"
        >
          Favourite
        </button>
      )}
    </>
  );
}
