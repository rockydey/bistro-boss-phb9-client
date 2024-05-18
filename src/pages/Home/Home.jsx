import Banner from "../../components/HomeComponents/Banner/Banner";
import CallUs from "../../components/HomeComponents/CallUs/CallUs";
import ChefService from "../../components/HomeComponents/ChefService/ChefService";
import Menu from "../../components/HomeComponents/Menu/Menu";
import OnlineOrder from "../../components/HomeComponents/OnlineOrder/OnlineOrder";

const Home = () => {
  return (
    <div>
      <Banner />
      <OnlineOrder />
      <ChefService />
      <Menu />
      <CallUs />
    </div>
  );
};

export default Home;
