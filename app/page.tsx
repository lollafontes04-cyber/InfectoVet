import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

import Hero from "@/components/home/Hero";
import Categories from "@/components/home/Categories";
import Introduction from "@/components/home/Introduction";


export default function Home() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />

        <Categories />

        <Introduction />
      </main>

      <Footer />
    </>
  );
}