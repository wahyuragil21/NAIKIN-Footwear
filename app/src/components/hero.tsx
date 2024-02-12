export default function Hero({ name }: { name?: string }) {

    return (
        <div className="bg-white w-full h-96">
            <div className=" mt-2 text-center justify-center">
                <h1 className="text-2xl pt-32 text-center items-center justify-center text-black">Welcome to your wishlists <span className="font-bold text-3xl">{name}</span></h1>
                <p className="text-black">You don't have a wishlist yet, please feel free to browse all the products you like.</p>
            </div>
        </div>
    )
}
