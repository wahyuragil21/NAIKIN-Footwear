'use client'
import { useRouter, usePathname } from 'next/navigation';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export function Favourite({ product, isLogin }: { product: string, isLogin? : string }) {
  const pathname = usePathname()
  const router = useRouter()
  const productId = product;

  const handleAdd = async () => {
    try {
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
        toast.success('Successfully added to wishlist!', {
          position: "top-center",
          autoClose: 5000,
          closeOnClick: true,
          theme: "light",
        });
      }
    } catch (error) {
      console.error('Error occurred:', error);
    }
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
        toast.error('Successfully removed from wishlist!', {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
      }
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
          className="w-full dark:bg-black text-white py-2 px-4 rounded-full font-bold"
        >
          Favourite
        </button>
      )}
      <ToastContainer />
    </>
  );
}
