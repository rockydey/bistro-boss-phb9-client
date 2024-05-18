import chefImg from "../../../assets/home/chef-service.jpg";

const ChefService = () => {
  return (
    <div
      style={{ backgroundImage: `url(${chefImg})` }}
      className='max-w-screen-xl mx-auto bg-cover bg-center bg-no-repeat py-24'>
      <div className=' bg-color4 w-11/12 md:w-4/5 mx-auto text-center text-color3 py-24'>
        <h1 className='font-cinzel text-4xl md:text-5xl mb-2'>Bistro Boss</h1>
        <p className='text-base font-normal w-11/12 md:w-3/4 lg:w-3/5 mx-auto'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Necessitatibus, libero accusamus laborum deserunt ratione dolor
          officiis praesentium! Deserunt magni aperiam dolor eius dolore at,
          nihil iusto ducimus incidunt quibusdam nemo.
        </p>
      </div>
    </div>
  );
};

export default ChefService;
