import { ClerkProvider } from "@clerk/nextjs";
import type { Metadata } from "next";
import { Inter, Nunito, Lato, Hanken_Grotesk } from "next/font/google";
import React from "react";
import { auth } from "@clerk/nextjs/server";
import prismadb from "@/lib/prismadb";
import { redirect, useParams } from "next/navigation";
import "@/app/globals.css"

import ToastProvider from "@/providers/toast-provider";
import { getProgress } from "@/actions/get-progress";
import CourseSidebar from "./_components/course-sidebar";
import CourseMobileSidebar from "./_components/course-mobile-sidebar";
import { Separator } from "@/components/ui/separator";
import CourseNavbar from "./_components/course-navbar";




const inter = Inter({
  subsets: ["latin"],
  variable: '--font-inter'
});
const nunito = Nunito({
  subsets: ["latin"],
  variable: '--font-nunito'
});

const lato = Lato({
  weight: ["100", "300", '400', '700', '900'],
  subsets: ["latin"],
  variable: '--font-lato'
});

const hankenGrotesk = Hanken_Grotesk({
  subsets: ["latin"],
  variable: '--font-hankenGrotesk'
});


export const metadata: Metadata = {
  title: "Rainbow Fingers",
  description: "Your one-stop shop for all guitar accessories",
};

const CourseLayout = async ({
  children,
  params
}: {
  children: React.ReactNode;
  params: { courseId: string }
}) => {
  const { userId } = auth()

  if (!userId) {
    return redirect("/lesson")
  }

  const course = await prismadb.course.findUnique({
    where: {
      id: params.courseId
    },
    include: {
      chapters: {
        where: {
          courseId: params.courseId,
          isPublished: true
        },
        include: {
          userProgress: {
            where: {
              userId,
            }
          }
        },
        orderBy: {
          position: "asc"
        }
      },

    }
  });

  if (!course) {
    return redirect("/lesson")
  }

  const progressCount = await getProgress(userId, course.id)

  return (
    <ClerkProvider>
      <html className={`${inter.variable} ${nunito.variable} ${lato.variable} ${hankenGrotesk.variable}`} lang="en">
        <body>
          <ToastProvider />

          <div className="hidden md:flex h-full w-[300px] flex-col fixed inset-y-0">
            <CourseSidebar
              course={course}
              progressCount={progressCount}
            />
          </div>
          <div className="md:pl-[300px]  h-full">
            <CourseNavbar />
            <Separator />
            <div className="mt-3 md:mt-0">
              <CourseMobileSidebar
                course={course}
                progressCount={progressCount}
              />

            </div>
            <main className="">
              {children}
            </main>
          </div>
        </body>
      </html>
    </ClerkProvider>
  )
}


export default CourseLayout;