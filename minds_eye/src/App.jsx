import SideNav from "../Components/Nav"
import Header from "../Components/Header"
import ThreeCardSection from "../Components/sections/ThreeCardSection"
import Footer from "../Components/Footer"
import About from "../Components/sections/about"


function App() {

   return (
      <>
         <SideNav />
         <div className="layoutMargin">
            <Header />
            <ThreeCardSection />
            <About />
            <Footer />
         </div>
      </>
   )
}

export default App
