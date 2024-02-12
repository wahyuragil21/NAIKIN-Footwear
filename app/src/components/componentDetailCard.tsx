'use client'
import { useState } from "react";
import { Product } from "@/app/types";

export default function ComponentDetailCard({ product }: { product: Product }){
    const [currentImage, setCurrentImage] = useState(product.images[0]);
    const handleImageClick = (image: string) => {
        setCurrentImage(image);
    };

    return (
        <div className="md:flex px-4">
        <div className="flex-mx-2">
            {product.images.map((image, index) => (
                <div key={index} className=" px-2">
                    <img
                        className={`w-15 h-20 rounded-md object-cover cursor-pointer border-2 ${currentImage === image
                            ? "border-gray-300 dark:border-gray-600"
                            : "border-transparent"
                            }`}
                        src={image}
                        alt={`Product Image ${index + 1}`}
                        onClick={() => handleImageClick(image)}
                    />
                </div>
            ))}
        </div>
        <div className="h-[480px] w-96 rounded-lg  dark:border-gray-600 bg-gray-300 dark:bg-gray-700 mb-4">
            <img
                className="w-full h-full rounded-md object-cover cursor-pointer"
                src={currentImage}
                alt="Product Image"
                onClick={() => handleImageClick(product.images[0])}
            />
        </div>
    </div>
    )
}