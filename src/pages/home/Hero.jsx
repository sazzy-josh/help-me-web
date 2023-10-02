const Hero = () => {
  return (
    <div className="h-[777px] w-full px-[100px] xl:w-[1440px] mx-auto font-Sora gap-[10px] flex items-center justify-center">
      <div className="w-[548px] h-auto">
        <h1 className="text-h2 text-black-600 leading-[100%] font-[700] mb-[20px]">
          Show Them Don’t Just Tell
        </h1>
        <p className="text-black-100 text-[20px] font-Inter mb-[48px]">
          Help your friends and loved ones by creating and sending videos on how
          to get things done on a website.
        </p>
        <button className="px-[24px] py-[22px] bg-primary-600 rounded-[8px] flex items-center gap-[10px] text-pastel-bg text-[18px]">
          <p>Install HelpMeOut</p>
          <img src="/home/arrow-right.svg" alt="arrow-right" />
        </button>
      </div>
      <div className="w-auto h-auto flex gap-[20px] px-[40px] relative">
        <div>
          <img src="/home/grey-grid.svg" alt="" className="absolute right-[-36px] z-[1] top-[-60px]"/>
          <img src="/home/blue-grid.svg" alt="" className="absolute left-[16px] z-[1] bottom-[-86px]"/>
        </div>
        <div className="flex flex-col gap justify-between z-[2]">
          <img src="/home/woman.png" alt="Woman" className="rounded-[8px]" />
          <img src="/home/man.png" alt="man" className="rounded-[8px]" />
        </div>
        <div className="z-[2]">
          <img
            src="/home/woman-using-smartphone.png"
            alt="woman-using-smartphone" className="rounded-[8px]"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
