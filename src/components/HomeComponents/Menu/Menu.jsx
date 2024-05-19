import SectionTitle from "../../SectionTitle/SectionTitle";
import ShowMenu from "./ShowMenu";
import useMenu from "../../../hooks/useMenu";
import CommonBtn from "../../Shared/CommonBtn/CommonBtn";

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
      <CommonBtn text='View Full Menu' />
    </div>
  );
};

export default Menu;
