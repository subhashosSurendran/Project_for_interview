import Menu from './components/navigation/menu.jsx'
import HomeBanner from "./components/home_banner.jsx"
import CryptoSection from "./components/most _trusted_section.jsx"
import CardSlider from "./components/card_section.jsx"
import CryptoFAQ from "./components/accordion.jsx"
import Footer from "./components/footer.jsx"
export default function Home() {
  return (
    <div>
      <Menu/>
      <HomeBanner/>
      <CryptoSection/>
      <CardSlider/>
      <CryptoFAQ/>
      <Footer/>
   <h3>react app</h3>
    </div>
  );
}
