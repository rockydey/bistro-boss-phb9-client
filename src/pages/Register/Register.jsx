import { Link } from "react-router-dom";
import authenticationImg from "../../assets/others/authentication.png";
import loginImg from "../../assets/others/authentication2.png";
import { FaGoogle } from "react-icons/fa";

const Register = () => {
  return (
    <div
      style={{ backgroundImage: `url(${authenticationImg})` }}
      className='bg-center bg-no-repeat bg-cover py-24'>
      <div className='max-w-screen-xl shadow-2xl shadow-color7 mx-auto py-10 px-24 flex flex-col md:flex-row-reverse items-center gap-24'>
        <div className='lg:w-1/2'>
          <img className='w-full' src={loginImg} alt='' />
        </div>
        <div className=' lg:w-1/2'>
          <h3 className='text-center text-4xl font-bold text-color3 mb-5'>
            Sign Up
          </h3>
          <form className=''>
            <div className='mb-6'>
              <label
                className='text-xl inline-block font-semibold text-color5 mb-4'
                htmlFor='name'>
                Name
              </label>
              <input
                type='name'
                id='name'
                name='name'
                required
                placeholder='Enter Your Name'
                className='block w-full border border-color8 py-4 px-5 focus:outline-none rounded-lg'
              />
            </div>
            <div className='mb-6'>
              <label
                className='text-xl inline-block font-semibold text-color5 mb-4'
                htmlFor='email'>
                Email
              </label>
              <input
                type='email'
                id='email'
                name='email'
                required
                placeholder='Enter Your Email'
                className='block w-full border border-color8 py-4 px-5 focus:outline-none rounded-lg'
              />
            </div>
            <div className='mb-6'>
              <label
                className='text-xl inline-block font-semibold text-color5 mb-4'
                htmlFor='password'>
                Password
              </label>
              <input
                type='password'
                id='password'
                name='password'
                required
                placeholder='Enter Your Password'
                className='block w-full border border-color8 py-4 px-5 focus:outline-none rounded-lg'
              />
            </div>
            <div className='mt-7'>
              <button className='bg-[#D1A054B3] border-0 w-full rounded-lg text-xl font-bold py-4 text-color4'>
                Sign Up
              </button>
            </div>
          </form>
          <div className='text-center'>
            <p className='text-xl font-medium text-[#D1A054] mt-6'>
              Already registered?{" "}
              <Link className='font-semibold' to='/login'>
                Go to log in
              </Link>
            </p>
            <p className='my-6 text-color5 font-medium text-xl'>
              Or sign up with
            </p>
            <button className='text-2xl p-3 border-4 cursor-pointer border-color5 text-color5 rounded-full'>
              <FaGoogle />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
