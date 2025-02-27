import Hero from "@/components/Hero";
import { FloatingNav } from "@/components/ui/FloatingNav";
import Grid from "@/components/Grid";
import RecentProjects from "@/components/RecentProjects";
import { navItems } from "@/data";
import Techs from "@/components/Techs";
import Experience from "@/components/Experience";
import Approach from "@/components/Apr";
import Footer from "@/components/Footer";




export default function Home() {
  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col mx-auto sm:px-10 px-5 overflow-clip">
      <div className="max-w-7xl w-full">
        <FloatingNav
        navItems={navItems}/>
        <Hero/>
        <Grid/>
        <Techs/>
        <RecentProjects/>
        <Experience/>
        <Approach/>
        <Footer/>
      </div>
    </main>
  );
}
