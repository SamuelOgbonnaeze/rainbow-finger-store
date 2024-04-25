import DiscoverPlug from "@/components/discover-plug";
import Experience from "@/components/experience";
import Hero from "@/components/hero";
import HomeProductDisplay from "@/components/home-product-display";

const HomePage =  () => {
  return (

    <div>
      <Hero />
      <div className="px-[30px] md:px-[50px] lg:px-[70px]">
        <Experience />
        <DiscoverPlug />
        <HomeProductDisplay />
      </div>

    </div>
  );
}


export default HomePage;