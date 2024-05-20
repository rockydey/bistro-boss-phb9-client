import { Parallax } from "react-parallax";

const Cover = ({ img, heading, subHeading }) => {
  return (
    <Parallax
      blur={{ min: -15, max: 15 }}
      bgImage={img}
      bgImageAlt='the menu'
      strength={-200}
      className='py-12 md:py-24'>
      <div className='text-color4 bg-color3 bg-opacity-50 w-11/12 md:w-9/12 lg:w-3/5 mx-auto text-center py-12 mb:py-24 font-semibold'>
        <h3 className='font-cinzel text-4xl md:text-5xl uppercase mb-2'>
          {heading}
        </h3>
        <p className='text-base px-3 md:px-5 lg:px-10'>{subHeading}</p>
      </div>
    </Parallax>
  );
};

export default Cover;
