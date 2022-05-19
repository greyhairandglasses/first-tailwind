import Footer from './components/Footer'
import Hero from './components/Hero'
import Highlights from './components/Highlights'
import ImgHighlights from './components/ImgHighlights'
import NavBar from './components/NavBar'
import Reasons from './components/Reasons'
import './index.css'


export default function App() {
  return (
    <>
      <NavBar />
      <Hero />
      <Highlights />
      <Reasons />
      <ImgHighlights />
      <Footer />
      {/* <a
        href="https://www.flaticon.com/free-icons/inscription"
        title="inscription icons"
      >
        Inscription icons created by wanicon - Flaticon
      </a> */}
    </>
  );
}