import GoodFit from "@/app/(mainsite)/components/aboutpage/GoodFit/GoodFit"
import Insurance from "@/app/(mainsite)/components/insurancepage/Insurance/Insurance"
import PageTitle from "@/app/(mainsite)/components/misc/PageTitle/PageTitle"
import type { Metadata } from "next"

export const metadata: Metadata = {
	  title: "Insurance | It\'s All About Life Insurance | life insurance, mortgage insurance",
	  description: "It\'s All About Life Insurance | life insurance, mortgage insurance"
}

export default function InsurancePage(){
	 return(
	 	 <>
			<PageTitle pageTitle="The Coverage We Offer" subtitle="See what options are available for you" />
			<Insurance />
			<GoodFit />
		 </>
	 ) 
}