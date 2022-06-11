// library imports
import React from "react";
import { useSelector } from "react-redux";
import { FaSearch } from "react-icons/fa";
import { IconContext } from "react-icons/lib";

// local imports
import {
  searchIconStyling,
  flexRowSpaceBetween,
  searchFieldBorderStyling,
  responsiveTextSize,
} from "../../../helpers/CSSHelper";

const SearchField = () => {
  const isMobile = useSelector((state) => state.mobiledisplay.isMobile);

  return (
    <div
      className={`w-2/3 ${searchFieldBorderStyling} py-0.2 px-2 md:py-1 rounded-full ${flexRowSpaceBetween} bg-transparent`}
    >
      <input
        type="text"
        className={`w-2/3 bg-transparent outline-none text-[10px] md:text-sm placeholder:text-hints placeholder:text-[${
          isMobile ? `10px` : `12px`
        }] placeholder:md:text-sm text-primary italic text-sm font-Poppins`}
        placeholder={!isMobile ? "Search Items" : "Search"}
      />

      <button>
        <IconContext.Provider
          value={
            !isMobile ? searchIconStyling : { color: "#808080", size: "10px" }
          }
        >
          <FaSearch />
        </IconContext.Provider>
      </button>
    </div>
  );
};

export default SearchField;
