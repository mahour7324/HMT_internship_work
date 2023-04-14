import { getDefaultNormalizer } from "@testing-library/react";
import React from "react";
import { link } from "react-router-dom";
import orangeBallBlur from "../../src/pages/assets/images/objects/orange-ball-blur.png";
import orangeBall from "../../src/pages/assets/images/objects/orange-ball.png";
import sparkleLight from "../../src/pages/assets/images/objects/sparkle-light.png";
import violetBallBlur from "../../src/pages/assets/images/objects/violet-ball-blur.png";
import violetBall from "../../src/pages/assets/images/objects/violet-ball.png";
import "../";

const Home = () => {
  return (
    <>
      <div>
        <div
          id="uni_mobile_menu"
          className="uni-mobile-menu uk-offcanvas"
          data-uk-offcanvas="mode: push; overlay: true; flip: true; selPanel: .uk-offcanvas-bar-panel;"
        >
          <div className="uk-offcanvas-bar-panel uk-panel dark:uk-background-gray-100">
            <div
              className="uni-mobile-menu-wrap uk-flex-column uk-flex-between"
              data-uk-height-viewport="offset-bottom: true;"
            >
              <div className="uni-mobile-menu-content">
                <header className="uk-card uk-card-2xsmall uk-flex-middle uk-flex-between">
                  <div className="uk-flex-1">
                    <button
                      aria-label="Close Menu"
                      className="uk-offcanvas-close uk-button uk-button-small uk-button-icon uk-button-default uk-button-outline uk-radius-circle"
                      type="button"
                    >
                      <i
                        className="uk-icon-small"
                        data-feather="arrow-left"
                      ></i>
                    </button>
                  </div>
                  <div>
                    <h5 className="uk-h5 uk-text-uppercase uk-margin-remove">
                      Navigation
                    </h5>
                  </div>
                  <div className="uk-flex-1"></div>
                </header>
                <hr className="uk-margin-remove" />
                <div className="uk-card uk-card-small">
                  <div className="uk-panel">
                    <ul className="uk-nav uk-nav-default">
                      <li className="uk-nav-header">Homepages</li>
                      <li>
                        <a href="https://nerko-gatsbyjs.vercel.app/">
                          Landing 01
                        </a>
                      </li>
                      <li>
                        <a href="https://nerko-gatsbyjs.vercel.app/home-02/">
                          Landing 02
                        </a>
                      </li>
                      <li>
                        <a href="https://nerko-gatsbyjs.vercel.app/home-03/">
                          Landing 03
                        </a>
                      </li>
                      <li className="uk-nav-header">Inner pages</li>
                      <li>
                        <a href="#">Connect wallet</a>
                      </li>
                      <li>
                        <a href="https://nerko-gatsbyjs.vercel.app/nothing/">
                          404 page
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* <!-- User search modal --> */}
        {/* |-------------------------------------------------------------------------------------------| */}
        {/* <div
          id="uni_search_modal"
          className="uk-modal-full uk-modal"
          data-uk-modal=""
        >
          <div className="uk-modal-dialog dark:uk-background-white-5">
            <button
              className="uk-modal-close-full uk-position-small dark:uk-text-white"
              type="button"
            >
              <i data-feather="x"></i>
            </button>
            <div className="container">
              <div
                className="uk-section-2xlarge uk-width-2xlarge@m uk-margin-auto"
                data-uk-height-viewport=""
              >
                <form
                  className="search-form uk-search uk-search-large uk-width-1-1"
                  action="./search-ajax.html"
                  method="get"
                >
                  <input
                    className="uk-search-input uk-text-center uk-border-bottom"
                    type="search"
                    name="s"
                    autoComplete="off"
                    placeholder="Search item or artist.."
                  />
                  <div className="search-results uk-margin-medium-top uk-hidden">
                    <div className="search-results-content uk-panel uk-hidden"></div>
                    <div className="search-results-loading uk-flex-center uk-flex-middle uk-height-1-1">
                      <span
                        className="uk-flex-center uk-flex-middle"
                        data-uk-spinner="ratio: .8"
                      ></span>
                    </div>
                  </div>
                  <noscript>
                    <button
                      aria-label="Submit"
                      type="submit"
                      className="uk-form-icon uk-form-icon-flip"
                    >
                      <i className="uk-icon-xsmall" data-feather="search"></i>
                    </button>
                  </noscript>
                </form>
                <div className="uk-text-small uk-text-center uk-margin-top uk-margin-large-top@m">
                  Type your keyword and hit "enter" for search and hit "esc" to
                  close!
                </div>
              </div>
            </div>
          </div>
        </div> */}
        {/* |-------------------------------------------------------------------------------------------| */}

        <div className="wrap">
          <div
            id="wrapper"
            className="uk-background-gray-100 uk-text-white uk-dark"
            style={{ overflow: "hidden" }}
          >
            {/* <!-- Overview --> */}
            <div
              id="header"
              className="uk-panel uk-overflow-hidden uk-position-z-index uk-background-gray-100"
              style={{ position: "sticky" }}
            >
              {/* <div
                className="uk-position-top uk-position-z-index-negative uk-blend-hard-light"
                data-uk-height-viewport=""
                style={{ textAlign: "center" }}
              > */}
              <div className="moon">
              <img
                className="uk-position-top uk-blur-large"
                style={{
                  left: "25%",
                  top: "-100%",
                  position: "absolute",
                  zIndex: "-1",
                  mixBlendMode: "hard-light",
                }}
                width="700"
                src="assets/images/gradient-circle.svg"
                alt="Circle"
              />
              </div>
              {/* </div> */}
              <div className="container">
                <div
                  className="uk-section-large uk-section-xlarge@m uk-flex-center uk-flex-middle"
                  data-uk-height-viewport="offset-bottom: 30;"
                >
                  {/* //---balls and stars-------------------------------------------------------------------------------------------------------------------------- */}
                  <div className="balls_stars">
                    <img
                      className="uk-position-top-left uni-animation-spin uk-visible@m"
                      width="40"
                      src={sparkleLight}
                      alt="object"
                      style={{ position: "absolute", top: "45%", left: "30%" }}
                    />

                    <img
                      className="uk-position-top-right uni-animation-spin uk-visible@m"
                      width="40"
                      src={sparkleLight}
                      alt="object"
                      style={{ position: "absolute", top: "35%", right: "30%" }}
                    />

                    <img
                      className="uk-position-top-left uni-animation-bounce uni-animation-delay-small uk-visible@m"
                      width="24"
                      src={orangeBallBlur}
                      alt="object"
                      style={{ position: "absolute", top: "16%", left: "24%" }}
                      data-uk-svg=""
                    />

                    <img
                      className="uk-position-left uni-animation-bounce uni-animation-delay-large uk-visible@m"
                      width="40"
                      src={violetBall}
                      alt="object"
                      style={{ position: "absolute", top: "34%", left: "16%" }}
                      data-uk-svg=""
                    />

                    <img
                      className="uk-position-bottom-left uni-animation-bounce uk-visible@m"
                      width="24"
                      src={orangeBall}
                      alt="object"
                      style={{
                        position: "absolute",
                        bottom: "30%",
                        left: "24%",
                      }}
                    />

                    <img
                      className="uk-position-top-right uni-animation-bounce uni-animation-delay-small uk-visible@m"
                      width="36"
                      src={violetBall}
                      alt="object"
                      style={{ position: "absolute", top: "16%", right: "24%" }}
                      data-uk-svg=""
                    />

                    <img
                      className="uk-position-right uni-animation-bounce uni-animation-delay-large uk-visible@m"
                      width="40"
                      src={orangeBall}
                      alt="object"
                      style={{ position: "absolute", top: "34%", right: "16%" }}
                      data-uk-svg=""
                    />

                    <img
                      className="uk-position-bottom-right uni-animation-bounce uk-visible@m"
                      width="24"
                      src={violetBallBlur}
                      alt="object"
                      style={{
                        position: "absolute",
                        bottom: "30%",
                        right: "24%",
                      }}
                    />
                  </div>
                  {/* //---balls and stars-------------------------------------------------------------------------------------------------------------------------- */}

                  <div
                    className="uk-panel uk-flex-column uk-flex-middle uk-text-center uk-position-z-index"
                    style={{ textAlign: "center" }}
                  >
                    {" "}
                    <div className="nerko_icon">
                      <img
                        className="uk-visible@m"
                        width="100"
                        src="assets/images/nerko-icon.svg"
                        alt="Nerko"
                      />
                    </div>
                    {/* small icon of nerko------------------------------| */}
                    {/* <img
                      className="uk-hidden@m"
                      width="80"
                      src="assets/images/nerko-icon.svg"
                      alt="Nerko" 
                    />*/}
                    {/* small icon of nerko------------------------------| */}
                    <div className="nerko_icon2">
                      <img
                        className="uk-margin-top uk-visible@m"
                        width="240"
                        src="assets/images/nerko-dark.svg"
                        alt="Nerko"
                      />
                    </div>
                    {/* small name of nerko------------------------------| */}
                    {/* <img
                      className="uk-margin-top uk-hidden@m"
                      width="160"
                      src="assets/images/nerko-dark.svg"
                      alt="Nerko"
                    /> */}
                    {/* small name of nerko------------------------------| */}
                    <p className="uk-text-lead uk-margin-top uk-margin-medium-top@m">
                      NFT Portfolio OnePage <br />
                      React Gatsby
                    </p>
                    <div className="preview_btn">
                    <a
                      href="#"
                      className="uk-button uk-button-medium uk-button-large@m uk-button-gradient uk-margin-top uk-margin-medium-top@m"
                      data-uk-scroll=""
                      style={{ padding: "32px 40px", fontSize: "18px" }}
                    >
                      Live Preview
                    </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="bar" style={{ textAlign: "center" }}>
              <img
                className="uk-width-2xsmall uk-flex-center uk-margin-auto"
                src="assets/images/divider-01.svg"
                alt="Divider"
              />
            </div>

            {/* <!-- Demos --------------------------------------------------------------------------------------------------------------------> */}
            <div
              id="demos"
              className="uk-panel uk-section-large uk-section-xlarge@m uk-padding-small-top@m uk-overflow-hidden"
            >
              <div className="container">
                <div
                  className="uk-grid-xsmall uk-grid-xlarge@m uk-child-width-1-3@m uk-text-center uk-margin-medium-top uk-margin-xlarge-top@s uk-grid"
                  data-uk-grid="masonry: true;"
                >
                  <div className="row">
                    <div className="col-lg-4">
                      <div>
                        <div className="uk-panel">
                          <a
                            href="javascript:void(0)"
                            className="uk-position-cover"
                            aria-label="Landing 01"
                            style={{ textDecoration: "none" }}
                          >
                            <div
                              className="uk-panel uk-card uk-card-xsmall uk-radius-large uk-box-shadow-xsmall uk-box-shadow-hover-large uk-overflow-hidden uk-background-gray-80"
                              style={{ marginBottom: "30px" }}
                            >
                              <div className="image-box">
                                <img
                                  src="assets/images/demo/landing_01_light.png"
                                  alt="Landing 01"
                                  width="580"
                                  height="318"
                                  className="uk-width-1-1 uk-radius-medium"
                                  loading="lazy"
                                  style={{ height: "auto" }}
                                />
                              </div>

                              <p
                                className="uk-text-semibold uk-padding-xsmall"
                                style={{ textAlign: "center" }}
                              >
                                Landing 01
                              </p>
                            </div>
                          </a>
                        </div>
                      </div>
                    </div>

                    <div className="col-lg-4">
                      <div>
                        <div className="uk-panel">
                          <a
                            href="javascript:void(0)"
                            className="uk-position-cover"
                            aria-label="Landing 02"
                            style={{ textDecoration: "none" }}
                          >
                            <div
                              className="uk-panel uk-card uk-card-xsmall uk-radius-large uk-box-shadow-xsmall uk-box-shadow-hover-large uk-overflow-hidden uk-background-gray-80"
                              style={{ marginBottom: "30px" }}
                            >
                              <div className="image-box">
                                <img
                                  src="assets/images/demo/landing_02_light.png"
                                  alt="Landing 02"
                                  width="580"
                                  height="318"
                                  className="uk-width-1-1 uk-radius-medium"
                                  loading="lazy"
                                  style={{ height: "auto" }}
                                />{" "}
                              </div>
                              <p
                                className="uk-text-semibold uk-padding-xsmall"
                                style={{ textAlign: "center" }}
                              >
                                Landing 02
                              </p>
                            </div>
                          </a>
                        </div>
                      </div>
                    </div>

                    {/*-----------------------------------------------------------------------------------------------------------------------  */}
                    <div className="col-lg-4">
                      <div>
                        <div className="uk-panel">
                          <a
                            href="javascript:void(0)"
                            className="uk-position-cover"
                            aria-label="Landing 03"
                            style={{ textDecoration: "none" }}
                          >
                            <div
                              className="uk-panel uk-card uk-card-xsmall uk-radius-large uk-box-shadow-xsmall uk-box-shadow-hover-large uk-overflow-hidden uk-background-gray-80"
                              style={{ marginBottom: "30px" }}
                            >
                              <div className="image-box">
                                <img
                                  src="assets/images/demo/landing_04_light.png"
                                  alt="Landing 03"
                                  width="580"
                                  height="318"
                                  className="uk-width-1-1 uk-radius-medium"
                                  loading="lazy"
                                  style={{ height: "auto" }}
                                />{" "}
                              </div>
                              <p
                                className="uk-text-semibold uk-padding-xsmall"
                                style={{ textAlign: "center" }}
                              >
                                Landing 03
                              </p>
                            </div>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/*-----------------------------------------------------------------------------------------------------------------------  */}
                  <div className="row">
                    <div className="col-lg-4">
                      <div>
                        <div className="uk-panel">
                          <a
                            href="javascript:void(0)"
                            className="uk-position-cover"
                            aria-label="Landing 03"
                            style={{ textDecoration: "none" }}
                          >
                            <div
                              className="uk-panel uk-card uk-card-xsmall uk-radius-large uk-box-shadow-xsmall uk-box-shadow-hover-large uk-overflow-hidden uk-background-gray-80"
                              style={{ marginBottom: "30px" }}
                            >
                              <div className="image-box">
                                <img
                                  src="assets/images/demo/blog.png"
                                  alt="Landing 03"
                                  width="580"
                                  height="318"
                                  className="uk-width-1-1 uk-radius-medium"
                                  loading="lazy"
                                  style={{ height: "auto" }}
                                />{" "}
                              </div>
                              <p
                                className="uk-text-semibold uk-padding-xsmall"
                                style={{ textAlign: "center" }}
                              >
                                Blog Page
                              </p>
                            </div>
                          </a>
                        </div>
                      </div>
                    </div>

                    <div className="col-lg-4">
                      <div>
                        <div className="uk-panel">
                          <a
                            href="javascript:void(0)"
                            className="uk-position-cover"
                            aria-label="Landing 03"
                            style={{ textDecoration: "none" }}
                          >
                            <div
                              className="uk-panel uk-card uk-card-xsmall uk-radius-large uk-box-shadow-xsmall uk-box-shadow-hover-large uk-overflow-hidden uk-background-gray-80"
                              style={{ marginBottom: "30px" }}
                            >
                              <div className="image-box">
                                <img
                                  src="assets/images/demo/blog-details.png"
                                  alt="Landing 03"
                                  width="580"
                                  height="318"
                                  className="uk-width-1-1 uk-radius-medium"
                                  loading="lazy"
                                  style={{ height: "auto" }}
                                />{" "}
                              </div>
                              <p
                                className="uk-text-semibold uk-padding-xsmall"
                                style={{ textAlign: "center" }}
                              >
                                Blog Single
                              </p>
                            </div>
                          </a>
                        </div>
                      </div>
                    </div>

                    <div className="col-lg-4">
                      <div>
                        <div className="uk-panel">
                          <a
                            href="javascript:void(0)"
                            className="uk-position-cover"
                            aria-label="Upcoming Pages"
                            style={{ textDecoration: "none" }}
                          >
                            <div
                              className="uk-panel uk-card uk-card-xsmall uk-radius-large uk-box-shadow-xsmall uk-box-shadow-hover-large uk-overflow-hidden uk-background-gray-80"
                              style={{ marginBottom: "30px" }}
                            >
                              <div className="image-box">
                                <img
                                  src="assets/images/demo/soon.png"
                                  alt="Upcoming Pages"
                                  width="580"
                                  height="318"
                                  className="uk-width-1-1 uk-radius-medium"
                                  loading="lazy"
                                  style={{ height: "auto" }}
                                />{" "}
                              </div>
                              <p
                                className="uk-text-semibold uk-padding-xsmall"
                                style={{ textAlign: "center" }}
                              >
                                More Demo Coming
                              </p>
                            </div>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* <!-- Demos --------------------------------------------------------------------------------------------------------------------> */}
            <div className="bar" style={{ textAlign: "center" }}>
              <img
                className="uk-width-2xsmall uk-flex-center uk-margin-auto"
                src="assets/images/divider-01.svg"
                alt="Divider"
              />
            </div>
            {/* <!-- Footer --> */}
            <div
              id="footer"
              className="uk-panel uk-overflow-hidden uk-position-z-index uk-background-gray-100"
              style={{ position: "sticky", overflow: "hidden" }}
            >
              {/* <div
                className="uk-position-bottom uk-position-z-index-negative uk-blend-hard-light"
                data-uk-height-viewport=""
                style={{  }}
              > */}
              <div className="moon">
              <img
                className="uk-position-bottom uk-blur-large"
                style={{
                  left: "25%",
                  bottom: "-150px",
                  position: "absolute",
                  zIndex: "-1",
                  height: "343px",
                  mixBlendMode: "hard-light",
                }}
                width="700"
                src="assets/images/gradient-circle.svg"
                alt="Circle"
              />
              </div>
              {/* </div> */}
              <div className="container">
                <div
                  className="uk-section-large uk-section-xlarge@m uk-flex-center uk-flex-middle"
                  data-uk-height-viewport="offset-bottom: 30; media: @m;"
                >
                  {/* balls and stars---------------------------------------------------------------------------------------------- */}
                  <div className="balls_stars">
                    <img
                      className="uk-position-top-left uni-animation-bounce uni-animation-delay-small uk-visible@m"
                      width="24"
                      src={orangeBallBlur}
                      alt="object"
                      style={{ position: "absolute", top: "16%", left: "24%" }}
                      data-uk-svg=""
                    />
                    <img
                      className="uk-position-left uni-animation-bounce uni-animation-delay-large uk-visible@m"
                      width="40"
                      src={violetBall}
                      alt="object"
                      style={{ position: "absolute", top: "34%", left: "16%" }}
                      data-uk-svg=""
                    />
                    <img
                      className="uk-position-bottom-left uni-animation-bounce uk-visible@m"
                      width="24"
                      src={orangeBall}
                      alt="object"
                      style={{
                        position: "absolute",
                        bottom: "30%",
                        left: "24%",
                      }}
                    />
                    <img
                      className="uk-position-top-right uni-animation-bounce uni-animation-delay-small uk-visible@m"
                      width="36"
                      src={violetBall}
                      alt="object"
                      style={{ position: "absolute", top: "16%", right: "24%" }}
                      data-uk-svg=""
                    />
                    <img
                      className="uk-position-right uni-animation-bounce uni-animation-delay-large uk-visible@m"
                      width="40"
                      src={orangeBall}
                      alt="object"
                      style={{ position: "absolute", top: "34%", right: "16%" }}
                      data-uk-svg=""
                    />
                    <img
                      className="uk-position-bottom-right uni-animation-bounce uk-visible@m"
                      width="24"
                      src={violetBallBlur}
                      alt="object"
                      style={{
                        position: "absolute",
                        bottom: "30%",
                        right: "24%",
                      }}
                    />
                  </div>
                  {/* balls and stars---------------------------------------------------------------------------------------------- */}
                  <div
                    className="uk-panel uk-flex-column uk-flex-middle uk-text-center uk-position-z-index"
                    style={{ textAlign: "center" }}
                  >
                    <span className="uk-text-overline uk-text-bold uk-text-gradient">
                      Purchase Theme
                    </span>
                    <h3 className="uk-h4 uk-h3@m uk-margin-medium-top@m">
                      Do you like this Template? <br />
                      Buy Nerko now!
                    </h3>
                    <div className="buy_btn">
                    <a
                      href="javascript:void(0)"
                      className="uk-button uk-button-medium uk-button-large@m uk-button-gradient uk-margin-top"
                      // style={{ borderBottom: "double" }}
                      style={{ padding: "32px 40px", fontSize: "18px" }}
                    >
                      {/* <i className="uk-icon unicon-shopping-bag"></i> */}

                      {/* <i class="bi bi-bag-heart"></i> */}

                      <span>Buy now</span>
                    </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ---------------------------------------------------------------------------------------------------------------------------------------------------- */}
      </div>
    </>
  );
};

export default Home;
