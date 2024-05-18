import Banner from "../../components/HomeComponents/Banner/Banner";
import ChefService from "../../components/HomeComponents/ChefService/ChefService";
import OnlineOrder from "../../components/HomeComponents/OnlineOrder/OnlineOrder";

const Home = () => {
  return (
    <div>
      <Banner />
      <OnlineOrder />
      <ChefService />
    </div>
  );
};

export default Home;
