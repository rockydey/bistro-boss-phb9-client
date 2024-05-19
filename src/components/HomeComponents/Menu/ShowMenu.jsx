import PropTypes from "prop-types";

const ShowMenu = ({ menu }) => {
  const { image, name, recipe, price } = menu;
  return (
    <div className='grid grid-cols-1 lg:grid-cols-3 gap-10 md:items-center'>
      <div className=''>
        <img
          className='w-full md:w-2/5 lg:w-full rounded-r-full rounded-b-full'
          src={image}
          alt=''
        />
      </div>
      <div className='col-span-2'>
        <div className='flex gap-5 md:gap-10 md:justify-between md:items-center mb-2'>
          <h3 className='font-cinzel uppercase text-xl text-color3'>
            {name} ------------
          </h3>
          <p className='text-xl text-color11'>${price}</p>
        </div>
        <p className='text-base font-normal text-color6'>{recipe}</p>
      </div>
    </div>
  );
};

ShowMenu.propTypes = {
  menu: PropTypes.object,
};

export default ShowMenu;
