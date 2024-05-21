const FoodItems = ({ foodItem }) => {
  const { _id, name, recipe, image } = foodItem;
  return (
    <div className='bg-color10 card'>
      <img src={image} alt='' />
      <div className='card-body text-center p-10'>
        <h3 className='text-2xl font-semibold text-color3'>{name}</h3>
        <p className='text-base text-color3 mt-2'>{recipe}</p>
        <button className='text-color11 mt-6 hover:bg-color1 hover:border-b-color1 bg-color9 border-b-2 rounded-xl border-b-color11 uppercase px-4 py-3 font-medium text-xl'>
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default FoodItems;
