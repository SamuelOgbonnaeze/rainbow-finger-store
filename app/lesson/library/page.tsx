import prismadb from "@/lib/prismadb";
import LessonCategories from "./_components/categories";

const LessonLibrary = async () => {

    const categories= await prismadb.courseCategory.findMany({
        orderBy:{
            name: 'asc',
        }
    }) 

    return ( 
        <> 
         <div className=" w-full mx-auto opacity-500">
                <div className="bg-[url('/images/storehero.png')] bg-cover bg-no-repeat bg-center text-center items-center w-full h-[800px] ">
                </div>
            </div>

            <LessonCategories
            items={categories}
             />
        </>
     );
}
 
export default LessonLibrary;