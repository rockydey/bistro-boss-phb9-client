import Banner from "../../components/HomeComponents/Banner/Banner";
import CallUs from "../../components/HomeComponents/CallUs/CallUs";
import ChefService from "../../components/HomeComponents/ChefService/ChefService";
import Menu from "../../components/HomeComponents/Menu/Menu";
import OnlineOrder from "../../components/HomeComponents/OnlineOrder/OnlineOrder";
import OurBlog from "../../components/HomeComponents/OurBlog/OurBlog";
import Recommends from "../../components/HomeComponents/Recommends/Recommends";
import Testimonials from "../../components/HomeComponents/Testimonials/Testimonials";

const Home = () => {
  return (
    <div>
      <Banner />
      <OnlineOrder />
      <ChefService />
      <Menu />
      <CallUs />
      <Recommends />
      <OurBlog />
      <Testimonials />
    </div>
  );
};

export default Home;
