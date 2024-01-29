import Image from "next/image";
import hero from '../assets/landing-Page.jpg';

export default function Hero() {

    const shoes = [
        "https://i.pinimg.com/564x/09/c7/a8/09c7a84289d7c02e0275f5bd221463db.jpg",
        "https://i.pinimg.com/736x/e9/de/f6/e9def6e9bbc2bb09e4edc68cb57bc4cc.jpg",
        "https://i.pinimg.com/736x/f1/03/31/f10331314cc33594750dcdc72461a7e5.jpg",
        "https://i.pinimg.com/564x/f9/8e/b9/f98eb9ae9df35f9ea2032bae424baa15.jpg",
        "https://i.pinimg.com/564x/3e/0f/93/3e0f931c1c545db8d1c99c2f4303c52f.jpg",
    ]

    return (
        <div className="container flex gap-2 bg-gray-100">

            <div className="carousel rounded-lg w-full h-[450px]">
                {shoes.map((shoe, index) => {
                    return (
                        <div key={index} className="carousel-item relative w-1/2">
                            <img alt="shoes" src={shoe} className="w-full bg-black bg-opacity-90" />
                        </div>
                    )
                })}

            </div>

            <div className="w-full">
                <div className="md:flex-shrink-0">
                    <Image
                        src={hero}
                        alt="shoes"
                        className="w-full rounded-lg rounded-b-none"
                    />
                </div>
                <div className="px-4 py-2 mt-2 text-center justify-center">
                    <h2 className="font-bold text-2xl">
                        ZION 3 GEN ZION
                    </h2>
                    <p className="text-sm text-gray-700 px-2 text-justify mb-3">
                       Take the flight to the future with Gen Zion. Designed for ballers of all ages, this edition od the Zion 3
                       brings the classic black and white combo up to speed with ultramodern pops of colour and court ready
                       tech built for bounce and control.
                    </p>
                    <button className="btn btn-md bg-black rounded-full text-white hover:bg-gray-700 transition duration-300 ease-in-out">Shop Now</button>
                </div>
            </div>

        </div>


    );
}
