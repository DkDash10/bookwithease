import Featured from "../../components/featured/Featured";
import FeaturedProperties from "../../components/featuredProperties/FeaturedProperties";
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import MailList from "../../components/mailList/MailList";
import Navbar from "../../components/navbar/Navbar";
import PropertyList from "../../components/propertyList/PropertyList";
import "./home.css";

const Home = () => {


  return (
    <div>
      <div className="holder1">
      <Navbar />
      <Header/>
      </div>

      <div className="homeContainer">

        <div className="clip1">
        <Featured/>
        </div>
        <h1 className="homeTitle">Select your Taste</h1>
        <PropertyList/>
        <h1 className="homeTitle">Rooms guests get attached to</h1>
        <FeaturedProperties/>

        <MailList/>
<div className="holder2">

        <Footer/>
</div>
      </div>
    </div>
  );
};

export default Home;