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
        {/* ------------------------------------------------------------------content---------------------------------------------------------------------------------- */}

        <div className="wrap">
          <div
            id="wrapper"
            className="uk-background-gray-100 uk-text-white uk-dark"
            style={{ overflow: "hidden" }}
          >
            {/* <!-- Overview ----------------> */}
            <div
              id="header"
              className="uk-panel uk-overflow-hidden uk-position-z-index uk-background-gray-100"
              style={{ position: "sticky" }}
            >
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
                    <div className="nerko_icon2">
                      <img
                        className="uk-margin-top uk-visible@m"
                        width="240"
                        src="assets/images/nerko-dark.svg"
                        alt="Nerko"
                      />
                    </div>
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
            {/* <!-- Demos -----------------------------------------------------------------------------------> */}
            <div className="bar" style={{ textAlign: "center" }}>
              <img
                className="uk-width-2xsmall uk-flex-center uk-margin-auto"
                src="assets/images/divider-01.svg"
                alt="Divider"
              />
            </div>
            {/* <!-- Footer--------------------------------------------------------------------------------------- --> */}
            <div
              id="footer"
              className="uk-panel uk-overflow-hidden uk-position-z-index uk-background-gray-100"
              style={{ position: "sticky", overflow: "hidden" }}
            >
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

                        <span>Buy now</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ------------------------------------------------------------------content---------------------------------------------------------------------------------- */}
      </div>
    </>
  );
};

export default Home;
