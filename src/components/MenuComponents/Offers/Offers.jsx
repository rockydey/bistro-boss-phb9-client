import useMenu from "../../../hooks/useMenu";
import ShowMenu from "../../HomeComponents/Menu/ShowMenu";
import SectionTitle from "../../SectionTitle/SectionTitle";

const Offers = () => {
  const [ourMenu] = useMenu();

  const offers = ourMenu.filter((menu) => menu.category === "offered");

  return (
    <div className='max-w-screen-xl mx-auto my-24'>
      <SectionTitle subHeading="Don't miss" heading="TODAY'S OFFER" />
      <div className='grid grid-cols-1 px-3 md:px-5 lg:px-0 lg:grid-cols-2 gap-6'>
        {offers.map((offer) => (
          <ShowMenu key={offer._id} menu={offer} />
        ))}
      </div>
    </div>
  );
};

export default Offers;
