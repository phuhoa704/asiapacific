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
import { useAppDispatch, useAppSelector } from "./redux/hook";
import { useEffect } from "react";
import { getFooterContent, getHeaderContent, getHomeContent, getLogoContent } from "./redux/actions/Home";
import { changeLang, getListLang } from "./redux/actions/Langs";
import ImmigrationServices from "./views/ImmigrationServices";
import TaxServices from "./views/TaxServices";
import ConsltancyService from "./views/ConsltancyService";
import NewsDetail from "./views/NewsDetail";
import { getMissionContent } from "./redux/actions/Misson";
import { getServiceContent } from "./redux/actions/Service";
import { getTeamContent } from "./redux/actions/Team";
import { getRegionContent, getRegions } from "./redux/actions/Region";
import { getNewsContent, getNewsList } from "./redux/actions/News";
import { getContactContent } from "./redux/actions/Contact";
import { LANGUAGE } from "./configs/constants.config";
import { getSocialMedia } from "./redux/actions/SocialMedia";
import { getAboutSteps } from "./redux/actions/About";

function App() {
  const dispatch = useAppDispatch();
  const { listLangs } = useAppSelector(state => state.lang);
  useEffect(() => {
      dispatch(getHomeContent([]))
      dispatch(getListLang([]))
      dispatch(getMissionContent([]));
      dispatch(getServiceContent([]));
      dispatch(getTeamContent([]));
      dispatch(getHeaderContent({}));
      dispatch(getFooterContent({}));
      dispatch(getRegionContent([]));
      dispatch(getNewsContent([]));
      dispatch(getContactContent([]));
      dispatch(getRegions([]));
      dispatch(getNewsList([]));
      dispatch(getSocialMedia([]));
      dispatch(getLogoContent([]));
      dispatch(getAboutSteps([]));
  }, [])
  useEffect(() => {
    if(listLangs) {
      const crtLang = window.localStorage.getItem(LANGUAGE);
      if(crtLang) {
        let finder = listLangs.find(l => l.lang === crtLang)
        if(finder) {
          dispatch(changeLang(finder))
        }
      } else {
        const defaultLang = listLangs.find(l => l.default === 1);
        if(defaultLang) {
          dispatch(changeLang(defaultLang))
        }
      }
    }
  },[listLangs])
  return (
    <div className='App poppins-regular text-sm'>
      <Header />
      <Routes>
        <Route path={ROUTES.HOME} element={<Homepage />}/>
        <Route path={ROUTES.ABOUT} element={<About />}/>
        <Route path={ROUTES.CONTACT} element={<ContactPage />}/>
        <Route path={ROUTES.NEWS} element={<NewsPage />}/>
        <Route path={ROUTES.NEWS_DETAIL} element={<NewsDetail />}/>
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
