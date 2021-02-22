import React, { useRef, useEffect } from "react"

const Iframe = () => {
  return (
    <div className="h-full">
      <iframe
        src="https://www.youtube.com/embed/live_stream?channel=UC8tLzrxYWJb000rAJdwKncw"
        className="w-full h-full"
        frameborder="0" allowfullscreen></iframe>
    </div>
  )
}

export default Iframe