"use client"

import { Card } from "@/components/ui/card"
import { useEffect, useState } from "react"

export default function FunDay() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 flex items-center justify-center p-4">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] opacity-5">
          <div className="absolute inset-0 border border-gray-500 rotate-45 rounded-2xl"></div>
          <div className="absolute inset-12 border border-gray-500 rotate-45 rounded-xl"></div>
          <div className="absolute inset-24 border border-gray-500 rotate-45 rounded-lg"></div>
        </div>
      </div>

      <Card
        className={`relative z-10 bg-gray-800/40 border-gray-600/30 p-10 max-w-2xl w-full backdrop-blur-md shadow-2xl transition-all duration-1000 ease-out ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        <div className="space-y-8">
          <div className="text-center space-y-6">
            <div className="space-y-3">
              <h1 className="text-5xl font-light text-white tracking-wide">Fun Day</h1>
              <div className="w-16 h-px bg-gradient-to-r from-transparent via-gray-400 to-transparent mx-auto"></div>
            </div>
            <p className="text-gray-300 text-base leading-relaxed font-light">
              hello all i got fun things for a day... like a fun p.r0xy?
none of these links were made by me, if there are any problems or have any suggestions for sites/movies dm me on discord @vrhd <3
            </p>
          </div>

          <div className="space-y-3">
            <a
              href="https://grimace-shake.skibidi-rizz-gyatt-fanum-tax-sigma-ohio.ct.ws/"
              target="_blank"
              rel="noopener noreferrer"
              className="block bg-gray-700/50 hover:bg-gray-600/60 border border-gray-600/40 hover:border-gray-500/60 text-white py-3 px-1 rounded-xl text-sm font-medium transition-all duration-300 hover:scale-105 hover:shadow-lg backdrop-blur-sm text-center"
            >
              space
            </a>

            <a
              href="https://tststststststststststststststststststststs.zavoj.ch/"
              target="_blank"
              rel="noopener noreferrer"
              className="block bg-gray-700/50 hover:bg-gray-600/60 border border-gray-600/40 hover:border-gray-500/60 text-white py-3 px-1 rounded-xl text-sm font-medium transition-all duration-300 hover:scale-105 hover:shadow-lg backdrop-blur-sm text-center"
            >
              intersteller
            </a>

            <a
              href="https://drive.google.com/drive/folders/1UuYKCOYc-V2yiMhFz53F29zeu-3PDS27?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="block bg-gray-700/50 hover:bg-gray-600/60 border border-gray-600/40 hover:border-gray-500/60 text-white py-3 px-1 rounded-xl text-sm font-medium transition-all duration-300 hover:scale-105 hover:shadow-lg backdrop-blur-sm text-center"
            >
              back to the future 1,2,3
            </a>

            <a
              href="https://docs.google.com/document/d/1nFpIKWNnsDdsRc5UWyZvZbwqjkSWRt_f-XBFuSZbFcE/edit?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="block bg-gray-700/50 hover:bg-gray-600/60 border border-gray-600/40 hover:border-gray-500/60 text-white py-3 px-1 rounded-xl text-sm font-medium transition-all duration-300 hover:scale-105 hover:shadow-lg backdrop-blur-sm text-center"
            >
              reds exp corner
            </a>

            <a
              href="https://classlink.riversideacademy.site"
              target="_blank"
              rel="noopener noreferrer"
              className="block bg-gray-700/50 hover:bg-gray-600/60 border border-gray-600/40 hover:border-gray-500/60 text-white py-3 px-1 rounded-xl text-sm font-medium transition-all duration-300 hover:scale-105 hover:shadow-lg backdrop-blur-sm text-center"
            >
              frogies arcade
            </a>

            <a
              href="https://peak.conyser.cl"
              target="_blank"
              rel="noopener noreferrer"
              className="block bg-gray-700/50 hover:bg-gray-600/60 border border-gray-600/40 hover:border-gray-500/60 text-white py-3 px-1 rounded-xl text-sm font-medium transition-all duration-300 hover:scale-105 hover:shadow-lg backdrop-blur-sm text-center"
            >
              waves
            </a>

            <a
              href="https://jesuschristforlife.org"
              target="_blank"
              rel="noopener noreferrer"
              className="block bg-gray-700/50 hover:bg-gray-600/60 border border-gray-600/40 hover:border-gray-500/60 text-white py-3 px-1 rounded-xl text-sm font-medium transition-all duration-300 hover:scale-105 hover:shadow-lg backdrop-blur-sm text-center"
            >
              velara
            </a>

            <a
              href="https://achievementnetwork.gq"
              target="_blank"
              rel="noopener noreferrer"
              className="block bg-gray-700/50 hover:bg-gray-600/60 border border-gray-600/40 hover:border-gray-500/60 text-white py-3 px-1 rounded-xl text-sm font-medium transition-all duration-300 hover:scale-105 hover:shadow-lg backdrop-blur-sm text-center"
            >
              rammerhead (use at your own risk)
            </a>

            <a
              href="https://intrinsic.observer"
              target="_blank"
              rel="noopener noreferrer"
              className="block bg-gray-700/50 hover:bg-gray-600/60 border border-gray-600/40 hover:border-gray-500/60 text-white py-3 px-1 rounded-xl text-sm font-medium transition-all duration-300 hover:scale-105 hover:shadow-lg backdrop-blur-sm text-center"
            >
              radius
            </a>
          </div>
        </div>
      </Card>
    </div>
  )
}
