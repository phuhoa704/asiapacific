import { Routes, Route } from "react-router-dom";
import './App.css'
import { ROUTES } from './configs/routes.config';
import Homepage from './views/Home';
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {

  return (
    <div className='App poppins-regular text-sm'>
      <Header />
      <Routes>
        <Route path={ROUTES.HOME} element={<Homepage />}/>
      </Routes>
      <Footer />
    </div>
  )
}

export default App
