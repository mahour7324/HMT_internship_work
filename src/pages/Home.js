import { getDefaultNormalizer } from "@testing-library/react";
import React from "react";
import { link } from "react-router-dom";
import orangeBallBlur from "../../src/pages/assets/images/objects/orange-ball-blur.png";
import orangeBall from "../../src/pages/assets/images/objects/orange-ball.png";
import sparkleLight from "../../src/pages/assets/images/objects/sparkle-light.png";
import violetBallBlur from "../../src/pages/assets/images/objects/violet-ball-blur.png";
import violetBall from "../../src/pages/assets/images/objects/violet-ball.png";
// import {} from   '../../src/pages/assets/css/'

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
        <div
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
            <div className="uk-container uk-container-xsmall">
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
        </div>

        <div className="wrap">
          <div
            id="wrapper"
            className="uk-background-gray-100 uk-text-white uk-dark"
          >
            {/* <!-- Overview --> */}
            <div
              id="header"
              className="uk-panel uk-overflow-hidden uk-position-z-index uk-background-gray-100"
            >
              <div
                className="uk-position-top uk-position-z-index-negative uk-blend-hard-light"
                data-uk-height-viewport=""
              >
                <img
                  className="uk-position-top uk-blur-large"
                  style={{ left: "25%", top: "-80%" }}
                  width="700"
                  src="assets/images/gradient-circle.svg"
                  alt="Circle"
                />
              </div>
              <div className="uk-container">
                <div
                  className="uk-section-large uk-section-xlarge@m uk-flex-center uk-flex-middle"
                  data-uk-height-viewport="offset-bottom: 30;"
                >
                  <img
                    className="uk-position-top-left uni-animation-spin uk-visible@m"
                    width="40"
                    src={sparkleLight}
                    alt="object"
                    style={{ top: "45%", left: "30%" }}
                  />
                  <img
                    className="uk-position-top-right uni-animation-spin uk-visible@m"
                    width="40"
                    src={sparkleLight}
                    alt="object"
                    style={{ top: "35%", right: "30%" }}
                  />
                  <img
                    className="uk-position-top-left uni-animation-bounce uni-animation-delay-small uk-visible@m"
                    width="24"
                    src={orangeBallBlur}
                    alt="object"
                    style={{ top: "16%", left: "24%" }}
                    data-uk-svg=""
                  />
                  <img
                    className="uk-position-left uni-animation-bounce uni-animation-delay-large uk-visible@m"
                    width="40"
                    src={violetBall}
                    alt="object"
                    style={{ top: "34%", left: "16%" }}
                    data-uk-svg=""
                  />
                  <img
                    className="uk-position-bottom-left uni-animation-bounce uk-visible@m"
                    width="24"
                    src={orangeBall}
                    alt="object"
                    style={{ bottom: "30%", left: "24%" }}
                  />
                  <img
                    className="uk-position-top-right uni-animation-bounce uni-animation-delay-small uk-visible@m"
                    width="36"
                    src={violetBall}
                    alt="object"
                    style={{ top: "16%", right: "24%" }}
                    data-uk-svg=""
                  />
                  <img
                    className="uk-position-right uni-animation-bounce uni-animation-delay-large uk-visible@m"
                    width="40"
                    src={orangeBall}
                    alt="object"
                    style={{ top: "34%", right: "16%" }}
                    data-uk-svg=""
                  />
                  <img
                    className="uk-position-bottom-right uni-animation-bounce uk-visible@m"
                    width="24"
                    src={violetBallBlur}
                    alt="object"
                    style={{ bottom: "30%", right: "24%" }}
                  />
                  <div className="uk-panel uk-flex-column uk-flex-middle uk-text-center uk-position-z-index">
                    <img
                      className="uk-visible@m"
                      width="100"
                      src="assets/images/nerko-icon.svg"
                      alt="Nerko"
                    />
                    <img
                      className="uk-hidden@m"
                      width="80"
                      src="assets/images/nerko-icon.svg"
                      alt="Nerko"
                    />
                    <img
                      className="uk-margin-top uk-visible@m"
                      width="240"
                      src="assets/images/nerko-dark.svg"
                      alt="Nerko"
                    />
                    <img
                      className="uk-margin-top uk-hidden@m"
                      width="160"
                      src="assets/images/nerko-dark.svg"
                      alt="Nerko"
                    />
                    <p className="uk-text-lead uk-margin-top uk-margin-medium-top@m">
                      NFT Portfolio OnePage <br />
                      React Gatsby
                    </p>
                    <a
                      href="main/#demos"
                      className="uk-button uk-button-medium uk-button-large@m uk-button-gradient uk-margin-top uk-margin-medium-top@m"
                      data-uk-scroll=""
                    >
                      Live Preview
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <img
              className="uk-width-2xsmall uk-flex-center uk-margin-auto"
              src="assets/images/divider-01.svg"
              alt="Divider"
            />

            {/* <!-- Demos --------------------------------------------------------------------------------------------------------------------> */}
            <div
              id="demos"
              className="uk-panel uk-section-large uk-section-xlarge@m uk-padding-small-top@m uk-overflow-hidden"
            >
              <div className="uk-container">
                <div
                  className="uk-grid-xsmall uk-grid-xlarge@m uk-child-width-1-3@m uk-text-center uk-margin-medium-top uk-margin-xlarge-top@s uk-grid"
                  data-uk-grid="masonry: true;"
                >
                  <div className="row">
                    <div className="col-lg-4">
                      <div>
                        <div className="uk-panel">
                          <div className="uk-panel uk-card uk-card-xsmall uk-radius-large uk-box-shadow-xsmall uk-box-shadow-hover-large uk-overflow-hidden uk-background-gray-80">
                            <div className="image-box">
                              <img
                                src="assets/images/demo/landing_01_light.png"
                                alt="Landing 01"
                                width="580"
                                height="318"
                                className="uk-width-1-1 uk-radius-medium"
                                loading="lazy"
                              />
                            </div>
                            <a
                              href="https://nerko-gatsbyjs.vercel.app/"
                              target="_blank"
                              className="uk-position-cover"
                              aria-label="Landing 01"
                            ></a>
                            <p className="uk-text-semibold uk-padding-xsmall">
                              Landing 01
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="col-lg-4">
                      <div>
                        <div className="uk-panel">
                          <div className="uk-panel uk-card uk-card-xsmall uk-radius-large uk-box-shadow-xsmall uk-box-shadow-hover-large uk-overflow-hidden uk-background-gray-80">
                            <div className="image-box">
                              <img
                                src="assets/images/demo/landing_02_light.png"
                                alt="Landing 02"
                                width="580"
                                height="318"
                                className="uk-width-1-1 uk-radius-medium"
                                loading="lazy"
                              />{" "}
                            </div>
                            <a
                              href="https://nerko-gatsbyjs.vercel.app/home-2/"
                              target="_blank"
                              className="uk-position-cover"
                              aria-label="Landing 02"
                            ></a>
                            <p className="uk-text-semibold uk-padding-xsmall">
                              Landing 02
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/*-----------------------------------------------------------------------------------------------------------------------  */}
                    <div className="col-lg-4">
                      <div>
                        <div className="uk-panel">
                          <div className="uk-panel uk-card uk-card-xsmall uk-radius-large uk-box-shadow-xsmall uk-box-shadow-hover-large uk-overflow-hidden uk-background-gray-80">
                            <div className="image-box">
                              <img
                                src="assets/images/demo/landing_04_light.png"
                                alt="Landing 03"
                                width="580"
                                height="318"
                                className="uk-width-1-1 uk-radius-medium"
                                loading="lazy"
                              />{" "}
                            </div>
                            <a
                              href="https://nerko-gatsbyjs.vercel.app/home-3/"
                              target="_blank"
                              className="uk-position-cover"
                              aria-label="Landing 03"
                            ></a>
                            <p className="uk-text-semibold uk-padding-xsmall">
                              Landing 03
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/*-----------------------------------------------------------------------------------------------------------------------  */}
                  <div className="row">
                    <div className="col-lg-4">
                      <div>
                        <div className="uk-panel">
                          <div className="uk-panel uk-card uk-card-xsmall uk-radius-large uk-box-shadow-xsmall uk-box-shadow-hover-large uk-overflow-hidden uk-background-gray-80">
                            <div className="image-box">
                              <img
                                src="assets/images/demo/blog.png"
                                alt="Landing 03"
                                width="580"
                                height="318"
                                className="uk-width-1-1 uk-radius-medium"
                                loading="lazy"
                              />{" "}
                            </div>
                            <a
                              href="https://nerko-gatsbyjs.vercel.app/blog/"
                              target="_blank"
                              className="uk-position-cover"
                              aria-label="Landing 03"
                            ></a>
                            <p className="uk-text-semibold uk-padding-xsmall">
                              Blog Page
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="col-lg-4">
                      <div>
                        <div className="uk-panel">
                          <div className="uk-panel uk-card uk-card-xsmall uk-radius-large uk-box-shadow-xsmall uk-box-shadow-hover-large uk-overflow-hidden uk-background-gray-80">
                            <div className="image-box">
                              <img
                                src="assets/images/demo/blog-details.png"
                                alt="Landing 03"
                                width="580"
                                height="318"
                                className="uk-width-1-1 uk-radius-medium"
                                loading="lazy"
                              />{" "}
                            </div>
                            <a
                              href="https://nerko-gatsbyjs.vercel.app/blog-details/"
                              target="_blank"
                              className="uk-position-cover"
                              aria-label="Landing 03"
                            ></a>
                            <p className="uk-text-semibold uk-padding-xsmall">
                              Blog Single
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="col-lg-4">
                      <div>
                        <div className="uk-panel">
                          <div className="uk-panel uk-card uk-card-xsmall uk-radius-large uk-box-shadow-xsmall uk-box-shadow-hover-large uk-overflow-hidden uk-background-gray-80">
                          <div className="image-box">
                            <img
                              src="assets/images/demo/soon.png"
                              alt="Upcoming Pages"
                              width="580"
                              height="318"
                              className="uk-width-1-1 uk-radius-medium"
                              loading="lazy"
                            />{" "}
                            </div>
                            <a
                              href="#"
                              className="uk-position-cover"
                              aria-label="Upcoming Pages"
                            ></a>
                            <p className="uk-text-semibold uk-padding-xsmall">
                              More Demo Coming
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* <!-- Demos --------------------------------------------------------------------------------------------------------------------> */}

            <img
              className="uk-width-2xsmall uk-flex-center uk-margin-auto"
              src="assets/images/divider-01.svg"
              alt="Divider"
            />

            {/* <!-- Footer --> */}
            <div
              id="footer"
              className="uk-panel uk-overflow-hidden uk-position-z-index uk-background-gray-100"
            >
              <div
                className="uk-position-bottom uk-position-z-index-negative uk-blend-hard-light"
                data-uk-height-viewport=""
              >
                <img
                  className="uk-position-bottom uk-blur-large"
                  style={{ left: "25%", bottom: "-80%" }}
                  width="700"
                  src="assets/images/gradient-circle.svg"
                  alt="Circle"
                />
              </div>
              <div className="uk-container">
                <div
                  className="uk-section-large uk-section-xlarge@m uk-flex-center uk-flex-middle"
                  data-uk-height-viewport="offset-bottom: 30; media: @m;"
                >
                  <img
                    className="uk-position-top-left uni-animation-bounce uni-animation-delay-small uk-visible@m"
                    width="24"
                    src={orangeBallBlur}
                    alt="object"
                    style={{ top: "16%", left: "24%" }}
                    data-uk-svg=""
                  />
                  <img
                    className="uk-position-left uni-animation-bounce uni-animation-delay-large uk-visible@m"
                    width="40"
                    src={violetBall}
                    alt="object"
                    style={{ top: "34%", left: "16%" }}
                    data-uk-svg=""
                  />
                  <img
                    className="uk-position-bottom-left uni-animation-bounce uk-visible@m"
                    width="24"
                    src={orangeBall}
                    alt="object"
                    style={{ bottom: "30%", left: "24%" }}
                  />
                  <img
                    className="uk-position-top-right uni-animation-bounce uni-animation-delay-small uk-visible@m"
                    width="36"
                    src={violetBall}
                    alt="object"
                    style={{ top: "16%", right: "24%" }}
                    data-uk-svg=""
                  />
                  <img
                    className="uk-position-right uni-animation-bounce uni-animation-delay-large uk-visible@m"
                    width="40"
                    src={orangeBall}
                    alt="object"
                    style={{ top: "34%", right: "16%" }}
                    data-uk-svg=""
                  />
                  <img
                    className="uk-position-bottom-right uni-animation-bounce uk-visible@m"
                    width="24"
                    src={violetBallBlur}
                    alt="object"
                    style={{ bottom: "30%", right: "24%" }}
                  />
                  <div className="uk-panel uk-flex-column uk-flex-middle uk-text-center uk-position-z-index">
                    <span className="uk-text-overline uk-text-bold uk-text-gradient">
                      Purchase Theme
                    </span>
                    <h3 className="uk-h4 uk-h3@m uk-margin-medium-top@m">
                      Do you like this Template? <br />
                      Buy Nerko now!
                    </h3>
                    <a
                      href="https://themeforest.net/item/nerko-react-gatsby-nft-portfolio-template/43703850"
                      target="_blank"
                      className="uk-button uk-button-medium uk-button-large@m uk-button-gradient uk-margin-top"
                    >
                      <i className="uk-icon unicon-shopping-bag"></i>
                      <span>Buy now</span>
                    </a>
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