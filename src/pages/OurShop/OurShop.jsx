import { Helmet } from "react-helmet-async";
import shopImg from "../../assets/shop/shopBanner.jpg";
import PageCover from "../../components/Shared/PageCover/PageCover";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import "./OurShop.css";
import useMenu from "../../hooks/useMenu";
import FoodItems from "../../components/ShopComponents/FoodItems/FoodItems";

const OurShop = () => {
  const [ourMenu] = useMenu();

  const salads = ourMenu.filter((menu) => menu.category === "salad");
  const pizzas = ourMenu.filter((menu) => menu.category === "pizza");
  const soups = ourMenu.filter((menu) => menu.category === "soup");
  const desserts = ourMenu.filter((menu) => menu.category === "dessert");
  const drinks = ourMenu.filter((menu) => menu.category === "drinks");

  return (
    <div>
      <Helmet>
        <title>Bistro Boss | Shop</title>
      </Helmet>
      <PageCover
        img={shopImg}
        heading='Our Shop'
        subHeading='Would you like to try a dish?'
      />
      <div className='text-center max-w-screen-xl mx-auto my-24 px-3 md:px-5 lg:px-0'>
        <Tabs>
          <TabList className='space-x-6 mb-12'>
            <Tab>
              <button className='text-2xl text-color3 hover:text-color11 font-bold uppercase'>
                Salad
              </button>
            </Tab>
            <Tab>
              <button className='text-2xl text-color3 hover:text-color11 font-bold uppercase'>
                Pizza
              </button>
            </Tab>
            <Tab>
              <button className='text-2xl text-color3 hover:text-color11 font-bold uppercase'>
                Soups
              </button>
            </Tab>
            <Tab>
              <button className='text-2xl text-color3 hover:text-color11 font-bold uppercase'>
                Desserts
              </button>
            </Tab>
            <Tab>
              <button className='text-2xl text-color3 hover:text-color11 font-bold uppercase'>
                Drinks
              </button>
            </Tab>
          </TabList>

          <TabPanel>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
              {salads.map((salad) => (
                <FoodItems key={salad._id} foodItem={salad}></FoodItems>
              ))}
            </div>
          </TabPanel>
          <TabPanel>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
              {pizzas.map((pizza) => (
                <FoodItems key={pizza._id} foodItem={pizza}></FoodItems>
              ))}
            </div>
          </TabPanel>
          <TabPanel>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
              {soups.map((soup) => (
                <FoodItems key={soup._id} foodItem={soup}></FoodItems>
              ))}
            </div>
          </TabPanel>
          <TabPanel>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
              {desserts.map((dessert) => (
                <FoodItems key={dessert._id} foodItem={dessert}></FoodItems>
              ))}
            </div>
          </TabPanel>
          <TabPanel>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
              {drinks.map((drink) => (
                <FoodItems key={drink._id} foodItem={drink}></FoodItems>
              ))}
            </div>
          </TabPanel>
        </Tabs>
      </div>
    </div>
  );
};

export default OurShop;
