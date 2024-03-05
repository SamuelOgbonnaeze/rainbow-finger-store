import getCategories from "@/actions/get-category";
import Discover from "@/components/discover";
import Experience from "@/components/experience";
import Hero from "@/components/hero";


export const revalidate = 0

export default async function Home() {
  const categories = await getCategories();

  return (

    <div>
      <Hero />
      <div className="px-[30px] md:px-[50px] lg:px-[70px]">
        <Experience />
        <Discover data={categories} />
      </div>

    </div>
  );
}
