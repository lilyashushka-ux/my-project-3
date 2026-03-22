import Navbar from "./sections/Navbar";
import Hero from "./sections/Hero"



const App = () => {
  return (
    <div className="min-h-screen overflow-x-hidden">
   <Navbar />
   <main>
  <Hero />
  </main>
    </div>
  );
}
export default App;