import { SearchIcon } from "@heroicons/react/outline";
import Trending from "./Trending";
import Image from "next/image";

function Widgets() {
  return (
    <div className="hidden lg:inline ml-8 xl:w-[450px] py-1 space-y-5">
      <div className="sticky top-0 py-1.5 bg-black z-50 w-11/12 xl:w-9/12">
        <div className='flex items-center bg-[#202327] p-3 rounded-full relative'>
          <SearchIcon className='text-gray-500 h-5 z-52' />
          <input type="text" className="bg-transparent placeholder-gray-500 outline-none text-[#d9d9d9] 
          absolute inset-0 pl-11 border border-transparent w-full focus:" placeholder='Search Twitter'/>
        </div>
      </div>

      <div className="text-[#d9d9d9] space-y-3 bg-[#15181c] pt-2 rounded-xl w-11/12 xl:w-9/12">
        <h4 className="font-bold text-xl px-4">What's happening</h4>
          <Trending headline="ICC Women’s World Cup 2022: India win by 107 runs" tag="#TeamIndia"/>
          <Trending headline="0.5 BTC" tag="#Cryptocurrencies"/>
          <Trending headline="RuPay" tag="#India"/>
        <button className="hover:bg-white hover:bg-opacity-[0.03] px-4 py-3 cursor-pointer transition duration-200 ease-out flex items-center justify-between w-full text-[#1d9bf0] font-light">
          Show more
        </button>
      </div>

      <div className="text-[#d9d9d9] space-y-3 bg-[#15181c] pt-2 rounded-xl w-11/12 xl:w-9/12">
        <h4 className="font-bold text-xl px-4">Who to follow</h4>
          {/* 1 */}
          <div
            className="hover:bg-white hover:bg-opacity-[0.03] px-4 py-2 cursor-pointer transition duration-200 ease-out flex items-center">
            <Image
              src="https://pbs.twimg.com/profile_images/1485405508366483459/n4XECkwP_400x400.jpg"
              width={50}
              height={50}
              objectFit="cover"
              className="rounded-full"
            />
            <div className="ml-4 leading-5 group">
              <h4 className="font-bold group-hover:underline">
                DataSnips
              </h4>
              <h5 className="text-gray-500 text-[15px]">@datasnips</h5>
            </div>
            <button className="ml-auto bg-white text-black rounded-full font-bold text-sm py-1.5 px-3.5">
              Follow
            </button>
          </div>
          {/* 2 */}
          <div
            className="hover:bg-white hover:bg-opacity-[0.03] px-4 py-2 cursor-pointer transition duration-200 ease-out flex items-center">
            <Image
              src="https://pbs.twimg.com/profile_images/1440775265928417284/ywTBFW6L_400x400.png"
              width={50}
              height={50}
              objectFit="cover"
              className="rounded-full"
            />
            <div className="ml-4 leading-5 group">
              <h4 className="font-bold group-hover:underline">
                Google
              </h4>
              <h5 className="text-gray-500 text-[15px]">@Google</h5>
            </div>
            <button className="ml-auto bg-white text-black rounded-full font-bold text-sm py-1.5 px-3.5">
              Follow
            </button>
          </div>
        <button className="hover:bg-white hover:bg-opacity-[0.03] px-4 py-3 cursor-pointer transition duration-200 ease-out flex items-center justify-between w-full text-[#1d9bf0] font-light">
          Show more
        </button>
      </div>
    </div>
  )
}

export default Widgets