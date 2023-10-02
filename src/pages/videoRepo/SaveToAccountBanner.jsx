const SaveToAccountBanner = () => {
  return (
    <div className="xl:w-[1440px] mx-auto w-full py-[48px] flex flex-col justify-center items-center gap-[40px] my-[64px]">
      <h3 className="font-Sora font-[600] text-[24px] text-black-600 w-[653px] text-center">
        To ensure the availability and privacy of your video, we recommend
        saving it to your account.
      </h3>
      <button className="font-Work-Sans text-[16px] font-[500px] text-pastel-bg bg-primary-600 px-[32px] py-[16px] rounded-[8px]">
        Save Video
      </button>
          <h2 className="font-Sora text-[24px] font-[600] text-gray-400">Don’t have an account? <span className="text-primary-600 underline">Create account</span></h2>
    </div>
  );
};

export default SaveToAccountBanner;
