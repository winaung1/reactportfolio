import { About } from "./components/About";
import { Contact } from "./components/Contact";
import { Experience } from "./components/Experience";
import { Home } from "./components/Home";
import { Navbar } from "./components/Navbar";

 

function App() {
  return (
    <div className="min-w-[360px]">
     <Navbar/>
     <Home/>
     <About title='ABOUT'/>
     <Experience  title='EXPERIENCE'/>
     <Contact  title='CONTACT'/>
    </div>
  );
}

export default App;
