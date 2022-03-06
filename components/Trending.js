import { DotsCircleHorizontalIcon } from '@heroicons/react/outline'
import { DotsHorizontalIcon } from '@heroicons/react/solid'
import Image from 'next/image'
import React from 'react'

function Trending({headline, tag}) {
  return (
    <div className="hover:bg-white hover:bg-opacity-[0.03] px-4 py-2 cursor-pointer transition duration-200 ease-out flex items-center justify-between">
    <div className="space-y-0.5">
      <p className="text-[#6e767d] text-xs font-medium"></p>
      <h6 className="font-bold max-w-[250px] text-sm">
        {headline}
      </h6>
      <p className="text-[#6e767d] text-xs font-medium max-w-[250px]">
        Trending with{" "}
        <span className="tag">
          {tag}
        </span>
      </p>
    </div>

    <div className="icon group">
      <DotsCircleHorizontalIcon className="h-5 text-[#6e767d] group-hover:text-[#1d9bf0]" />
    </div>
   
  </div>
  )
}

export default Trending