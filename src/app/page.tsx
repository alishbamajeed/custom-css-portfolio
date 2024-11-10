import Hero from "../components/Hero";
import About from "./about/page";
import Skill from "./skill/page"
import Footer from "../components/Footer";


import Contact from "./contact/page";

export default function Home() {
  return (
    <div>

<Hero/>
<About/>
<Skill/>
<Contact/>
<Footer/>
    </div>
  );
}