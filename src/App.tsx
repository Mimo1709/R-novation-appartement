import { Routes, Route, useNavigate, Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Stats from "./components/Stats";
import AnimatedSection from "./components/AnimatedSection";
import ProcessAndService from "./components/ProcessAndServices";
import Realisations from "./components/Realisations";
import Testimonials from "./components/Testimonials";
import FAQ from "./components/FAQ";
import Footer from "./components/Footer";
import DevisPage from "./components/DevisPage";
import ServicesCircular from "./components/ServicesCircular";

function MainLayout() {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col">
      <Navbar />
      <div className="flex-1">
        <Outlet /> {/* ici on rendra HomePage ou DevisPage */}
      </div>
      <Footer />
    </div>
  );
}

function HomePage() {
  const navigate = useNavigate();

  return (
    <>
      <Hero onDevisClick={() => navigate("/devis")} />
      <Stats />
      <AnimatedSection delay={200}>
        <ProcessAndService />
        <ServicesCircular />
      </AnimatedSection>
      <AnimatedSection delay={300}>
        <Realisations />
      </AnimatedSection>
      <AnimatedSection delay={400}>
        <section className="bg-black py-16">
          <div className="container mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
            <Testimonials />
            <FAQ />
          </div>
        </section>
      </AnimatedSection>
    </>
  );
}

export default function App() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/devis" element={<DevisPage />} />
      </Route>
    </Routes>
  );
}
