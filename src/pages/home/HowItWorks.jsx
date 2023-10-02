import { howItWorks } from "../../utils/Home";

const HowItWorks = () => {
  return (
    <div className="h-[897px] w-full px-[100px] xl:w-[1440px] mx-auto font-Sora gap-[10px] flex flex-col items-center justify-center pt-[103px]">
      <h1 className="text-black-600 text-[40px] font-[700] text-center mb-[58px]">
        How it works
      </h1>
      <div className="flex gap-[83px] text-white">
        {howItWorks.map((item, index) => {
          return (
            <div
              key={item.title}
              className="flex flex-col justify-center items-center"
            >
              <div className="bg-primary-600 p-[8px] rounded-full w-[67px] h-[67px] flex items-center mb-[32px] justify-center text-[32px] font-[700] font-Inter">
                {index + 1}
              </div>
              <div className="text-center w-full">
                <h2 className="font-Inter text-[28px] text-primary-600 font-[600] mb-[16px]">
                  {item.title}
                </h2>
                <p className="text-[20px] text-gray-400 leading-[151.43%] font-Work-Sans mb-[28px]">
                  {item.desc}
                </p>
              </div>
              <img src={item.image} alt="vector" />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default HowItWorks;
