import React from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/image/logo.png";
import SmartToyIcon from "@mui/icons-material/SmartToy";
import MusicNoteIcon from "@mui/icons-material/MusicNote";

const Navbar = () => {
  return (
    <div className="flex flex-col items-center w-1/2 h-full bg-gray-800 text-white p-4">
      <div className="flex justify-center mb-4">
        <img
          src={Logo}
          alt="Dr.Gabba Logo"
          className="w-24 h-24 object-contain"
        />
      </div>
      <ul className="space-y-8">
        <li>
          <Link to={"/"}>
            <MusicNoteIcon />
          </Link>
        </li>
        <li>
          <Link to={"/about"}>
            <SmartToyIcon />
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
