import Carrousel from "../components/contentCarrousel";
import Hero from "../components/hero";
import Navbar from "../components/navbar";
import Footer from "../components/contentFoot"
import BannerSale from "@/components/bannerSale";
import About from "@/components/about";
export default function Home() {
  return (
    <div>
      <Navbar />
      <BannerSale />
      <Hero />
      <Carrousel />
      <About/>
      <Footer />
    </div>
  )
}