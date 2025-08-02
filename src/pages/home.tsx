import { Hero } from "@/components";
import { About } from "@/components";
import { Employees } from "@/components";
import {Achievements} from "@/components/Achievements/Achievements";
import Services from "@/components/Services/Services";
import { Contact } from "@/components/Contact";
import { Courses } from "@/components/Courses";
import { Locations } from "@/components/Locations";
import { Information } from "@/components/Information";

export const Home = () => (
    <>
        <Hero/>
        <Information/>
        <About/>
        <Achievements/>
        <Courses/>
        <Employees/>
        <Services/>
        <Locations/>
        <Contact/>
    </>
)