import SectionTitle from "../../SectionTitle/SectionTitle";
import img01 from "../../../assets/menu/pizza-bg.jpg";
import img02 from "../../../assets/menu/salad-bg.jpg";
import img03 from "../../../assets/menu/soup-bg.jpg";

const Recommends = () => {
  return (
    <div className='max-w-screen-xl mx-auto my-24'>
      <SectionTitle heading='CHEF RECOMMENDS' subHeading='Should Try' />
      <div className='grid grid-cols-1 px-3 md:px-5 lg:px-0 lg:grid-cols-3 gap-6 items-center'>
        <div>
          <div className='bg-color10'>
            <img src={img01} alt='' />
            <div className='text-center p-10'>
              <h3 className='text-2xl font-semibold text-color3'>
                Caeser Salad
              </h3>
              <p className='text-base text-color3 mt-2'>
                Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.
              </p>
              <button className='text-color11 mt-6 hover:bg-color1 hover:border-b-color1 bg-color9 border-b-2 rounded-xl border-b-color11 uppercase px-4 py-3 font-medium text-xl'>
                Add to Cart
              </button>
            </div>
          </div>
        </div>
        <div>
          <div className='bg-color10'>
            <img src={img02} alt='' />
            <div className='text-center p-10'>
              <h3 className='text-2xl font-semibold text-color3'>
                Caeser Salad
              </h3>
              <p className='text-base text-color3 mt-2'>
                Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.
              </p>
              <button className='text-color11 mt-6 hover:bg-color1 hover:border-b-color1 bg-color9 border-b-2 rounded-xl border-b-color11 uppercase px-4 py-3 font-medium text-xl'>
                Add to Cart
              </button>
            </div>
          </div>
        </div>
        <div>
          <div className='bg-color10'>
            <img src={img03} alt='' />
            <div className='text-center p-10'>
              <h3 className='text-2xl font-semibold text-color3'>
                Caeser Salad
              </h3>
              <p className='text-base text-color3 mt-2'>
                Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.
              </p>
              <button className='text-color11 mt-6 hover:bg-color1 hover:border-b-color1 bg-color9 border-b-2 rounded-xl border-b-color11 uppercase px-4 py-3 font-medium text-xl'>
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Recommends;
