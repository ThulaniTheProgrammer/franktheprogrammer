import Image from "next/image";
import MainHeader from "./components/Main";
import Toptext from "./components/Toptext";
import About from "./components/About";
import Achivements from "./components/Achivements";
import Skills from "./components/Skills";
import Example from "./components/Carousel";
import Innovate from "./components/Innovate";
import Footer from "./components/Footer";
import Main from "./components/Main";

export default function Home() {
  return (
    
       <body className="bg-gray-900  text-white h-screen">  
    <div >
<Main/>
<Toptext/>
<About/>
<Achivements/>
<Skills/>
<Example/>
<Innovate/>
<Footer/>


        </div>
        </body>
  );
}
