import SectionTitle from "../../SectionTitle/SectionTitle";
import ShowMenu from "./ShowMenu";
import { Link } from "react-router-dom";
import useMenu from "../../../hooks/useMenu";

const Menu = () => {
  const [ourMenu] = useMenu();
  const popularMenu = ourMenu.filter((menu) => menu.category === "popular");

  return (
    <div className='max-w-screen-xl mx-auto my-24'>
      <SectionTitle heading='FROM OUR MENU' subHeading='Check it out' />
      <div className='grid grid-cols-1 px-3 md:px-5 lg:px-0 lg:grid-cols-2 gap-6'>
        {popularMenu.map((menu) => (
          <ShowMenu key={menu._id} menu={menu}></ShowMenu>
        ))}
      </div>
      <div className='text-center mt-10'>
        <Link
          to='/'
          className='text-xl font-medium text-color1 px-4 py-3 border-b-2 border-b-color1 rounded-xl'>
          View Full Menu
        </Link>
      </div>
    </div>
  );
};

export default Menu;
