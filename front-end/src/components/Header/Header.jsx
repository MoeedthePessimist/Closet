// packages import
import React, { useState, useEffect, Fragment } from "react";
import { useDispatch } from "react-redux";

// local imports
import { switchMobileDisplay } from "../../store/breakpoint/breakpointSlice";
import ContactHeader from "./ContactHeader/ContactHeader";
import SearchAuthHeader from "./SearchAuthHeader/SearchAuthHeader";

const Header = () => {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const dispatch = useDispatch();

  //   useEffect hook to run initially once the app is loaded to update the global mobileScreen state i.e. if the user opens the website directly on phone
  useEffect(() => {
    dispatch(switchMobileDisplay(screenWidth));
  }, []);

  //   useEffect hook to keep updating the global mobileScreen state.
  useEffect(() => {
    function handleResize() {
      setScreenWidth(window.innerWidth);
      dispatch(switchMobileDisplay(screenWidth));
    }
    window.addEventListener("resize", handleResize);
  }, [screenWidth]);

  return (
    <Fragment>
      <ContactHeader />
      <SearchAuthHeader />
    </Fragment>
  );
};

export default Header;
