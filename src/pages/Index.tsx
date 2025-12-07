import Header from "@/components/sections/Header";
import Hero from "@/components/sections/Hero";
import Mission from "@/components/sections/Mission";
import Products from "@/components/sections/Products";
import Trust from "@/components/sections/Trust";
import Footer from "@/components/sections/Footer";

const Index = () => {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <Mission />
      <Products />
      <Trust />
      <Footer />
    </main>
  );
};

export default Index;
