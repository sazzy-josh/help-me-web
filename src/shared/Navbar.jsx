import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="w-full px-[100px] xl:w-[1440px] text-primary-600 mx-auto h-[84px] flex justify-between items-center">
      <Link to='/' className="flex gap-1 items-center">
        <img src="/shared/logo.svg" alt="Logo" />
        <h1 className=" text-h6 font-[700] font-Inter">HelpMeOut</h1>
      </Link>
      <div className="text-h6 font-Work-Sans font-[500] flex items-center gap-[39px]">
        <h1>Features</h1>
        <h1>How It Works</h1>
      </div>
      <Link to='/login' className="text-h6 font-Work-Sans font-[500]">Get Started</Link>
    </div>
  );
};

export default Navbar;
