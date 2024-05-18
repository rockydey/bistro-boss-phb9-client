import PropTypes from "prop-types";

const ShowMenu = ({ menu }) => {
  const { image, name, recipe, price } = menu;
  return (
    <div className='flex flex-col md:flex-row gap-8 md:items-center'>
      <div>
        <img
          className='w-32 rounded-r-full rounded-b-full'
          src={image}
          alt=''
        />
      </div>
      <div>
        <div className='flex flex-col md:flex-row justify-between md:items-center mb-2'>
          <h3 className='font-cinzel uppercase text-xl text-color3'>
            {name} ------------------
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
