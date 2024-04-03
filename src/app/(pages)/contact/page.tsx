import ContactInfo from "@/app/(mainsite)/components/contactpage/ContactInfo/ContactInfo"
import PageTitle from "@/app/(mainsite)/components/misc/PageTitle/PageTitle"
import type { Metadata } from "next"

export const metadata: Metadata = {
    title: "Contact Page",
    description: ""
}

export default function ContactPage(){
    return(
        <>
           <PageTitle pageTitle="Contact" subtitle="Get started today!" /> 
           <ContactInfo />
        </>
    )
}