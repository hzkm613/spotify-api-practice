import React from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/image/logo.png";
import SmartToyIcon from "@mui/icons-material/SmartToy";
import MusicNoteIcon from "@mui/icons-material/MusicNote";
import StoreIcon from "@mui/icons-material/Store";

const Navbar = () => {
  return (
    <div className="flex flex-col items-center sm:w-1/8 md:w-1/6 lg:w-1/8 xl:w-1/8 h-full bg-gray-800 text-white p-4">
      <div className="flex justify-center w-24 h-24 m-6">
        <img
          src={Logo}
          alt="Dr.Gabba Logo"
          className="w-full h-full object-contain"
        />
      </div>
      <ul className="space-y-8">
        <li>
          <Link to={"/"}>
            <MusicNoteIcon className="text-white" />
          </Link>
        </li>
        <li>
          <Link to={"/about"}>
            <SmartToyIcon className="text-white" />
          </Link>
        </li>
        <li>
          <a href="https://drgabba.com/en-usd" target="_blank">
            <StoreIcon className="text-white" />
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
