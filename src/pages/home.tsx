import { Hero } from "@/components";
import { About } from "@/components";
import { Employees } from "@/components";
import Achievements from "@/components/Achievements/Achievements";
import Services from "@/components/Services/Services";
// import { Contact } from "@/components/Contact";
import { Courses } from "@/components/Courses";
import { Locations } from "@/components/Locations";

export const Home = () => (
    <>
        <Hero/>
        <About/>
        <Courses/>
        <Employees/>
        <Achievements/>
        <Services/>
        <Locations/>
        {/* <Contact/> */}
    </>
)