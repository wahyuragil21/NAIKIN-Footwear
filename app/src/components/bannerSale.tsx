export default function BannerSale() {

    const product = [
        "https://i.pinimg.com/564x/bc/1e/e8/bc1ee8843cfa2356961f83840842113e.jpg",
        "https://i.pinimg.com/564x/b4/fa/cf/b4facf048ba40e05fd912e60426afb59.jpg",
        "https://i.pinimg.com/564x/96/17/e7/9617e75e2cc47a936ea7b4df6be1944b.jpg",
        "https://i.pinimg.com/564x/56/57/04/565704f81c52ca78dfebbf00c4c2ed82.jpg",
        "https://i.pinimg.com/564x/f2/ab/e5/f2abe5d9d2c659c5fcd0bfb89c010551.jpg",
        "https://i.pinimg.com/564x/0b/00/f2/0b00f28ec4b07be59469a9c5432537ad.jpg"


    ]
    
    return (
        <div>
            <div className="carousel w-full h-[580px] rounded-lg pb-10">
                {product.map((product, index) => {
                    return (
                        <div key={index} className="carousel-item relative w-full">
                            <img src={product} className="w-full" />
                            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                                <a href="#slide4" className="btn btn-circle">❮</a>
                                <a href="#slide2" className="btn btn-circle">❯</a>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}