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
import Services from "./views/Services";
import { useAppDispatch } from "./redux/hook";
import { useEffect } from "react";
import { getHomeContent } from "./redux/actions/Home";
import { getListLang } from "./redux/actions/Langs";
import ImmigrationServices from "./views/ImmigrationServices";
import TaxServices from "./views/TaxServices";
import ConsltancyService from "./views/ConsltancyService";

function App() {
  const dispatch = useAppDispatch();
  useEffect(() => {
      dispatch(getHomeContent([]))
      dispatch(getListLang([]))
  }, [])
  return (
    <div className='App poppins-regular text-sm'>
      <Header />
      <Routes>
        <Route path={ROUTES.HOME} element={<Homepage />}/>
        <Route path={ROUTES.ABOUT} element={<About />}/>
        <Route path={ROUTES.CONTACT} element={<ContactPage />}/>
        <Route path={ROUTES.NEWS} element={<NewsPage />}/>
        <Route path={ROUTES.REGION} element={<RegionPage />}/>
        <Route path={ROUTES.SERVICES} element={<Services />}/>
        <Route path={ROUTES.IMMIGRATION_SERVICES} element={<ImmigrationServices />}/>
        <Route path={ROUTES.TAX_SERVICES} element={<TaxServices />}/>
        <Route path={ROUTES.CONSLTANCY_SERVICES} element={<ConsltancyService />}/>
      </Routes>
      <Footer />
    </div>
  )
}

export default App
