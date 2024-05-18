import { useState } from "react";
import SectionTitle from "../../SectionTitle/SectionTitle";
import { useEffect } from "react";
import axios from "axios";
import ShowMenu from "./ShowMenu";
import { Link } from "react-router-dom";

const Menu = () => {
  const [ourMenu, setOurMenu] = useState([]);

  useEffect(() => {
    axios
      .get("menu.json")
      .then((res) =>
        setOurMenu(
          res.data.filter(
            (resData) =>
              resData.category === "popular" || resData.category === "offered"
          )
        )
      )
      .catch((error) => console.error(error.message));
  }, []);

  return (
    <div className='max-w-screen-xl mx-auto my-24'>
      <SectionTitle heading='FROM OUR MENU' subHeading='Check it out' />
      <div className='grid grid-cols-2 gap-6'>
        {ourMenu.slice(0, 6).map((menu) => (
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
