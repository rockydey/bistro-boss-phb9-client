import { Helmet } from "react-helmet-async";
import PageCover from "../../components/Shared/PageCover/PageCover";
import menuImg from "../../assets/menu/banner3.jpg";

const OurMenu = () => {
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
    </div>
  );
};

export default OurMenu;
