import getCategories from "@/actions/get-category";
import Discover from "@/components/discover";


export default async function Home () {
  const categories = await getCategories()
  return (

    <div>
      <Discover data={categories} />

    </div>
  );
}
