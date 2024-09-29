import prismadb from "@/lib/prismadb";
import LessonCategories from "./_components/categories";
import { SearchInput } from "@/components/search-input";

const LessonLibrary = async () => {

    const categories = await prismadb.courseCategory.findMany({
        orderBy: {
            name: 'asc',
        }
    })

    return (
        <>
            <div className=" w-full mx-auto opacity-500">
                <div className="bg-[url('/images/storehero.png')] bg-cover bg-no-repeat bg-center text-center items-center w-full h-[600px] ">
                </div>
            </div>

            <div className="p-4 bg-white -mt-[40px] rounded-full ">
                <LessonCategories
                    items={categories}
                />
            </div>

            <div className="px-6 pt-3 lg:hidden lg:mb-0 block">
                <SearchInput />
            </div>
        </>
    );
}

export default LessonLibrary;