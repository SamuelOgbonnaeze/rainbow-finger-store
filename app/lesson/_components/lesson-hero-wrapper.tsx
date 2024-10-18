

import { auth } from "@clerk/nextjs/server";
import LessonHero from "./lesson-hero";


const LessonHeroWrapper = () => {
    const { userId } = auth();
    const isSignedIn = !!userId; // Convert userId to boolean

    return <LessonHero isSignedIn={isSignedIn} />;
};

export default LessonHeroWrapper;
