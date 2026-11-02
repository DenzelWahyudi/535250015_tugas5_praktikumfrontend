import AppNavbar from "@/components/navbar";
import HeroSection from "@/components/herosection";
import MenuSection from "@/components/menusection";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <div className="d-flex flex-column min-vh-100 bg-white">
      <AppNavbar />
      <main className="flex-grow-1">
        <HeroSection />
        <MenuSection />
      </main>
      <Footer />
    </div>
  );
}
