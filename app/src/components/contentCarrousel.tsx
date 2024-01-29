import { Product } from "@/app/types"
import Link from "next/link"
async function getProduct(): Promise<Product[]> {
    const response = await fetch(process.env.NEXT_PUBLIC_BASE_URL + '/api/products/product', { cache: 'no-store' })
    const { data } = await response.json()
    return data
    
}


export default async function Carrousel() {

const data = await getProduct()

    return (
        <div className="pt-10 pb-10">
            <div className="flex justify-between">
                <h1 className="text-xl font-bold">LIST PRODUCT</h1>
                <Link href="/products" className="text-sm text-gray-500 mr-2 hover:text-black">View all ❯</Link>
            </div>
            <div className="carousel carousel-center w-full space-x-4 bg-base-100 rounded-md">
                {data.map((shoe, index) => {
                    return (
                        <div key={index} className="carousel-item flex-col bg-gray-100 rounded-md">
                            <img
                                src={shoe.thumbnail}
                                className="rounded-md w-96 h-96 object-cover"
                                alt="Carousel Item"
                            />
                            <div className="ml-2 mb-5">
                            <h1 className=" font-sans font-semibold">{shoe.name}</h1>
                            <h1 className=" font-sans text-gray-400 text-justify overflow-hidden whitespace-nowrap overflow-ellipsis max-w-[300px]">{shoe.excerpt}</h1>
                            {/* <h1 className=" font-sans ">Rp. 999,999,999</h1> */}
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    );
}
