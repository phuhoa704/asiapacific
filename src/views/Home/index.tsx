import Banner from "../../components/Banner";
import ContactUs from "../../components/Contact";
import ImmigrationServices from "../../components/ImmigrationServices";
import ProfessionalKnowledge from "../../components/Knowledge";
import Mission from "../../components/Mission";
import OurServices from "../../components/OurServices";
import Teams from "../../components/Teams";
import './style.scss'

const Homepage = () => {
    return (
        <div>
            <Banner />
            <ImmigrationServices />
            <Mission />
            <Teams />
            <OurServices />
            <ProfessionalKnowledge />
            <ContactUs />
        </div>
    );
}

export default Homepage;