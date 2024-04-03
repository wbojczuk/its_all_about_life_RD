import ContactInfo from "@/app/(mainsite)/components/contactpage/ContactInfo/ContactInfo"
import PageTitle from "@/app/(mainsite)/components/misc/PageTitle/PageTitle"
import type { Metadata } from "next"

export const metadata: Metadata = {
    title: "Contact Us | It\'s All About Life Insurance | life insurance, mortgage insurance",
    description: "It\'s All About Life Insurance | life insurance, mortgage insurance"
}

export default function ContactPage(){
    return(
        <>
           <PageTitle pageTitle="Contact" subtitle="Get started today!" /> 
           <ContactInfo />
        </>
    )
}