const PageCover = ({ img, heading, subHeading }) => {
  return (
    <div
      style={{ backgroundImage: `url("${img}")` }}
      className='bg-center bg-no-repeat bg-cover pb-12 pt-24 md:pb-24 md:pt-48'>
      <div className='font-cinzel text-color4 bg-color3 bg-opacity-50 w-11/12 md:w-9/12 lg:w-1/2 mx-auto text-center py-12 mb:py-24'>
        <h3 className='text-5xl md:text-[80px] font-bold uppercase mb-2'>
          {heading}
        </h3>
        <p className='text-xl md:text-2xl font-semibold'>{subHeading}</p>
      </div>
    </div>
  );
};

export default PageCover;
