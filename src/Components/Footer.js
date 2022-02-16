import React from "react";

const Footer = () => {
  return (
    <div>
      {/*Footer Section*/}
      <section className="main-footer">
        <footer className="bg-dark-purple text-white">
          <div className="footer-main">
            <div className="container">
              <div className="row">
                <div className="col-lg-3 col-md-12">
                  <h6>About</h6>
                  <hr className="deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto" />
                  <p>
                    Kearekisa.co.bw is Botswana's leading classified ads and
                    listing platform that brings Batswana buyers and sellers
                    together in various categories such as cars, property,
                    services, jobs, electronics, etc.
                  </p>
                </div>
                <div className="col-lg-2 col-md-12">
                  <h6>Our Services</h6>
                  <hr
                    className="
              deep-purple
              text-primary
              accent-2
              mb-4
              mt-0
              d-inline-block
              mx-auto
            "
                  />
                  <ul className="list-unstyled mb-0">
                    <li>
                      <a href="javascript:;">Our Team</a>
                    </li>
                    <li>
                      <a href="javascript:;">Contact US</a>
                    </li>
                    <li>
                      <a href="javascript:;">About</a>
                    </li>
                    <li>
                      <a href="javascript:;">Services</a>
                    </li>
                    <li>
                      <a href="javascript:;">Blog</a>
                    </li>
                    <li>
                      <a href="javascript:;">Terms and Services</a>
                    </li>
                  </ul>
                </div>
                <div className="col-lg-3 col-md-12">
                  <h6>Contact</h6>
                  <hr
                    className="
              deep-purple
              text-primary
              accent-2
              mb-4
              mt-0
              d-inline-block
              mx-auto
            "
                  />
                  <ul className="list-unstyled mb-0">
                    <li>
                      <a href="#">
                        <i className="fa fa-home me-3 text-primary" /> New York,
                        NY 10012, US
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fa fa-envelope me-3 text-primary" />
                        info12323@example.com
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fa fa-phone me-3 text-primary" /> + 01 234
                        567 88
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fa fa-print me-3 text-primary" /> + 01 234
                        567 89
                      </a>
                    </li>
                  </ul>
                  <ul className="list-unstyled list-inline mt-3">
                    <li className="list-inline-item">
                      <a
                        className="
                  btn-floating btn-sm
                  rgba-white-slight
                  mx-1
                  waves-effect waves-light
                "
                      >
                        <i className="fa fa-facebook bg-facebook" />
                      </a>
                    </li>
                    <li className="list-inline-item">
                      <a
                        className="
                  btn-floating btn-sm
                  rgba-white-slight
                  mx-1
                  waves-effect waves-light
                "
                      >
                        <i className="fa fa-twitter bg-info" />
                      </a>
                    </li>
                    <li className="list-inline-item">
                      <a
                        className="
                  btn-floating btn-sm
                  rgba-white-slight
                  mx-1
                  waves-effect waves-light
                "
                      >
                        <i className="fa fa-google-plus bg-danger" />
                      </a>
                    </li>
                    <li className="list-inline-item">
                      <a
                        className="
                  btn-floating btn-sm
                  rgba-white-slight
                  mx-1
                  waves-effect waves-light
                "
                      >
                        <i className="fa fa-linkedin bg-linkedin" />
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="col-lg-4 col-md-12">
                  <h6>Subscribe</h6>
                  <hr
                    className="
              deep-purple
              text-primary
              accent-2
              mb-4
              mt-0
              d-inline-block
              mx-auto
            "
                  />
                  <div className="clearfix" />
                  <div className="input-group w-70">
                    <input
                      type="text"
                      className="form-control br-ts-3 br-bs-3"
                      placeholder="Email"
                    />
                    <div className>
                      <button
                        type="button"
                        className="btn btn-primary br-ts-0 br-bs-0"
                      >
                        Subscribe
                      </button>
                    </div>
                  </div>
                  <h6 className="mb-0 mt-5">Payments</h6>
                  <hr
                    className="
              deep-purple
              text-primary
              accent-2
              mb-2
              mt-3
              d-inline-block
              mx-auto
            "
                  />
                  <div className="clearfix" />
                  <ul className="footer-payments">
                    <li className="ps-0">
                      <a href="javascript:;">
                        <i
                          className="fa fa-cc-amex text-muted"
                          aria-hidden="true"
                        />
                      </a>
                    </li>
                    <li>
                      <a href="javascript:;">
                        <i
                          className="fa fa-cc-visa text-muted"
                          aria-hidden="true"
                        />
                      </a>
                    </li>
                    <li>
                      <a href="javascript:;">
                        <i
                          className="fa fa-credit-card-alt text-muted"
                          aria-hidden="true"
                        />
                      </a>
                    </li>
                    <li>
                      <a href="javascript:;">
                        <i
                          className="fa fa-cc-mastercard text-muted"
                          aria-hidden="true"
                        />
                      </a>
                    </li>
                    <li>
                      <a href="javascript:;">
                        <i
                          className="fa fa-cc-paypal text-muted"
                          aria-hidden="true"
                        />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          {/* <div class="bg-dark-purple text-white p-0">
					<div class="container">
						<div class="row d-flex">
							<div class="col-lg-12 col-sm-12 mt-3 mb-3 text-center ">
								Copyright © 2021 <a href="#" class="fs-14 text-primary">Claylist</a>. Designed with <span class="fa fa-heart text-primary"></span> by <a href="javascript:void0" class="text-primary"> Spruko </a>  All rights reserved.
							</div>
						</div>
					</div>
				</div> */}
        </footer>
      </section>
      {/*Footer Section*/}
    </div>
  );
};

export default Footer;
