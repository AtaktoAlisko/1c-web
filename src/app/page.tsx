import Image from "next/image";
import Header from "../Components/Header";
import Head from "../Components/Head";
import MainCarousel from "../Components/MainCarousel";
export default function Home() {
  return (
    <>
      <Head />
      <Header />
      <MainCarousel />
    </>
  );
}
