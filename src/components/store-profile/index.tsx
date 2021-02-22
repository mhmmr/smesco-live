import { data } from "autoprefixer"
import React from "react"

const StoreProfile = ({name}) => (
  <div className="flex items-center">
    <div className="rounded-full flex store-profile items-center justify-center bg-gradient-to-r from-purple-400 via-pink-500 to-red-500" style={{height: 28, width: 28}}>
      <svg width="16" height="16" viewBox="0 0 16 18" fill="none" xmlns="http://www.w3.org/2000/svg" style={{top: -1, position: "relative"}}>
        <rect x="1" y="5" width="14" height="12" rx="2" stroke="white" stroke-width="2"/>
        <path d="M5 4C5 2.34315 6.34315 1 8 1C9.65685 1 11 2.34315 11 4V5H5V4Z" stroke="white" stroke-width="2"/>
        </svg>
    </div>
    <div className="font-semibold pl-2">
      <h3>{name}</h3>
    </div>
  </div>
)

export default StoreProfile