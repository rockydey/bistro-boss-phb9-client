import useMenu from "../../../hooks/useMenu";
import ShowMenu from "../../HomeComponents/Menu/ShowMenu";
import CommonBtn from "../../Shared/CommonBtn/CommonBtn";

const Desserts = ({title}) => {
  const [ourMenu] = useMenu();
  const desserts = ourMenu.filter((dessert) => dessert.category === "dessert");

  return (
    <div className='max-w-screen-xl mx-auto my-24'>
      <div className='grid grid-cols-1 px-3 md:px-5 lg:px-0 lg:grid-cols-2 gap-6'>
        {desserts.map((offer) => (
          <ShowMenu key={offer._id} menu={offer} />
        ))}
      </div>
      <CommonBtn title={title} text='ORDER YOUR FAVOURITE FOOD' />
    </div>
  );
};

export default Desserts;
