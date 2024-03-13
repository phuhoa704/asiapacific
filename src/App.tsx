import { Routes, Route } from "react-router-dom";
import './App.css'
import { ROUTES } from './configs/routes.config';
import Homepage from './views/Home';
import Header from "./components/Header";
import Footer from "./components/Footer";
import About from "./views/About";
import ContactPage from "./views/Contact";
import NewsPage from "./views/News";
import RegionPage from "./views/Region";

function App() {

  return (
    <div className='App poppins-regular text-sm'>
      <Header />
      <Routes>
        <Route path={ROUTES.HOME} element={<Homepage />}/>
        <Route path={ROUTES.ABOUT} element={<About />}/>
        <Route path={ROUTES.CONTACT} element={<ContactPage />}/>
        <Route path={ROUTES.NEWS} element={<NewsPage />}/>
        <Route path={ROUTES.REGION} element={<RegionPage />}/>
      </Routes>
      <Footer />
    </div>
  )
}

export default App
