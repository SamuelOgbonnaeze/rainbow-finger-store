import { getCourses } from "@/actions/get-courses";
import CoursesList from "@/components/courses-list";
import Button from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import prismadb from "@/lib/prismadb";
import { SignedOut, SignInButton } from "@clerk/nextjs";
import { auth, currentUser } from "@clerk/nextjs/server";
import Image from "next/image";
import Link from "next/link";

const LessonBanner = async () => {
    const { userId } = auth();

    const user = await currentUser()

    const allCourses = await prismadb.course.findMany({
        where: {
            isPublished: true
        }

    })

    const randomCourses = allCourses.sort(() => 0.5 - Math.random()).slice(0, 4);

    const courses = await getCourses({
        userId: userId || ""
    })

    return (
        <div className="justify-center font-nunito text-[#050304]">
            {/* Heading */}
            <div className="mt-10 w-full mx-auto opacity-500">
                <div className="bg-[url('/images/musical-note.png')] bg-cover bg-no-repeat bg-center text-center items-center">
                    <div className="py-2 w-[80%] mx-auto text-3xl md:text-5xl lg:text-6xl leading-10 md:leading-[57px] lg:leading-[77px] text-center">
                        <p className="font-light">
                            Become a <span className="font-medium text-[#009B00]">Guitar Virtuoso</span>
                        </p>
                    </div>
                </div>
            </div>

            {/* Paragraph Text */}
            <div className="w-[90%] h-[57px] mx-auto mt-10 text-center">
                <p className="leading-[20.5px] md:leading-[30.5px] text-[15px] md:text-[20px] font-normal">
                    Learn from the best with our online guitar courses, designed to help you master the instrument and
                    take your playing to the next level.
                </p>
            </div>

            {/* If User is Not Signed In */}
            {!userId && (
                <div className=" my-4">
                    <div className="relative bg-[url('/images/Virtuoso_guitar.png')] bg-cover bg-no-repeat bg-center items-center h-[480px] w-full rounded-md">
                        {/* Overlay */}
                        <div className="absolute inset-0 bg-black opacity-50 rounded-md"></div>
                        <div className="w-full h-full flex flex-col items-center justify-center ">
                            <div className="text-white flex flex-col pl-[84px] relative z-10">
                                <h2 className="font-nunito font-normal text-[64px] leading-[77px] p-3">Explore our courses</h2>
                            </div>
                            <div className="text-white pr-6 text-right relative z-10">
                                <Button>
                                    <SignedOut>
                                        <div className="flex items-center gap-x-1">
                                            <SignInButton>
                                                <button>Sign in to access our library</button>
                                            </SignInButton>
                                        </div>
                                    </SignedOut>
                                </Button>
                            </div>
                        </div>



                    </div>

                    <div className="w-full">
                        <p className="font-nunito font-semibold text-lg md:text-xl leading-normal md:leading-normal p-3">Suggested Course</p>
                        {randomCourses.length > 0 && (
                            <div className="mt-6 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                                {allCourses.map((course) => (
                                    <div className="" key={course.id}>
                                        <Link href={`/courses/${course.id}`}>
                                            <div className="p-4 h-full border rounded-md shadow-md hover:scale-105 transition ">
                                                <Image
                                                    src={course.imageUrl || '/images/default-course.png'}
                                                    alt={course.title}
                                                    width={300}
                                                    height={200}
                                                    className="rounded-md"
                                                />
                                                <h3 className="mt-4 text-xl font-semibold">{course.title}</h3>
                                                <p className="mt-2">{course.description || 'No description available'}</p>
                                            </div>
                                        </Link>
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>
                </div>
            )}


            {/* If User is Signed In */}
            {userId && (
                <div className="mt-10">
                    <div className="bg-[url('/images/Virtuoso_guitar.png')] bg-cover bg-no-repeat bg-center items-center h-[480px] md:h-[300px] w-full rounded-md relative">
                        <div className="absolute inset-0 bg-black opacity-50  rounded-md"></div>
                        <div className="absolute inset-0 text-white flex items-center flex-col pt-[180px] md:pt-20 justify-start">
                            <div className="text-center px-6 md:px-0">
                                <h2 className="font-nunito font-normal text-4xl md:text-5xl leading-tight md:leading-tight p-3">
                                    Welcome back, {user!.firstName}
                                </h2>

                            </div>
                            <div className="text-center mt-8 md:absolute md:right-6 md:bottom-6">
                                <Link href="/courses/dashboard">
                                    <Button>
                                        Go to Dashboard
                                    </Button>
                                </Link>
                            </div>
                        </div>
                    </div>

                    <div className="w-full">
                        <p className="font-nunito font-semibold text-lg md:text-xl leading-normal md:leading-normal p-3">
                            My Courses & Wishlist
                        </p>

                        {courses.length !== 0 && (
                            <div className="mt-6">
                                <div className="p-4 bg-white space-y-4 ">
                                    <CoursesList items={courses} />
                                </div>
                            </div>
                        )}

                        <div className="w-full">
                            <div className=" w-auto flex justify-center">
                                <Link href="/lesson/library">
                                    <Button>
                                        Check out the library for more courses
                                    </Button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            )
            }


            <Separator className="my-10" />
        </div >
    );
};

export default LessonBanner;
