import { Helmet } from "react-helmet-async";
import PageCover from "../../components/Shared/PageCover/PageCover";
import menuImg from "../../assets/menu/banner3.jpg";
import Offers from "../../components/MenuComponents/Offers/Offers";
import Cover from "../../components/Shared/Cover/Cover";
import dessertImg from "../../assets/menu/dessert-bg.jpeg";
import Desserts from "../../components/MenuComponents/Desserts/Desserts";
import pizzaImg from "../../assets/menu/pizza-bg.jpg";
import saladImg from "../../assets/menu/salad-bg.jpg";
import soupImg from "../../assets/menu/soup-bg.jpg";
import useMenu from "../../hooks/useMenu";
import MenuItems from "../../components/MenuComponents/MenuItems/MenuItems";

const OurMenu = () => {
  const [ourMenu] = useMenu();

  const pizzas = ourMenu.filter((menu) => menu.category === "pizza");
  const salads = ourMenu.filter((menu) => menu.category === "salad");
  const soups = ourMenu.filter((menu) => menu.category === "soup");

  return (
    <div>
      <Helmet>
        <title>Bistro Boss | Menu</title>
      </Helmet>
      <PageCover
        img={menuImg}
        heading='OUR MENU'
        subHeading='Would you like to try a dish?'
      />
      <Offers title="offer" />
      <Cover
        img={dessertImg}
        heading='DESSERTS'
        subHeading='Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'
      />
      <Desserts title="dessert" />
      <Cover
        img={pizzaImg}
        heading='PIZZA'
        subHeading='Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'
      />
      <MenuItems title="pizza" foods={pizzas} />
      <Cover
        img={saladImg}
        heading='Salads'
        subHeading='Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'
      />
      <MenuItems title="salad" foods={salads} />
      <Cover
        img={soupImg}
        heading='Soups'
        subHeading='Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'
      />
      <MenuItems title="soup" foods={soups} />
    </div>
  );
};

export default OurMenu;
