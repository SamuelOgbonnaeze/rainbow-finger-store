import DiscoverPlug from "@/components/discover-plug";
import Experience from "@/components/experience";
import Hero from "@/components/hero";

const HomePage =  () => {
  return (

    <div>
      <Hero />
      <div className="px-[30px] md:px-[50px] lg:px-[70px]">
        <Experience />
        <DiscoverPlug />
      </div>

    </div>
  );
}


export default HomePage;