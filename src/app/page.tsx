import Image from "next/image";
import Header from "../Components/Header";
import Head from "../Components/Head";
import Carousel from "../Components/Carousel";
import Info from "../Components/Info";
export default function Home() {
  return (
    <>
      <Head />
      <Header />
      <Carousel />
      <Info />
    </>
  );
}
