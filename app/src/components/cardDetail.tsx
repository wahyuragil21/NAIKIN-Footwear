
import { Product } from "@/app/types"
import ComponentDetailCard from "./componentDetailCard";
import { Favourite } from "./componentAddWishlist";

export default async function DetailCard({ product }: { product: Product }) {
    
    return (
        <div className="bg-white py-8">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row -mx-4">
                    <ComponentDetailCard product={product}/>
                    <div className="md:flex-1 px-4 flex flex-col justify-between relative">
                        <div>
                            <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-2">
                                {product.name}
                            </h2>
                            <div className="flex mb-4">
                                <div className="mr-4">
                                    <span className="font-bold text-gray-700 dark:text-gray-300 mr-2">
                                        Price: 
                                    </span>
                                     <span className="text-gray-600 dark:text-gray-300">
                                        Rp. {product.price.toString()}
                                    </span>
                                </div>
                            </div>
                            <div>
                                <span className="font-bold text-gray-700 dark:text-gray-300">
                                    Product Description:
                                </span>
                                <p className="text-gray-600 dark:text-gray-300 text-sm mt-2 text-justify">
                                    {product.description}
                                </p>
                                <div className="absolute bottom-0 left-0 w-full p-4">
                                <div className="flex -mx-2 mb-2">
                                    <div className="w-1/2 px-2">
                                        <button  className="w-full bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-white py-2 px-4 rounded-full font-bold hover:bg-gray-300 dark:hover:bg-gray-600" >
                                            Add to Cart
                                        </button>
                                    </div>
                                    <div className="w-1/2 px-2">
                                        <Favourite product={product._id.toString()}/>
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

