"use client"
import Image from "next/image"
import jordan from '../assets/jordan.png'
import nike from '../assets/nike.png'
import Link from "next/link"
import { usePathname } from 'next/navigation'
import { LogoutButton } from "./componentLogout"
export default function NavbarProduct({
    isLogin,
    placeholder }: {
        isLogin?: string,
        placeholder?: string
    }) {
    const pathname = usePathname()
    return (
        <>
            <div className="flex flex-row h-10 p-2 bg-gray-100 text-sm text-black" >
                <div className="flex-1">
                    <Link href="/"><Image src={jordan} alt="Jordan logo" width={20} height={20} /></Link>
                </div>
                <ul className="flex flex-wrap gap-5 px-1 font-semibold">
                    <li className="hover:text-red-500"><a>Help</a></li>
                    <li className="hover:text-red-500"><a>About Us</a></li>
                    {isLogin ? <LogoutButton /> : <li className="hover:text-red-500"><Link href="/login">Sign In</Link></li>}
                </ul>
            </div>

            {/* NAVBAR KEDUA */}
            <div className="navbar bg-white sticky top-0 z-50">
                <div className="navbar-start flex items-center">
                    <Link href="/">
                        <h1 className="text-2xl font-bold mr-2 text-black">NAIKIN</h1>
                    </Link>
                    <Image src={nike} alt="Jordan logo" width={50} height={50} />
                </div>
                <div className="navbar-center hidden lg:flex justify-center text-sm">
                    {isLogin ? (
                        <ul className="flex flex-wrap gap-5 px-1 font-bold text-black">
                            <li><Link className={`link ${pathname === '/products' ? 'text-red-500' : ''} no-underline hover:text-red-500`} href="/products">All Product</Link></li>
                            <li><Link className={`link ${pathname === '/wishlist' ? 'text-red-500' : ''} no-underline hover:text-red-500`} href="/wishlist">My Wishlist</Link></li>
                            <li><Link className={`link ${pathname === '/new' ? 'text-red-500' : ''} no-underline hover:text-red-500`} href="/new">New & Featured</Link></li>
                            <li><Link className={`link ${pathname === '/men' ? 'text-red-500' : ''}no-underline hover:text-red-500`} href="/men">Men</Link></li>
                            <li><Link className={`link ${pathname === '/women' ? 'text-red-500' : ''}no-underline hover:text-red-500`} href="/women">Women</Link></li>
                            <li><Link className={`link ${pathname === '/kids' ? 'text-red-500' : ''}no-underline hover:text-red-500`} href="/kids">Kids</Link></li>
                        </ul>
                    ) : (
                        <ul className="flex flex-wrap gap-5 px-1 font-bold text-black">
                            <li><Link className={`link ${pathname === '/products' ? 'text-red-500' : ''} no-underline hover:text-red-500`} href="/products">All Product</Link></li>
                            <li><Link className={`link ${pathname === '/new' ? 'text-red-500' : ''}  no-underline hover:text-red-500`} href="/new">New & Featured</Link></li>
                            <li><Link className={`link ${pathname === '/men' ? 'text-red-500' : ''}  no-underline hover:text-red-500`} href="/men">Men</Link></li>
                            <li><Link className={`link ${pathname === '/women' ? 'text-red-500' : ''} no-underline hover:text-red-500`} href="/women">Women</Link></li>
                            <li><Link className={`link ${pathname === '/kids' ? 'text-red-500' : ''} no-underline hover:text-red-500`} href="/kids">Kids</Link></li>
                        </ul>
                    )}
                </div>
                <div className="navbar-end text-black">
                    <div className="pt-2 relative mx-auto">
                        <form>
                            <input
                                className="border border-black bg-white h-10 px-5 pr-16 rounded-lg text-sm focus:border-none"
                                type="search"
                                name="search"
                                placeholder="Search"
                            />
                            <button type="button" >

                            </button>
                        </form>
                    </div>
                    <button className="btn btn-ghost btn-circle">
                        <div className="indicator">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
                        </div>
                    </button>
                </div>
            </div>
        </>
    )
}