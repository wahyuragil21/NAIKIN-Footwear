"use client"
import Image from "next/image"
import jordan from '../assets/jordan.png'
import nike from '../assets/nike.png'
import Link from "next/link"
export default function Navbar() {
    return (
        <>
            <div className="flex flex-row h-10 p-2 bg-gray-100 text-sm text-black" >
                <div className="flex-1">
                    <Link href="/"><Image src={jordan} alt="Jordan logo" width={20} height={20} /></Link>
                </div>
                <ul className="flex flex-wrap gap-5 px-1 font-semibold">
                    <li className="hover:text-red-500"><a>Help</a></li>
                    <li className="hover:text-red-500"><a>About Us</a></li>
                    <li className="hover:text-red-500"><Link href="/login">Sign In</Link></li>
                </ul>
            </div>

            {/* NAVBAR KEDUA */}
            <div className="navbar bg-white text-black sticky top-0 z-50">
                <div className="navbar-start flex items-center">
                    <Link href="/">
                        <h1 className="text-2xl font-bold mr-2">NAIKIN</h1>
                    </Link>
                    <Image src={nike} alt="Jordan logo" width={50} height={50} />
                </div>
                <div className="navbar-center lg:flex justify-center text-sm">
                    <ul className="flex flex-wrap gap-5 px-1 font-bold">
                        <li className="hover:text-red-500"><Link href="/products">All Product</Link></li>
                        <li className="hover:text-red-500"> <Link href="/new">New & Featured</Link></li>
                        <li className="hover:text-red-500"> <Link href="/men">Men</Link></li>
                        <li className="hover:text-red-500"> <Link href="/women">Women</Link></li>
                        <li className="hover:text-red-500"> <Link href="/kids">Kids</Link></li>
                    </ul>
                </div>
                <div className="navbar-end">
                    <button className="btn btn-ghost btn-circle">
                        <div className="indicator">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
                            {/* <span className="badge badge-sm indicator-item">8</span> */}
                        </div>
                    </button>
                </div>
            </div>

            {/* NAVBAR KETIGA */}
            <div className="navbar-center bg-gray-100 p-3" >
                <div className="navbar-center hidden lg:flex flex-col items-center justify-center text-md text-black">
                    <h1 >👟 Selamat Datang di <span className="font-bold text-xl">Naikin Footwear</span>- Langkah Lebih Baik dalam Gaya dan Kenyamanan! 👟</h1>
                </div>
            </div>

            {/* NAVBAR KEEMPAT */}
            <div className="navbar-center bg-white p-5" >
                <div className="navbar-center hidden lg:flex flex-col items-center justify-center ">
                    <Image src={jordan} alt="Jordan logo" width={70} height={70} />
                </div>
            </div>
        </>
    )
}