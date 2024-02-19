import { Product } from "@/app/types";
import DetailCard from "@/components/cardDetail";
import Footer from "@/components/contentFoot";

async function getProduct({ params }: { params: { slug: string } } ):Promise<Product>{
    const slug = params.slug
    const response = await fetch(process.env.NEXT_PUBLIC_BASE_URL + `/api/products/${slug}`, { cache: 'no-store' })
    const {data} = await response.json()
    return data
}
export default async function DetailProduct({ params }: { params: { slug: string } } ) {
    const product =  await getProduct({ params })
    return (
        <>
           <DetailCard product={product} />
           <Footer/>
        </>
    )
}