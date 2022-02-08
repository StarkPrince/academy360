import Carousels from "../components/Carousels";
import DisplayPage from "../components/DisplayPage";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Services from "../components/Services";

const Index = () =>
{
    return (<>
        <Navbar />
        <DisplayPage />
        <Carousels />
        <Services />
    </>);
};

export default Index;
