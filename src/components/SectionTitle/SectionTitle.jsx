import PropTypes from "prop-types";

const SectionTitle = ({ heading, subHeading }) => {
  return (
    <div>
      <div className='text-center mb-4'>
        {/* <div className='w-5 border-2 border-dashed border-color11'></div> */}
        <h4 className='font-normal italic text-xl text-color11'>
          --- {subHeading} ---
        </h4>
        {/* <div className='w-5 border-2 border-dashed border-color11'></div> */}
      </div>
      <div className='mx-auto text-center w-80 md:w-[420px] mb-12'>
        {/* <div className='w-80 md:w-96 border-2 border-color9'></div> */}
        <h2 className='text-3xl md:text-[40px] border-y-2 border-color9 py-5 font-normal text-color3 uppercase'>
          {heading}
        </h2>
        {/* <div className='w-80 md:w-96 border-2 border-color9'></div> */}
      </div>
    </div>
  );
};

SectionTitle.propTypes = {
  heading: PropTypes.string,
  subHeading: PropTypes.string,
};

export default SectionTitle;
