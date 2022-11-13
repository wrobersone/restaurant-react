import React from "react";
import { images } from "../../constants";
import "./Header.css";
import { SubHeading } from "../../components";

const Header = () => (
  <div className="app__header app__wrapper section__padding" id="home">
    <div className="app__wrapper_info">
      <SubHeading title="Chase the new flavor" />
      <h1 className="app__header-h1">The Key to Fine Dining</h1>
      <p className="p__opensans" style={{ margin: "2rem 0" }}>
        Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit Auctor Sit .
        Auctor Sit Iaculis In Arcu. Vulputate Nulla Lobortis Mauris Eget Sit.
      </p>
      <button type="button" className="custom__button" id="menu">
        Explore Menu
      </button>
    </div>

    <div className="app__wrapper_img">
      <img src={images.welcome} alt="" className="" />
    </div>
  </div>
);

export default Header;
