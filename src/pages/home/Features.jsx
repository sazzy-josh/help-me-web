import { features } from "../../utils/Home";

const Features = () => {
  return (
    <div className="h-[766px] w-full px-[100px] xl:w-[1440px] mx-auto font-Sora gap-[10px] flex flex-col items-center justify-center py-[80px]">
      <h1 className="text-black-600 text-[40px] font-[700] text-center mb-[8px]">
        Features
      </h1>
      <p className="text-black-100 text-[20px] font-Inter mb-[64px]">
        Key Highlights of Our Extension
      </p>
      <div className="flex items-center justify-between gap-[56px] w-full ">
        <div className="flex flex-col gap-[48px] w-[1/2">
          {features.map((feature) => {
            return (
              <div
                key={feature.title}
                className="flex h-auto items-start gap-[16px] "
              >
                <div className="bg-primary-400 p-[8px] rounded-full w-auto h-auto">
                  <img src={feature.image} alt={feature.title} className="w-[24px]" />
                </div>
                <div className="h-auto flex flex-col justify-start w-[484px]">
                  <h2 className="font-Inter text-[28px] text-primary-600 font-[600]">
                    {feature.title}
                  </h2>
                  <p className="text-[20px] text-gray-400 leading-[151.43%] font-Work-Sans">
                    {feature.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
        <div>
          <img src="/home/Video-Repository.svg" alt="Video-Repository" />
        </div>
      </div>
    </div>
  );
};

export default Features;
