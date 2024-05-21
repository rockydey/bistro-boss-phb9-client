import { Link } from "react-router-dom";

const CommonBtn = ({ text }) => {
  return (
    <div className='text-center mt-10'>
      <Link
        to={`/shop`}
        className='text-xl font-medium text-color1 px-4 py-3 border-b-2 border-b-color1 rounded-xl'>
        {text}
      </Link>
    </div>
  );
};

export default CommonBtn;
