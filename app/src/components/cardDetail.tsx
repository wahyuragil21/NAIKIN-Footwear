import { Product } from "@/app/types"
import ComponentDetailCard from "./componentDetailCard";
import { Favourite } from "./componentAddWishlist";
import { getCookies } from 'next-client-cookies/server';

export default async function DetailCard({ product }: { product: Product }) {
    const cookies = getCookies()
    const isLogin = cookies.get('Authorization')


    return (
        <div className="bg-white py-8">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row -mx-4">
                    <ComponentDetailCard product={product} />
                    <div className="md:flex-1 px-4 flex flex-col justify-between relative text-black">
                        <div>
                            <h2 className="text-2xl font-bold text-black mb-2">
                                {product.name}
                            </h2>
                            <div className="flex mb-4">
                                <div className="mr-4">
                                    <span className="font-bold mr-2">
                                        Price:
                                    </span>
                                    <span>
                                        Rp. {product.price.toLocaleString()}
                                    </span>
                                </div>
                            </div>
                            <div>
                                <span className="font-bold">
                                    Product Description:
                                </span>
                                <p className="text-sm mt-2 text-justify">
                                    {product.description}
                                </p>
                                <div className="absolute bottom-0 left-0 w-full p-4">
                                    <div className="flex -mx-2 mb-2">
                                        <div className="w-1/2 px-2">
                                            <button className="w-full dark:bg-black text-white py-2 px-4 rounded-full font-bold" >
                                                Add to Cart
                                            </button>
                                        </div>
                                        <div className="w-1/2 px-2">
                                            <Favourite product={product._id.toString()} isLogin={isLogin} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

