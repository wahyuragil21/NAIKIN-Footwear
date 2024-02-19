import Carrousel from "../components/contentCarrousel";
import Navbar from "../components/navbar";
import Footer from "../components/contentFoot"
import BannerShoes from "@/components/bannerSale";
import { Product } from "@/app/types"


async function getProduct(): Promise<Product[]> {
  const response = await fetch(process.env.NEXT_PUBLIC_BASE_URL + '/api/products/product/?_limit=6', { cache: 'no-store' })
  const { data } = await response.json()
  return data
}
export default async function Home() {
  const data = await getProduct()

  return (
    <>
      <Navbar />
      <div className="w-11/12 m-auto">
        <BannerShoes />
        <Carrousel product={data} />
      </div>
      <Footer />
    </>
  )
}