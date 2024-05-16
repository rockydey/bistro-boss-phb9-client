import "./Footer.css";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className='text-color4'>
      <div className='grid grid-cols-1 md:grid-cols-2'>
        <div className='bg-color1 py-24'>
          <div className='lg:w-1/2 ml-auto text-center space-y-6'>
            <h3 className='uppercase font-medium text-[32px]'>Contact Us</h3>
            <div className='text-xl font-medium space-y-2'>
              <p>123 ABS Street, Uni 21, Bangladesh</p>
              <p>+88 123456789</p>
              <p>Mon - Fri: 08:00 - 22:00</p>
              <p>Sat - Sun: 10:00 - 23:00</p>
            </div>
          </div>
        </div>
        <div className='bg-color2 py-24'>
          <div className='lg:w-1/2 text-center'>
            <h3 className='uppercase font-medium text-[32px] mb-6'>
              Follow Us
            </h3>
            <p className='mb-8 text-xl font-medium'>Join us on social media</p>
            <div className='text-xl flex justify-center items-center gap-8'>
              <FaFacebookF />
              <FaInstagram />
              <FaTwitter />
            </div>
          </div>
        </div>
      </div>
      <div className='bg-color3 py-4 font-medium text-xl text-center'>
        <p>Copyright &copy; Bistro Boss. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
