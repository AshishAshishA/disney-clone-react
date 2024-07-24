import React, { useState } from "react";
import {
  HiHome,
  HiMagnifyingGlass,
  HiStar,
  HiPlayCircle,
  HiTv,
} from "react-icons/hi2";
import { HiPlus, HiDotsVertical } from "react-icons/hi";
import logo from "../assets/images/logo.png";
import logo2 from "../assets/images/logo2.png";
import HeaderItem from "./headerItem";

const Header = () => {
  const [showDotMenu, setShowDotMenu] = useState(false);
  const menu = [
    {
      label: "Home",
      icon: HiHome,
    },
    {
      label: "Search",
      icon: HiMagnifyingGlass,
    },
    {
      label: "WatchList",
      icon: HiPlus,
    },
    {
      label: "Originals",
      icon: HiStar,
    },
    {
      label: "Movies",
      icon: HiPlayCircle,
    },
    {
      label: "Series",
      icon: HiTv,
    },
  ];
  return (
    <>
      <div className="fixed w-full flex justify-between p-2">
        <div className="flex gap-4">
          <img src={logo} alt="disney logo" className="w-[80px] h-[30px]" />
          <div className="flex items-center gap-6 sm:gap-4  text-gray-400 ">
            {menu.map((menuItem, index) => (
              <div
                className={index >= 3 ? "hidden md:block" : ""}
                key={index + "upper"}
              >
                <HeaderItem
                  label={menuItem.label}
                  Icon={menuItem.icon}
                  labelHide={"hidden"}
                />
              </div>
            ))}
            <div
              className="md:hidden"
              onClick={() => setShowDotMenu((prev) => !prev)}
            >
              <HeaderItem label={""} Icon={HiDotsVertical} />
              {showDotMenu && (
                <div className="absolute border-2 bg-[#121212] p-2 border-blue-950 mt-3 px-5 text-white">
                  {menu.map(
                    (menuItem, index) =>
                      index >= 3 && (
                        <div className="p-1" key={index + "lower"}>
                          <HeaderItem
                            label={menuItem.label}
                            Icon={menuItem.icon}
                            labelHide={""}
                          />
                        </div>
                      )
                  )}
                </div>
              )}
            </div>
          </div>
        </div>

        <img
          src={logo2}
          alt="logo2"
          className="w-[35px] h-[35px] border-2 rounded-full"
        />
      </div>
    </>
  );
};

export default Header;
