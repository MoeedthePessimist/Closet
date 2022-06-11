// libraries import
import React from "react";
import { useSelector } from "react-redux";
import { FaFacebook, FaInstagram, FaWhatsapp } from "react-icons/fa";
import { IconContext } from "react-icons";

// local imports
import {
  responsiveHorizontalPadding,
  responsiveTextSize,
  responsiveVerticalPadding,
  flexRowSpaceBetween,
  headerIconsStyling,
  flexRowCenter,
} from "../../../helpers/CSSHelper";
import OutlineButton from "../../Button/OutlineButton";
import FilledButton from "../../Button/FilledButton";

const ContactHeader = () => {
  const isMobile = useSelector((state) => state.mobiledisplay.isMobile);

  return (
    <div
      className={`${responsiveHorizontalPadding} ${responsiveVerticalPadding} ${responsiveTextSize} ${flexRowSpaceBetween} w-full bg-secondary `}
    >
      {/* social logo links */}
      <div className={`${flexRowSpaceBetween} w-1/2 md:w-1/4 `}>
        <IconContext.Provider value={headerIconsStyling}>
          <FaFacebook />
        </IconContext.Provider>
        <IconContext.Provider value={headerIconsStyling}>
          <FaInstagram />
        </IconContext.Provider>
        <IconContext.Provider value={headerIconsStyling}>
          <FaWhatsapp />
        </IconContext.Provider>
        <p className="text-xs md:text-sm text-primary ">+0900-78601</p>
      </div>

      {/* phone no for mobile screen
      {isMobile && (
        <div>
          <p className={`text-sm text-primary ${flexRowCenter}`}>+0900-78601</p>
        </div>
      )} */}

      {/* tablet and desktop screen logo */}

      {!isMobile && (
        <div className="w-2/4 text-center justify-center">
          <h1 className="text-2xl font-Poppins text-primary">CLOSET</h1>
        </div>
      )}

      {/* Auth */}
      <div className={`${flexRowSpaceBetween} w-2/6`}>
        <OutlineButton
          label={"LOGIN"}
          border_color={`bg-primary`}
          font_color={`text-typography`}
          overlay_color={`before:bg-typography`}
          hover_font_color={`hover:text-primary`}
        />
        <FilledButton
          label={"SIGN UP"}
          background_color={`bg-primary`}
          font_color={`text-typography`}
          overlay_color={`before:bg-typography`}
          hover_font_color={`hover:text-primary `}
        />
      </div>
      {/* )} */}
    </div>
  );
};

export default ContactHeader;
