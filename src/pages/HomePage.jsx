import HeroSection from "/src/component/home/HeroSection.jsx";
import ProductSection from "/src/component/home/ProductSection.jsx";
import OfferSection from "/src/component/home/OfferSection.jsx";

import { useContext } from "react";
import { DataContext } from "../DataContext";
import CompanyServices from "../component/home/COmpanyServices";

function HomePage() {
  const { allItems } = useContext(DataContext);
  return (
    <div className="bg-black text-white min-h-screen h-full w-full  ubuntu-light">
      <HeroSection />
      <ProductSection allItems={allItems} />
      <OfferSection />
      <CompanyServices />
    </div>
  );
}

export default HomePage;
