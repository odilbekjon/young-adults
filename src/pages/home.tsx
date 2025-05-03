import { Hero } from "@/components";
import { About } from "@/components";
import { Employees } from "@/components";
import { Achievements } from "@/components/Achievements";
import { Services } from "@/components";
import { Contact } from "@/components/Contact";
import { Courses } from "@/components/Courses";

export const Home = () => (
    <>
        <Hero/>
        <About/>
        <Employees/>
        <Courses/>
        <Services/>
        <Achievements/>
        <Contact/>
    </>
)