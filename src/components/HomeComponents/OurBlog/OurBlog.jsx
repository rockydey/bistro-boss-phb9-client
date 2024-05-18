import featureImg from "../../../assets/home/featured.jpg";

const OurBlog = () => {
  return (
    <div
      style={{ backgroundImage: `url(${featureImg})` }}
      className='bg-cover bg-no-repeat bg-fixed bg-center bg-color3 bg-blend-overlay py-24'>
      <div>
        <div className='text-center mb-4'>
          <h4 className='font-normal italic text-xl text-color11'>
            --- Check it out ---
          </h4>
        </div>
        <div className='mx-auto text-center w-80 md:w-[420px] mb-12'>
          <h2 className='text-3xl md:text-[40px] border-y-2 border-color9 py-5 font-normal text-color4 uppercase'>
            FROM OUR Feature
          </h2>
        </div>
      </div>
      <div className='max-w-screen-xl px-3 md:px-5 lg:px-0 mx-auto flex-col lg:flex-row flex items-center gap-12'>
        <div>
          <img src={featureImg} alt='' />
        </div>
        <div className='text-color4'>
          <h4 className='text-[22px]'>March 20, 2023</h4>
          <h3 className='text-2xl my-2'>WHERE CAN I GET SOME?</h3>
          <p className='text-base'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Error
            voluptate facere, deserunt dolores maiores quod nobis quas quasi.
            Eaque repellat recusandae ad laudantium tempore consequatur
            consequuntur omnis ullam maxime tenetur.
          </p>
          <button className='mt-6 text-xl font-medium uppercase px-4 py-3 border-b-2 border-b-color4 rounded-xl'>
            Read More
          </button>
        </div>
      </div>
    </div>
  );
};

export default OurBlog;
