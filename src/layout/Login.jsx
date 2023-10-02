import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="white w-full xl:w-[1440px] mx-auto h-[100dvh] font-Inter">
      {/* Parent container */}
      <div className="pt-[80px] pb-[128px] px-[100px]">
        {/* Logo container */}
        <Link to='/' className="flex gap-1 items-center mb-[38px]">
          <img src="/shared/logo.svg" alt="Logo" />
          <h1 className=" text-h6 font-[700] font-Inter">HelpMeOut</h1>
        </Link>
        {/* Login container */}
        <div className="w-full flex flex-col items-center justify-center gap-[32px]">
          {/* Form legend */}
          <div className="flex flex-col items-center text-center ">
            <h2 className="text-black-600 text-[32px] tracking-[0.32px] leading-[150%] font-[700]">
              Log in or Sign up
            </h2>
            <p className="w-[321px] text-black-600 text-[14px] tracking-[0.14px] leading-[150%] font-[300]">
              Join millions of others in sharing successful moves on HelpMeOut.
            </p>
          </div>
          {/* Sign in container */}
          <div className="flex flex-col gap-[24px]">
            <div className="h-[48px] w-[475px] border-[1px] rounded-[12px] border-black-600 flex justify-center items-center gap-[16px]">
              <img src="/login/Google.svg" alt="Google Icon" />
              <h4 className="text-black-600 text-[16px] tracking-[0.16px] leading-[150%] font-[500]">
                Continue with Google
              </h4>
            </div>
            <div className="h-[48px] w-[475px] border-[1px] rounded-[12px] border-black-600 flex justify-center items-center gap-[16px]">
              <img src="/login/Facebook.svg" alt="Facebook Icon" />
              <h4 className="text-black-600 text-[16px] tracking-[0.16px] leading-[150%] font-[500]">
                Continue with Facebook
              </h4>
            </div>
          </div>
          {/* Or container */}
          <div className="w-full flex gap-[10px] items-center justify-center">
            <div className="w-[200px] bg-gray-200 h-[1px]" />
            <p className="text-[14px] font-[500] tracking-[0.16px] leading-[150%] text-gray-200">
              or
            </p>
            <div className="w-[200px] bg-gray-200 h-[1px]" />
          </div>
          {/* Sign up form */}
          <div className="flex flex-col gap-[16px]">
            {/* Email container */}
            <div className="flex flex-col gap-[12px] font-Work-Sans font-[500]">
              <label htmlFor="email" className="text-black-600">
                Email
              </label>
              <input
                id="email"
                placeholder="Enter your email address"
                className="h-[48px] w-[475px] px-[16px] border-[1px] rounded-[12px] placeholder:text-gray-300 border-primary-100 flex justify-center items-center gap-[16px]"
              />
            </div>
            {/* Password Container */}
            <div className="flex flex-col gap-[12px] font-Work-Sans font-[500]">
              <label htmlFor="password" className="text-black-600">
                Password
              </label>
              <input
                id="password"
                placeholder="Enter your password"
                className="h-[48px] w-[475px] px-[16px] border-[1px] rounded-[12px] placeholder:text-gray-300 border-primary-100 flex justify-center items-center gap-[16px]"
              />
            </div>
          </div>
          {/* Submit button */}
          <button className="h-[48px] w-[475px] font-Work-Sans font-[500] rounded-[8px] text-[18px] text-pastel-bg bg-primary-600 flex justify-center items-center">
            Sign Up
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
