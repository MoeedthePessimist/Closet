import React from "react";
import {
  responsiveFilledBtnStyling,
  responsiveTextSize,
} from "../../helpers/CSSHelper";

const FilledButton = (props) => {
  console.log(props);

  return (
    <p
      className={`${responsiveFilledBtnStyling} ${props.background_color} ${props.font_color} ${props.overlay_color} ${props.hover_font_color}`}
    >
      {props.label}
    </p>
  );
};

export default FilledButton;
