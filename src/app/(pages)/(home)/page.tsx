import Build from "@/app/(mainsite)/components/homepage/Build/Build";
import Carriers from "@/app/(mainsite)/components/homepage/Carriers/Carriers";
import Choice from "@/app/(mainsite)/components/homepage/Choice/Choice";
import Coverage from "@/app/(mainsite)/components/homepage/Coverage/Coverage";
import Header from "@/app/(mainsite)/components/homepage/Header/Header";
import Wealth from "@/app/(mainsite)/components/homepage/Wealth/Wealth";


export default function Home() {
  return (
    <>
      <Header />
      <Choice />
      <Carriers />
      <Wealth />
      <Coverage />
      <Build />
    </>
  )
}
