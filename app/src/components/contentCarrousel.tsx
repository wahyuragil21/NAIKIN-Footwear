import { Product } from "@/app/types";
import Link from "next/link"


export default async function Carrousel({ product }: { product: Product[] }) {
    

    return (
        <div className="pt-10 pb-10">
            <div className="flex justify-between text-black">
                <h1 className="text-xl font-semibold">Lifestyle Shoes</h1>
                <Link href="/products" className="text-sm text-gray-500 mr-2 hover:text-black">View all ❯</Link>
            </div>
            <div className="carousel carousel-center w-full space-x-2 bg-white rounded-md">
                {product?.map((shoe, index) => {
                    return (
                        <div key={index} className="carousel-item flex-col bg-gray-100 rounded-md">
                            <img
                                src={shoe.thumbnail}
                                className="rounded-md w-96 h-96 object-cover"
                                alt="Carousel Item"
                            />
                            <div className="ml-2 mb-5">
                                <h1 className=" font-sans font-semibold text-black">{shoe.name}</h1>
                                <h1 className=" font-sans text-gray-400 text-justify overflow-hidden whitespace-nowrap overflow-ellipsis max-w-[300px]">{shoe.excerpt}</h1>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    );
}
