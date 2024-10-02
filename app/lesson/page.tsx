import LessonBanner from "./_components/lesson-banner";
import LessonDiscover from "./_components/lesson-discover";
import LessonHero from "./_components/lesson-hero"

const Lessons = () => {
    return (
        <div className="">
            <LessonHero />
            <div className=" px-3 lg:px-[98px]">
                <LessonDiscover />
                <LessonBanner />
            </div>

        </div>
    );
}

export default Lessons;