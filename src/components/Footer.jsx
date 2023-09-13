import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="mt-16 mb-10  grid place-items-center">
      <div>
        <div className="flex space-x-5 my-2 justify-center ">
          <FaFacebook />
          <FaInstagram />
          <FaTwitter />
          <FaYoutube />
        </div>
        <div className="flex space-x-5">
          <p>Conditions of Use</p>
          <p>Privacy & Policy</p>
          <p>Press Room</p>
        </div>
        <div className="text-sm text-center my-2">
          &copy; 2021 MovieBox By King Austin
        </div>
      </div>
    </footer>
  );
};

export default Footer;
