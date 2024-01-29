"use client"

import Image from "next/image"
import jordan from '../assets/jordan.png'
import nike from '../assets/nike.png'
import Link from "next/link"
import { usePathname, useSearchParams } from 'next/navigation'
import { LogoutButton } from "./componentLogout"
export default function NavbarProduct({ 
    isLogin,
    placeholder }: {
    isLogin?: string,
    placeholder?: string}) {


    const pathname = usePathname()
    const searchParams = useSearchParams()
    const search = searchParams.get('search')
    // console.log(search);
    


    const handleSearch = (term: string) => {
        console.log("term", term);
        
    }

    return (
        <>
            <div className="navbar bg-gray-100" >
                <div className="flex-1">
                    <Link href="/"><Image src={jordan} alt="Jordan logo" width={20} height={20} /></Link>

                </div>
                <div className="flex-none">
                    <ul className="menu menu-horizontal px-1 font-semibold">
                        <li><a>Help</a></li>
                        <li><a>About Us</a></li>
                        {isLogin ? <li><LogoutButton /></li> : <li><Link href="/login">Sign In</Link></li>}
                    </ul>
                </div>
            </div>

            {/* NAVBAR KEDUA */}
            <div className="navbar bg-base-100 sticky top-0 z-50">
                <div className="navbar-start flex items-center">
                    <Link href="/">
                        <h1 className="text-2xl font-bold mr-2">NAIKIN</h1>
                    </Link>
                    <Image src={nike} alt="Jordan logo" width={50} height={50} />
                </div>
                <div className="navbar-center hidden lg:flex justify-center text-sm">
                    {isLogin ? (
                        <ul className="menu menu-horizontal px-1 font-bold">
                            <li><Link className={`link ${pathname === '/products' ? 'active' : ''} no-underline`} href="/products">All Product</Link></li>
                            <li><Link className={`link ${pathname === '/wishlist' ? 'active' : ''} no-underline`} href="/wishlist">My Wishlist</Link></li>
                            <li>
                                <details>
                                    <summary>New & Featured</summary>
                                    <ul className="p-2">
                                        <li>Submenu 1</li>
                                        <li>Submenu 2</li>
                                    </ul>
                                </details>
                            </li>
                            <li>
                                <details>
                                    <summary>Men</summary>
                                    <ul className="p-2">
                                        <li><a>Submenu 1</a></li>
                                        <li><a>Submenu 2</a></li>
                                    </ul>
                                </details>
                            </li>
                            <li>
                                <details>
                                    <summary>Women</summary>
                                    <ul className="p-2">
                                        <li><a>Submenu 1</a></li>
                                        <li><a>Submenu 2</a></li>
                                    </ul>
                                </details>
                            </li>
                            <li>
                                <details>
                                    <summary>Kids</summary>
                                    <ul className="p-2">
                                        <li><a>Submenu 1</a></li>
                                        <li><a>Submenu 2</a></li>
                                    </ul>
                                </details>
                            </li>
                        </ul>
                    ) : (
                        <ul className="menu menu-horizontal px-1 font-bold">
                            <li><Link className={`link ${pathname === '/products' ? 'active' : ''} no-underline`} href="/products">All Product</Link></li>
                            <li>
                                <details>
                                    <summary>New & Featured</summary>
                                    <ul className="p-2">
                                        <li>Submenu 1</li>
                                        <li>Submenu 2</li>
                                    </ul>
                                </details>
                            </li>
                            <li>
                                <details>
                                    <summary>Men</summary>
                                    <ul className="p-2">
                                        <li><a>Submenu 1</a></li>
                                        <li><a>Submenu 2</a></li>
                                    </ul>
                                </details>
                            </li>
                            <li>
                                <details>
                                    <summary>Women</summary>
                                    <ul className="p-2">
                                        <li><a>Submenu 1</a></li>
                                        <li><a>Submenu 2</a></li>
                                    </ul>
                                </details>
                            </li>
                            <li>
                                <details>
                                    <summary>Kids</summary>
                                    <ul className="p-2">
                                        <li><a>Submenu 1</a></li>
                                        <li><a>Submenu 2</a></li>
                                    </ul>
                                </details>
                            </li>
                        </ul>
                    )}

                </div>
                <div className="navbar-end">
                    <div className="pt-2 relative mx-auto text-gray-600">
                        <form>
                        <input
                            className="border-2 border-gray-300 bg-white h-10 px-5 pr-16 rounded-lg text-sm focus:outline-none"
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
                            <span className="badge badge-sm indicator-item">8</span>
                        </div>
                    </button>
                </div>
            </div>
        </>
    )
}