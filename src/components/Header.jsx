import React from "react";
import { LOGO } from "../utils/constants";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="absolute w-screen px-32 py-1 md:py-2 bg-gradient-to-b from-black z-10 flex flex-row md:flex-row place-items-center justify-between">
      {/* <img className="w-28 md:w-44 -mx-28 md:mx-0" src={LOGO} alt="logo" /> */}
      <div className="flex justify-start w-full md:w-auto">
        <Link to="/">
          <img
            className="w-28 -mx-28 md:w-44 md:mx-0"
            src={LOGO}
            alt="Netflix Logo"
          />
        </Link>
      </div>

      {/* {user && (
          <div className="flex justify-center p-2 -mx-32 gap-1 md:mx-0">
            {showGptSearch && (
              <select
                className="border border-neutral-500 bg-transparent p-1 text-sm md:p-2 md:m-2 text-white rounded-md"
                onChange={handleLanguageChange}
              >
                {SUPPORTED_LANGUAGES.map((lang) => (
                  <option key={lang.identifier} value={lang.identifier}>
                    {lang.name}
                  </option>
                ))}
              </select>
            )}
            <button
              className="bg-blue-950/70 py-1 px-2 md:py-2 md:px-4 md:mx-4 md:my-2 rounded-lg text-white cursor-pointer "
              onClick={handleGptSearchClick}
            >
              {showGptSearch ? "Home Page" : "GPT Search"}
            </button>
            <img
              className="w-10 h-10 md:w-12 md:h-12"
              alt="user-avatar"
              src={USER_AVATAR}
            />
            <button
              onClick={handleSignOut}
              className="font-semibold md:font-bold text-white cursor-pointer"
            >
              (Sign Out)
            </button>
          </div>
        )} */}
    </div>
  );
};

export default Header;
