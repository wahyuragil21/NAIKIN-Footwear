import banner from '../assets/Banner-shoes.jpg';
import Image from "next/image";

export default function BannerShoes() {

    return (
        <>
            <div className="w-full pb-10">
                <Image
                    src={banner}
                    alt="shoes"
                    className="w-full rounded-lg rounded-b-none"
                />
                <div className='flex flex-col justify-center items-center pt-5'>
                    <p className=' text-gray-500'>Nike Air Max</p>
                    <p className='text-4xl font-bold text-black'>FIND YOUR STYLE</p>
                    <p className='text-black'>Discover your style with Nike Air Max, delivering the perfect blend of style and comfort to complement your look</p>
                </div>
            </div>
        </>
    )
}