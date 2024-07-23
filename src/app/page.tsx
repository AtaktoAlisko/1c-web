import Image from "next/image";
import Header from "../Components/Header";
import Head from "../Components/Head";
import Carousel from "../Components/Carousel";
import Info from "../Components/Info";
import Cards from "@/Components/Cards";
// import Results from "@/Components/results";
import Reviews from "@/Components/Reviews";
export default function Home() {
  return (
    <>
      {/* <Head /> */}
      <Header />
      <Carousel />
      <h2 className="text-center text-4xl mt-10 mb-10">ПОЧЕМУ ВЫБИРАЮТ НАС</h2>
      <Info />
      <Cards />
      {/* <Results /> */}
      <h2 className="text-center text-4xl mt-10 mb-10">ОТЗЫВЫ О НАС</h2>
      <Reviews />
    </>
  );
}
