import AboutUs from "@/app/(mainsite)/components/aboutpage/AboutUs/AboutUs"
import GoodFit from "@/app/(mainsite)/components/aboutpage/GoodFit/GoodFit"
import PageTitle from "@/app/(mainsite)/components/misc/PageTitle/PageTitle"
import type { Metadata } from "next"

export const metadata: Metadata = {
    title: "About Us | It\'s All About Life Insurance | life insurance, mortgage insurance",
    description: "It\'s All About Life Insurance | life insurance, mortgage insurance"
}

export default function AboutPage(){
    return(
        <>
            <PageTitle pageTitle="About Us" subtitle="Learn more about us" />
            <AboutUs />
            <GoodFit />
        </>
    )
}