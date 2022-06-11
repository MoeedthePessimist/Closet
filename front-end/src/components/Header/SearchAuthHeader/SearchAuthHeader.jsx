// library imports
import React from "react";
import { FaShoppingCart } from "react-icons/fa";
import { IconContext } from "react-icons";
// local imports
import {
  flexRowSpaceBetween,
  responsiveHorizontalPadding,
  responsiveVerticalPadding,
  cartIconStyling,
  flexRowSpaceAround,
} from "../../../helpers/CSSHelper";

import OutlineButton from "../../Button/OutlineButton";
import FilledButton from "../../Button/FilledButton";
import SearchField from "./SearchField";

const SearchAuthHeader = () => {
  return (
    <div
      className={`${flexRowSpaceBetween} ${responsiveVerticalPadding} ${responsiveHorizontalPadding} bg-typography`}
    >
      {/* Search field */}
      <SearchField />

      {/* shopping cart */}
      <div className="w-fit flex justify-end py-3 px-3 rounded-full bg-secondary border-2 border-transparent hover:border-secondary hover:bg-transparent transition-all duration-300 ease-in-out">
        <IconContext.Provider value={cartIconStyling}>
          <FaShoppingCart />
        </IconContext.Provider>
      </div>
    </div>
  );
};

export default SearchAuthHeader;
