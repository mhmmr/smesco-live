import React from "react"
import { StaticImage } from "gatsby-plugin-image"

const Footer = () => {
  return (
    <footer className="py-6 text-gray-500 mt-16">
      <div className="container">
        <div className="text-center">
          <div>
            <span>Didukung oleh Platform</span>
            <ul className="flex items-center -mx-1 mb-2 justify-center">
              <li className="px-1">
                <StaticImage src="../../images/bb.png" alt=""/>
              </li>
              <li className="px-1">
                <StaticImage src="../../images/gojek.png" alt=""/>
              </li>
            </ul>
          </div>
          <div>
            <span>Copyright © 2021 Smesco. All rights reserved.</span>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer