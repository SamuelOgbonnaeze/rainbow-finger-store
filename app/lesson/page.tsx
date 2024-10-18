import LessonBanner from "./_components/lesson-banner";
import LessonDiscover from "./_components/lesson-discover";

import LessonHeroWrapper from "./_components/lesson-hero-wrapper";

const Lessons = () => {
    return (
        <div className="">
            <LessonHeroWrapper />
            <div className=" px-3 lg:px-[98px]">
                <LessonDiscover />
                <LessonBanner />
            </div>

        </div>
    );
}

export default Lessons;