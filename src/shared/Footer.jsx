import { footerLinks } from "../utils/Home";

const Footer = () => {
  return (
    <div className="h-[347px] py-[98px] w-full bg-primary-600">
      <div className="xl:w-[1440px] mx-auto w-full px-[100px] flex justify-between items-start">
        <div className="flex gap-1 items-center">
          <img src="/shared/white-logo.svg" alt="Logo" />
          <h1 className=" text-h6 font-[700] font-Inter text-white">
            HelpMeOut
          </h1>
        </div>
        <div className="flex gap-[220px] ">
          {footerLinks.map((item) => {
            return (
              <div key={item.title} className="text-white text-[16px] ">
                <h2 className="font-Sora font-[600] mb-[26px]">
                  {item.header}
                </h2>
                <div className="font-Work-Sans flex flex-col gap-[24px]">
                  <h4>{item.link1}</h4>
                  <h4>{item.link2}</h4>
                  <h4>{item.link3}</h4>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Footer;
