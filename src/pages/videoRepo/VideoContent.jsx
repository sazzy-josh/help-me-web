/* eslint-disable react/prop-types */
const VideoContent = ({lastObject}) => {
  return (
    <div className="xl:w-[1440px] mx-auto px-[100px] font-Sora w-full h-[970px] pt-[40px] flex justify-between items-start gap-[40px] my-[64px] ">
      <div className="flex flex-col items-start gap-[64px] w-[550px]">
        <div>
          <h2 className="text-black-600 text-[45px] font-[700] mb-[48px]">
            Your video is ready!
          </h2>
          <div>
            <h4 className="text-[16px] text-gray-400 mb-[9px]">Name:</h4>
            <div className="flex items-center gap-[24px]">
              <h3 className="text-[24px] text-primary-400 font-[600]">
                {lastObject.Title}
              </h3>
              <img src="/video-repo/edit.svg" alt="edit" />
            </div>
          </div>
        </div>
        <div className="py-[12px] px-[24px] bg-gray-200 rounded-[16px] h-[64px] w-full flex items-center justify-between">
          <p className="text-black-400 text-[18px] font-[400]">
            enter email of receiver
          </p>
          <div className="px-[18px] py-[10px] rounded-[8px] bg-primary-400 text-pastel-bg font-Work-Sans">
            Send
          </div>
        </div>
        <div className="w-full">
          <h2 className="text-black-600 font-Sora text-[20px] mb-[16px] font-[600] ">
            Video Url
          </h2>
          <div className="p-[12px] border-[1px] border-primary-200 rounded-[16px] h-[64px] w-full flex items-center justify-between">
            <p className="text-black-400 text-[16px] font-[400] leading-[24.8px] font-Work-Sans">
              https://www.helpmeout/Untitled_Video_20232509
            </p>
            <div className="px-[18px] py-[10px] rounded-[8px] border-[1px] border-primary-400 font-[500] flex items-center gap-[8px] text-primary-600 font-Work-Sans">
              <img src="/video-repo/copy.svg" alt="" />
              <h3>Copy</h3>
            </div>
          </div>
        </div>
        <div className="">
          <p className="text-black-600 font-Sora text-[16px] mb-[16px] font-[600]">
            Share your video
          </p>
          <div className="flex gap-[16px]">
            <div className="flex gap-[8px] px-[16px] py-[12px] items-center border-[1px] border-black-600 rounded-[8px]">
              <img
                src="/login/Facebook.svg"
                alt="facebook"
                className="w-[24px] h-[24px]"
              />
              <h3 className="text-black-600 font-Sora text-[16px] font-[500]">
                Facebook
              </h3>
            </div>
            <div className="flex gap-[8px] px-[16px] py-[12px] items-center border-[1px] border-black-600 rounded-[8px]">
              <img
                src="/video-repo/whatsapp.svg"
                alt="Whatsapp"
                className="w-[24px] h-[24px]"
              />
              <h3 className="text-black-600 font-Sora text-[16px] font-[500]">
                Whatsapp
              </h3>
            </div>
            <div className="flex gap-[8px] px-[16px] py-[12px] items-center border-[1px] border-black-600 rounded-[8px]">
              <img
                src="/video-repo/telegram.svg"
                alt="Telegram"
                className="w-[24px] h-[24px]"
              />
              <h3 className="text-black-600 font-Sora text-[16px] font-[500]">
                Telegram
              </h3>
            </div>
          </div>
        </div>
      </div>
      <div className="w-[575px] h-[473px] rounded-[8px] bg-gray-200 border-[1px] border-primary-400 flex flex-col overflow-hidden">
        <video className="w-full h-full" controls>
          <source src={lastObject.file} type="video/webm" />
          {/* You can add additional source elements for other video formats if needed */}
          Your browser does not support the video tag.
        </video>

        <div className="w-full h-[80px] bg-white flex justify-between items-center px-[40px]">
          <h3 className="font-Inter text-primary-200 font-[500] text-[24px]">
            0:00 / -:--
          </h3>
          <div className="h-full flex gap-[40px] justify-center ">
            <div className="h-full flex flex-col justify-center items-center">
              <img src="/video-repo/play-circle.svg" alt="play" className="w-[24px] h-[24px]"/>
              <p className="font-Work-Sans text-black-600 font-[500] text-[12px]">
                Play
              </p>
            </div>
            <div className="h-full flex flex-col justify-center items-center">
              <img src="/video-repo/volume-high.svg" alt="volume" className="w-[24px] h-[24px]"/>
              <p className="font-Work-Sans text-black-600 font-[500] text-[12px]">
                Volume
              </p>
            </div>
            <div className="h-full flex flex-col justify-center items-center">
              <img src="/video-repo/setting.svg" alt="setting" className="w-[24px] h-[24px]"/>
              <p className="font-Work-Sans text-black-600 font-[500] text-[12px]">
                Settings
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoContent;
