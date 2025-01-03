import React from "react";
import { motion } from "framer-motion";

function MainLetterContent() {
  return (
    <div className="relative flex justify-center items-center">
      <motion.div
        className="absolute bg-red-100 w-[580px] h-[300px] z-50 delay-500 duration-500 overflow-y-scroll p-5"
        initial={{ y: -800, opacity: 100 }}
        animate={{ y: 100, opacity: 100 }}
        transition={{ type: "linear", duration: 0.5 }}
      >
        <div className="custom-font text-2xl">To：佩佩瑜</div>
        <div className="text-xl">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum
          dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
          incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
          quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
          commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
          velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
          occaecat cupidatat non proident, sunt in culpa qui officia deserunt
          mollit anim id est laborum.
          <div></div>
        </div>
      </motion.div>
    </div>
  );
}

export default MainLetterContent;
