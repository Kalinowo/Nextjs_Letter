"use client";
import React, { useState, useRef } from "react";
import { motion } from "framer-motion";
import Image from "next/legacy/image";
import { ShimmerButton } from "../components/ui/ShimmerButton";
import { BsBalloonHeartFill } from "react-icons/bs";
import { TbArrowBigDownFilled } from "react-icons/tb";
import MainLetterContent from "../components/MainLetterContent";

export default function Home() {
  const [open, setOpen] = useState<boolean>(false);
  const [flipSide, setFlipSide] = useState<boolean>(false);
  const [readLetter, setReadLetter] = useState<boolean>(false);

  const flipTrigger = () => {
    setFlipSide(!flipSide);
    setOpen(false);
    setReadLetter(false);
  };

  return (
    <div className="relative h-screen flex flex-col justify-center items-center gap-5">
      {readLetter && <MainLetterContent />}
      <div className="group flex flex-col [perspective:1000px]">
        <div
          className={
            flipSide
              ? "relative transition-all duration-500 preserve-3d [backface-visibility:hidden]"
              : "relative transition-all duration-500 preserve-3d [transform:rotateY(180deg)]"
          }
        >
          <div className="relative">
            <div
              onClick={readLetter ? () => {} : () => setOpen(!open)}
              className={
                open
                  ? "absolute border-l-[300px] border-l-transparent border-r-[300px] border-r-transparent border-t-[150px] border-t-white transform rotate-180 origin-top cursor-pointer"
                  : "absolute border-l-[300px] border-l-transparent border-r-[300px] border-r-transparent border-t-[170px] border-t-white drop-shadow cursor-pointer z-10"
              }
            ></div>
            {flipSide && !open && (
              <div className="absolute top-[110px] right-[282px] text-4xl text-blue-400 z-30 ">
                <TbArrowBigDownFilled className="animate-bounce" />
              </div>
            )}

            {/* inside envelope */}
            <div className="relative flex justify-center items-center bg-white h-[300px] w-[600px] shadow-[inset_0_5px_5px_0_rgba(0,0,0,0.09)] cursor-pointer">
              {open && !readLetter && (
                <motion.div
                  onClick={() => setReadLetter(!readLetter)}
                  className="bg-red-100 w-[580px] h-[300px]"
                  initial={{ y: 0, opacity: 100 }}
                  animate={{ y: -15, opacity: 100 }}
                  transition={{ type: "linear", duration: 0.5 }}
                ></motion.div>
              )}
              {open && readLetter && (
                <motion.div
                  className="bg-red-100 w-[580px] h-[300px]"
                  initial={{ y: 0, opacity: 100 }}
                  animate={{ y: -800, opacity: 100 }}
                  transition={{ type: "linear", duration: 0.5 }}
                ></motion.div>
              )}
            </div>
            {/* right triangle */}
            <div className="absolute left-[285px] -top-[15px] border-l-[150px] border-l-transparent border-r-[150px] border-r-transparent border-t-[330px] border-t-white transform rotate-90 drop-shadow pointer-events-none"></div>
            {/* left triangle */}
            <div className="absolute right-[285px] -top-[15px] border-l-[150px] border-l-transparent border-r-[150px] border-r-transparent border-t-[330px] border-t-white transform -rotate-90 drop-shadow pointer-events-none"></div>
            {/* bottom triangle */}
            <div className="absolute bottom-0 border-l-[300px] border-l-transparent border-r-[300px] border-r-transparent border-t-[200px] border-t-white transform rotate-180 drop-shadow"></div>
          </div>
          {!flipSide && (
            <div className="flex flex-col justify-between absolute inset-0 h-full w-full rounded-xl bg-white px-12 text-center [transform:rotateY(180deg)] [backface-visibility:hidden] z-20">
              <div className="z-20 text-[80px] mr-5">Happy Birthday</div>
              <div className="z-20 text-[50px] mb-5">To：佩佩瑜</div>
              <div className="z-20 text-[20px] custom-font">
                WISH YOU ALL THE BEST!
              </div>
              <BsBalloonHeartFill className="absolute top-3 right-0 text-8xl text-red-300" />
              <BsBalloonHeartFill className="absolute bottom-1 left-0 text-8xl text-red-300" />
              <div className="absolute inset-0 [zIndex:-1] opacity-60">
                <Image
                  src="/NachoNeko1.png"
                  alt="picture of the project"
                  objectFit="cover"
                  layout="fill"
                  priority={true}
                />
              </div>
            </div>
          )}
        </div>
      </div>
      <ShimmerButton onClick={flipTrigger}>點這裡打開</ShimmerButton>
    </div>
  );
}
