import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      {/*Sliders Section*/}
      <section>
        <div className="banner-1 cover-image sptb-3 sptb-tab bg-background2 ">
          <div className="header-text mb-0">
            <div className="container">
              <div className="text-white mb-7">
                <div style={{ height: "225px" }}>
                  <h1
                    className="mb-1"
                    style={{ width: "40%", marginTop: "105px" }}
                  >
                    View Menus with just a scan with mobiles
                  </h1>
                  <p style={{ width: "40%" }}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
                    accumsan, ipsum et accumsan
                  </p>
                  <Link
                    to="/login"
                    className="btn btn-success"
                    style={{ float: "left" }}
                  >
                    Create Menu
                  </Link>
                </div>
              </div>
              {/*  <div>
                <img src="../assets/images/brand/phone.png" alt="" />
              </div> */}
              {/*  <div className="row">
                <div className="col-xl-10 col-lg-12 col-md-12 d-block mx-auto">
                  <div className="search-background bg-transparent">
                    <div className="form row g-0">
                      <div className="form-group col-xl-10 col-lg-9 col-md-12 mb-0 bg-white">
                        <input
                          type="text"
                          className="form-control input-lg br-te-md-0 br-be-md-0 border-end-0"
                          id="text4"
                          placeholder="Search QR Code ..."
                        />
                      </div>
                      <div
                        class="
                  form-group
                  col-xl-3 col-lg-3 col-md-12
                  mb-0
                  bg-white
                "
                      >
                        <input
                          type="text"
                          class="form-control input-lg br-md-0 border-end-0"
                          id="text5"
                          placeholder="Enter Location"
                        />
                        <span>
                          <i class="fa fa-map-marker location-gps me-1"></i>
                        </span>
                      </div>
                      <div
                        class="
                  form-group
                  col-xl-3 col-lg-3 col-md-12
                  select2-lg
                  mb-0
                  bg-white
                "
                      >
                        <select
                          class="form-control select2-show-search border-bottom-0"
                          data-placeholder="Select Category"
                        >
                          <optgroup label="Categories">
                            <option>Select</option>
                            <option value="1">Private</option>
                            <option value="2">Software</option>
                            <option value="3">Banking</option>
                            <option value="4">Finaces</option>
                            <option value="5">Corporate</option>
                            <option value="6">Driver</option>
                            <option value="7">Sales</option>
                          </optgroup>
                        </select>
                      </div>
                      <div className="col-xl-2 col-lg-3 col-md-12 mb-0">
                        <a
                          href="#"
                          style={{ backgroundColor: "#fceb42" }}
                          className="btn btn-lg btn-block btn-primary br-ts-md-0 br-bs-md-0 text-dark"
                        >
                          Search Here
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div> */}
            </div>
          </div>
          {/* /header-text */}
        </div>
      </section>
      {/*Sliders Section*/}
      {/*Locations*/}
      <section className="sptb">
        <div className="container">
          <div className="col-md-12">
            <div className="items-gallery">
              <div className="items-blog-tab text-center">
                <h2 style={{ margin: "1rem auto 3rem " }}>
                  View Menus With Just a Scan
                </h2>
                {/* <div className="items-blog-tab-heading row">
                  <div className="col-12">
                    <ul className="nav items-blog-tab-menu">
                      <li className>
                        <a
                          href="#tab-1"
                          className="active show"
                          data-bs-toggle="tab"
                        >
                          Recent Scan
                        </a>
                      </li>
                      <li>
                        <a href="#tab-2" data-bs-toggle="tab" class="">
                          Scan History
                        </a>
                      </li>
                      <li>
                        <a href="#tab-4" data-bs-toggle="tab" className>
                          Folder
                        </a>
                      </li>
                    </ul>
                  </div>
                </div> */}
                <div
                  className="tab-content"
                  style={{
                    textAlign: "center",
                  }}
                >
                  <div className="tab-pane active" id="tab-1">
                    <div className="row">
                      <div className="col-xl-4 col-lg-4 col-md-12">
                        <div className="card mb-xl-0">
                          {/* <span className="ribbon-1">
                            <span>
                              <i className="fa fa-cutlery" />
                            </span>
                          </span>
                          <div className="item-card8-img br-te-7 br-ts-7">
                            <img
                              src="../assets/images/products/f2.png"
                              alt="img"
                              className="cover-image"
                            />
                          </div>
                          <div className="item-card8-overlaytext">
                            <h6 className="fs-20 mb-0">Restaurants</h6>
                          </div> */}
                          <div className="card-body">
                            <div className="item-card8-desc">
                              {/* <p className="text-muted">16 November 2018.</p> */}
                              <h4 className="font-weight-semibold">
                                QR Code Digital Menus for Restaurants and Bars
                              </h4>
                              <p
                                className="mb-0"
                                style={{ margin: "1.5rem auto" }}
                              >
                                Lorem ipsum dolor sit amet consectetur
                                adipisicing elit. Numquam, repudiandae eius quo,
                                ipsum maiores cupiditate illo optio tempore
                                possimus voluptatum tempora nihil accusantium
                                vitae delectus esse voluptatibus quidem
                                excepturi repellat?
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-xl-4 col-lg-4 col-md-12">
                        <div className="card mb-xl-0">
                          {/* <span className="ribbon-2">
                            <span>
                              <i className="fa fa-home" />
                            </span>
                          </span>
                          <div className="item-card8-img br-te-7 br-ts-7">
                            <img
                              src="../assets/images/products/h2.jpg"
                              alt="img"
                              className="cover-image"
                            />
                          </div>
                          <div className="item-card8-overlaytext">
                            <h6 className="bg-primary fs-20 mb-0">Survey</h6>
                          </div> */}
                          <div className="card-body">
                            <div className="item-card8-desc">
                              {/*  <p className="text-muted">16 November 2018.</p> */}
                              <h4 className="font-weight-semibold">
                                Consumer-Friendly, Contactless Menu Experience
                              </h4>
                              <p
                                className="mb-0"
                                style={{ margin: "1.5rem auto" }}
                              >
                                Lorem ipsum dolor sit amet consectetur
                                adipisicing elit. Numquam, repudiandae eius quo,
                                ipsum maiores cupiditate illo optio tempore
                                possimus voluptatum tempora nihil accusantium
                                vitae delectus esse voluptatibus quidem
                                excepturi repellat?
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-xl-4 col-lg-4 col-md-12">
                        <div className="card mb-lg-0">
                          {/* <span className="ribbon-3">
                            <span>
                              <i className="fa fa-cutlery" />
                            </span>
                          </span>
                          <div className="item-card8-img br-te-7 br-ts-7">
                            <img
                              src="../assets/images/products/j1.png"
                              alt="img"
                              className="cover-image"
                            />
                          </div>
                          <div className="item-card8-overlaytext">
                            <h6 className="bg-info fs-20 mb-0">Restaurant</h6>
                          </div> */}
                          <div className="card-body">
                            <div className="item-card8-desc">
                              {/* <p className="text-muted">16 November 2018.</p> */}
                              <h4
                                className="font-weight-semibold"
                                style={{ fontSize: "20px" }}
                              >
                                Powerful Digital Menu Management
                              </h4>
                              <p
                                className="mb-0"
                                style={{ margin: "1.5rem auto" }}
                              >
                                Lorem ipsum dolor sit amet consectetur
                                adipisicing elit. Numquam, repudiandae eius quo,
                                ipsum maiores cupiditate illo optio tempore
                                possimus voluptatum tempora nihil accusantium
                                vitae delectus esse voluptatibus quidem
                                excepturi repellat?
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="tab-pane" id="tab-2">
                    <div className="row">
                      <div className="col-xl-4 col-lg-4 col-md-12">
                        <div className="card mb-xl-0">
                          <span className="ribbon-2">
                            <span>
                              <i className="fa fa-briefcase" />
                            </span>
                          </span>
                          <div className="item-card8-img br-te-7 br-ts-7">
                            <img
                              src="../assets/images/products/f1.png"
                              alt="img"
                              className="cover-image"
                            />
                          </div>
                          <div className="item-card8-overlaytext">
                            <h6 className="fs-20 mb-0">Restaurants</h6>
                          </div>
                          <div className="card-body">
                            <div className="item-card8-desc">
                              <p className="text-muted">16 November 2018.</p>
                              <h4 className="font-weight-semibold">
                                Food &amp; Bar Restaurant
                              </h4>
                              <p className="mb-0">
                                Lorem ipsum dolor sit amet consectetur
                                adipisicing elit. Numquam, repudiandae eius quo,
                                ipsum maiores cupiditate illo optio tempore
                                possimus voluptatum tempora nihil accusantium
                                vitae delectus esse voluptatibus quidem
                                excepturi repellat?
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-xl-4 col-lg-4 col-md-12">
                        <div className="card mb-xl-0">
                          <span className="ribbon-1">
                            <span>
                              <i className="fa fa-cutlery" />
                            </span>
                          </span>
                          <div className="item-card8-img">
                            <img
                              src="../assets/images/products/j2.png"
                              alt="img"
                              className="cover-image"
                            />
                          </div>
                          <div className="item-card8-overlaytext">
                            <h6 className="fs-20 mb-0">Restaurants</h6>
                          </div>
                          <div className="card-body">
                            <div className="item-card8-desc">
                              <p className="text-muted">16 November 2018.</p>
                              <h4 className="font-weight-semibold">
                                Food &amp; Bar Restaurant
                              </h4>
                              <p className="mb-0">
                                Lorem ipsum dolor sit amet consectetur
                                adipisicing elit. Numquam, repudiandae eius quo,
                                ipsum maiores cupiditate illo optio tempore
                                possimus voluptatum tempora nihil accusantium
                                vitae delectus esse voluptatibus quidem
                                excepturi repellat?
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-xl-4 col-lg-4 col-md-12">
                        <div className="card mb-0">
                          <span className="ribbon-3">
                            <span>
                              <i className="fa fa-cutlery" />
                            </span>
                          </span>
                          <div className="item-card8-img">
                            <img
                              src="../assets/images/products/j3.png"
                              alt="img"
                              className="cover-image"
                            />
                          </div>
                          <div className="item-card8-overlaytext">
                            <h6 className="fs-20 mb-0">Restaurants</h6>
                          </div>
                          <div className="card-body">
                            <div className="item-card8-desc">
                              <p className="text-muted">16 November 2018.</p>
                              <h4 className="font-weight-semibold">
                                Food &amp; Bar Restaurant
                              </h4>
                              <p className="mb-0">
                                Lorem ipsum dolor sit amet consectetur
                                adipisicing elit. Numquam, repudiandae eius quo,
                                ipsum maiores cupiditate illo optio tempore
                                possimus voluptatum tempora nihil accusantium
                                vitae delectus esse voluptatibus quidem
                                excepturi repellat?
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="tab-pane" id="tab-3">
                    <div className="row">
                      <div className="col-xl-4 col-lg-4 col-md-12">
                        <span className="ribbon-3">
                          <span>
                            <i className="fa fa-cutlery" />
                          </span>
                        </span>
                        <div className="card mb-xl-0">
                          <div className="item-card8-img br-te-7 br-ts-7">
                            <img
                              src="../assets/images/products/b1.png"
                              alt="img"
                              className="cover-image"
                            />
                          </div>
                          <div className="item-card8-overlaytext">
                            <h6 className="fs-20 mb-0">Restaurants</h6>
                          </div>
                          <div className="card-body">
                            <div className="item-card8-desc">
                              <p className="text-muted">16 November 2018.</p>
                              <h4 className="font-weight-semibold">
                                Food &amp; Bar Restaurant
                              </h4>
                              <p className="mb-0">
                                Lorem ipsum dolor sit amet consectetur
                                adipisicing elit. Numquam, repudiandae eius quo,
                                ipsum maiores cupiditate illo optio tempore
                                possimus voluptatum tempora nihil accusantium
                                vitae delectus esse voluptatibus quidem
                                excepturi repellat?
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-xl-4 col-lg-4 col-md-12">
                        <div className="card mb-0">
                          <span className="ribbon-2">
                            <span>
                              <i className="fa fa-cutlery" />
                            </span>
                          </span>
                          <div className="item-card8-img">
                            <img
                              src="../assets/images/products/b2.png"
                              alt="img"
                              className="cover-image"
                            />
                          </div>
                          <div className="item-card8-overlaytext">
                            <h6 className="fs-20 mb-0">Restaurants</h6>
                          </div>
                          <div className="card-body">
                            <div className="item-card8-desc">
                              <p className="text-muted">16 November 2018.</p>
                              <h4 className="font-weight-semibold">
                                Food &amp; Bar Restaurant
                              </h4>
                              <p className="mb-0">
                                Lorem ipsum dolor sit amet consectetur
                                adipisicing elit. Numquam, repudiandae eius quo,
                                ipsum maiores cupiditate illo optio tempore
                                possimus voluptatum tempora nihil accusantium
                                vitae delectus esse voluptatibus quidem
                                excepturi repellat?
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-xl-4 col-lg-4 col-md-12">
                        <div className="card mb-lg-0">
                          <span className="ribbon-1">
                            <span>
                              <i className="fa fa-cutlery" />
                            </span>
                          </span>
                          <div className="item-card8-img br-te-7 br-ts-7">
                            <img
                              src="../assets/images/products/j1.png"
                              alt="img"
                              className="cover-image"
                            />
                          </div>
                          <div className="item-card8-overlaytext">
                            <h6 className="fs-20 mb-0">Restaurants</h6>
                          </div>
                          <div className="card-body">
                            <div className="item-card8-desc">
                              <p className="text-muted">16 November 2018.</p>
                              <h4 className="font-weight-semibold">
                                Food &amp; Bar Restaurant
                              </h4>
                              <p className="mb-0">
                                Lorem ipsum dolor sit amet consectetur
                                adipisicing elit. Numquam, repudiandae eius quo,
                                ipsum maiores cupiditate illo optio tempore
                                possimus voluptatum tempora nihil accusantium
                                vitae delectus esse voluptatibus quidem
                                excepturi repellat?
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="tab-pane" id="tab-4">
                    <div className="row mb-3">
                      <div className="col-xl-12 col-lg-12 col-md-12 d-block ">
                        <div className="search-background bg-transparent">
                          <div className="form row g-0">
                            <div className="form-group col-xl-12 col-lg-12 col-md-12 mb-0 bg-white">
                              <input
                                type="text"
                                className="form-control input-lg br-te-md-0 br-be-md-0 border-end-0"
                                id="text4"
                                placeholder="Search QR Code ..."
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-xl-4 col-lg-4 col-md-12">
                        <span className="ribbon-2">
                          <span>
                            <i className="fa fa-cutlery" />
                          </span>
                        </span>
                        <div className="card mb-xl-0">
                          <div className="item-card8-img br-te-7 br-ts-7">
                            <img
                              src="../assets/images/products/h4.png"
                              alt="img"
                              className="cover-image"
                            />
                          </div>
                          <div className="item-card8-overlaytext">
                            <h6 className="fs-20 mb-0">Restaurants</h6>
                          </div>
                          <div className="card-body">
                            <div className="item-card8-desc">
                              <p className="text-muted">16 November 2018.</p>
                              <h4 className="font-weight-semibold">
                                Food &amp; Bar Restaurant
                              </h4>
                              <p className="mb-0">
                                Lorem ipsum dolor sit amet consectetur
                                adipisicing elit. Numquam, repudiandae eius quo,
                                ipsum maiores cupiditate illo optio tempore
                                possimus voluptatum tempora nihil accusantium
                                vitae delectus esse voluptatibus quidem
                                excepturi repellat?
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-xl-4 col-lg-4 col-md-12">
                        <span className="ribbon-2">
                          <span>
                            <i className="fa fa-cutlery" />
                          </span>
                        </span>
                        <div className="card mb-xl-0">
                          <div className="item-card8-img br-te-7 br-ts-7">
                            <img
                              src="../assets/images/products/h4.png"
                              alt="img"
                              className="cover-image"
                            />
                          </div>
                          <div className="item-card8-overlaytext">
                            <h6 className="fs-20 mb-0">Restaurants</h6>
                          </div>
                          <div className="card-body">
                            <div className="item-card8-desc">
                              <p className="text-muted">16 November 2018.</p>
                              <h4 className="font-weight-semibold">
                                Food &amp; Bar Restaurant
                              </h4>
                              <p className="mb-0">
                                Lorem ipsum dolor sit amet consectetur
                                adipisicing elit. Numquam, repudiandae eius quo,
                                ipsum maiores cupiditate illo optio tempore
                                possimus voluptatum tempora nihil accusantium
                                vitae delectus esse voluptatibus quidem
                                excepturi repellat?
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-xl-4 col-lg-4 col-md-12">
                        <span className="ribbon-2">
                          <span>
                            <i className="fa fa-cutlery" />
                          </span>
                        </span>
                        <div className="card mb-xl-0">
                          <div className="item-card8-img br-te-7 br-ts-7">
                            <img
                              src="../assets/images/products/h4.png"
                              alt="img"
                              className="cover-image"
                            />
                          </div>
                          <div className="item-card8-overlaytext">
                            <h6 className="fs-20 mb-0">Restaurants</h6>
                          </div>
                          <div className="card-body">
                            <div className="item-card8-desc">
                              <p className="text-muted">16 November 2018.</p>
                              <h4 className="font-weight-semibold">
                                Food &amp; Bar Restaurant
                              </h4>
                              <p className="mb-0">
                                Lorem ipsum dolor sit amet consectetur
                                adipisicing elit. Numquam, repudiandae eius quo,
                                ipsum maiores cupiditate illo optio tempore
                                possimus voluptatum tempora nihil accusantium
                                vitae delectus esse voluptatibus quidem
                                excepturi repellat?
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="row mt-3">
                      <div className="col-xl-4 col-lg-4 col-md-12">
                        <span className="ribbon-2">
                          <span>
                            <i className="fa fa-cutlery" />
                          </span>
                        </span>
                        <div className="card mb-xl-0">
                          <div className="item-card8-img br-te-7 br-ts-7">
                            <img
                              src="../assets/images/products/h4.png"
                              alt="img"
                              className="cover-image"
                            />
                          </div>
                          <div className="item-card8-overlaytext">
                            <h6 className="fs-20 mb-0">Restaurants</h6>
                          </div>
                          <div className="card-body">
                            <div className="item-card8-desc">
                              <p className="text-muted">16 November 2018.</p>
                              <h4 className="font-weight-semibold">
                                Food &amp; Bar Restaurant
                              </h4>
                              <p className="mb-0">
                                Lorem ipsum dolor sit amet consectetur
                                adipisicing elit. Numquam, repudiandae eius quo,
                                ipsum maiores cupiditate illo optio tempore
                                possimus voluptatum tempora nihil accusantium
                                vitae delectus esse voluptatibus quidem
                                excepturi repellat?
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-xl-4 col-lg-4 col-md-12">
                        <span className="ribbon-2">
                          <span>
                            <i className="fa fa-cutlery" />
                          </span>
                        </span>
                        <div className="card mb-xl-0">
                          <div className="item-card8-img br-te-7 br-ts-7">
                            <img
                              src="../assets/images/products/h4.png"
                              alt="img"
                              className="cover-image"
                            />
                          </div>
                          <div className="item-card8-overlaytext">
                            <h6 className="fs-20 mb-0">Restaurants</h6>
                          </div>
                          <div className="card-body">
                            <div className="item-card8-desc">
                              <p className="text-muted">16 November 2018.</p>
                              <h4 className="font-weight-semibold">
                                Food &amp; Bar Restaurant
                              </h4>
                              <p className="mb-0">
                                Lorem ipsum dolor sit amet consectetur
                                adipisicing elit. Numquam, repudiandae eius quo,
                                ipsum maiores cupiditate illo optio tempore
                                possimus voluptatum tempora nihil accusantium
                                vitae delectus esse voluptatibus quidem
                                excepturi repellat?
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-xl-4 col-lg-4 col-md-12">
                        <span className="ribbon-2">
                          <span>
                            <i className="fa fa-cutlery" />
                          </span>
                        </span>
                        <div className="card mb-xl-0">
                          <div className="item-card8-img br-te-7 br-ts-7">
                            <img
                              src="../assets/images/products/h4.png"
                              alt="img"
                              className="cover-image"
                            />
                          </div>
                          <div className="item-card8-overlaytext">
                            <h6 className="fs-20 mb-0">Restaurants</h6>
                          </div>
                          <div className="card-body">
                            <div className="item-card8-desc">
                              <p className="text-muted">16 November 2018.</p>
                              <h4 className="font-weight-semibold">
                                Food &amp; Bar Restaurant
                              </h4>
                              <p className="mb-0">
                                Lorem ipsum dolor sit amet consectetur
                                adipisicing elit. Numquam, repudiandae eius quo,
                                ipsum maiores cupiditate illo optio tempore
                                possimus voluptatum tempora nihil accusantium
                                vitae delectus esse voluptatibus quidem
                                excepturi repellat?
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="tab-pane" id="tab-5">
                    <div className="row">
                      <div className="col-xl-4 col-lg-4 col-md-12">
                        <div className="card mb-xl-0">
                          <span className="ribbon-3">
                            <span>
                              <i className="fa fa-cutlery" />
                            </span>
                          </span>
                          <div className="item-card8-img br-te-7 br-ts-7">
                            <img
                              src="../assets/images/products/f4.png"
                              alt="img"
                              className="cover-image"
                            />
                          </div>
                          <div className="item-card8-overlaytext">
                            <h6 className="bg-info fs-20 mb-0">Restaurant</h6>
                          </div>
                          <div className="card-body">
                            <div className="item-card8-desc">
                              <p className="text-muted">16 November 2018.</p>
                              <h4 className="font-weight-semibold">
                                Food &amp; Bar Restaurant
                              </h4>
                              <p className="mb-0">
                                Ut enim ad minima veniam, quis nostrum
                                exercitationem ullam corporis suscipit
                                laboriosam
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-xl-4 col-lg-4 col-md-12">
                        <div className="card mb-xl-0">
                          <span className="ribbon-1">
                            <span>
                              <i className="fa fa-cutlery" />
                            </span>
                          </span>
                          <div className="item-card8-img">
                            <img
                              src="../assets/images/products/f3.png"
                              alt="img"
                              className="cover-image"
                            />
                          </div>
                          <div className="item-card8-overlaytext">
                            <h6 className="bg-secondary fs-20 mb-0">
                              Restaurant
                            </h6>
                          </div>
                          <div className="card-body">
                            <div className="item-card8-desc">
                              <p className="text-muted">16 November 2018.</p>
                              <h4 className="font-weight-semibold">
                                Food &amp; Bar Restaurant
                              </h4>
                              <p className="mb-0">
                                Ut enim ad minima veniam, quis nostrum
                                exercitationem ullam corporis suscipit
                                laboriosam
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-xl-4 col-lg-4 col-md-12">
                        <div className="card mb-0">
                          <span className="ribbon-2">
                            <span>
                              <i className="fa fa-cutlery" />
                            </span>
                          </span>
                          <div className="item-card8-img">
                            <img
                              src="../assets/images/products/f2.png"
                              alt="img"
                              className="cover-image"
                            />
                          </div>
                          <div className="item-card8-overlaytext">
                            <h6 className="bg-primary fs-20 mb-0">
                              Restaurant
                            </h6>
                          </div>
                          <div className="card-body">
                            <div className="item-card8-desc">
                              <p className="text-muted">16 November 2018.</p>
                              <h4 className="font-weight-semibold">
                                Food &amp; Bar Restaurant
                              </h4>
                              <p className="mb-0">
                                Ut enim ad minima veniam, quis nostrum
                                exercitationem ullam corporis suscipit
                                laboriosam
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*/Locations*/}
    </div>
  );
};

export default Home;
