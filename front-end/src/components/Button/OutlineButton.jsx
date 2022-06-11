import React from "react";
import {
  responsiveOutlinedBtnStyling,
  responsiveTextSize,
} from "../../helpers/CSSHelper";

const FilledButton = (props) => {
  console.log(props);

  return (
    <p
      className={`${responsiveOutlinedBtnStyling} bg-transparent ${props.font_color} ${props.overlay_color} ${props.hover_font_color} ${props.border_color}`}
    >
      {props.label}
    </p>
  );
};

export default FilledButton;
