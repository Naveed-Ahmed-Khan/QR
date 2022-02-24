import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from 'react-router';
import Cookies from 'js-cookie';
import { signup, login } from '../APIs/api';

const Signin = () => {
  const navigate = useNavigate();
  const [error, seterror] = useState();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setemail] = useState("");
  const [loginEmail, setLoginEmail] = useState("");
  const [dob, setDob] = useState("");
  const [gender, setGender] = useState("");
  const [contact, setcontact] = useState("");
  const [password, setpassword] = useState("");
  const [loginPassword, setLoginpassword] = useState("");
  const [check, setcheck] = useState(false);


  useEffect(() => {

    const token = Cookies.get("token");
    if (token) {
      navigate('/dashboard')
    }
  }, [check])
  const Login = async () => {
    
    await login({
      email:loginEmail, password:loginPassword
    })
      .then(function (response) {
        //   console.log(response);
        if (response.data.message === true) {
          seterror("");
          try {
            Cookies.set('token', response.data.token);
            Cookies.set('id', response.data.user._id);
            navigate('/dashboard');
          } catch (e) {
            return null;
          }

        } else if (response.data.message === false) {
          console.log("res:", response.data)
          seterror(response.data.error);
        }

      })
      .catch(function (error) {

      });
  }

  const API = async () => {
    if (firstName.length !== 0 && email.length !== 0 && password.length !== 0) {
      if (email.includes('@')) {
        console.log(firstName, lastName, gender, dob, email, contact, password)
        await signup({
          firstName, lastName, gender, dob, email, contact, password
        })
          .then(function (response) {
            if (response.data.message === true) {
              seterror("")
              try {
                Cookies.set('token', response.data.token);
                Cookies.set('id', response.data.user);
                navigate('/dashboard');
              } catch (e) {
                return null;
              }

            } else if (response.data.message === false) {
              
              seterror("User Already Existsed")
            }

          })
          .catch(function (error) {

          });
      }
      else {
        alert("Invalid Email");
      }
    } else {
      alert("Fill out the fields");
    }
  }
  return (
    <div>
      {/*Breadcrumb*/}
      <section style={{ width: "50%", float: "left" }}>
        <div
          className="bannerimg cover-image bg-background3"
          data-bs-image-src="../assets/images/banners/banner2.jpg"
        >
          <div className="header-text mb-0">
            <div className="container">
              <div
                className="text-center text-white "
                style={{ height: "570px" }}
              >
                {/* <h1 className>Login</h1> */}
                <section className="sptb">
                  <div className="container customerpage ">
                    <div className="row">
                      <div
                        className="single-page"
                        style={{ display: "flex", justifyContent: "center" }} ///////////
                      >
                        <div className="" style={{ width: "370px" }}>
                          <div className="wrapper wrapper2">
                            <form
                              id="login"
                              className="card-body"
                              tabIndex={500}
                              onSubmit={e => { e.preventDefault(); }}
                            >
                              <h3>Login</h3>
                              <h6 style={{color:'red'}}>{error}</h6>
                              <div className="mail">
                                <input type="email" name="mail" value={loginEmail} onChange={(e) => setLoginEmail(e.target.value)} required />
                                <label>Mail</label>
                              </div>
                              <div className="passwd">
                                <input type="password" name="password" value={loginPassword} onChange={(e) => setLoginpassword(e.target.value)} required />
                                <label>Password</label>
                              </div>
                              <div className="submit">
                                <button
                                  className="btn btn-primary btn-block"
                                  onClick={() => Login()}
                                >
                                  Login
                                </button>
                              </div>
                              <p className="mb-2">
                                <Link to="forgot.html">Forgot Password</Link>
                              </p>
                              {/* <p className="text-dark mb-0">
                                Don't have account?
                                <Link to="/login" className="text-primary ms-1">
                                  Sign UP
                                </Link>
                              </p> */}
                            </form>
                            <hr className="divider" />
                            <div className="card-body">
                              <div className="text-center">
                                <div className="btn-group">
                                  <Link
                                    to="https://www.facebook.com/"
                                    className="btn btn-icon me-2 brround"
                                  >
                                    <span className="fa fa-facebook" />
                                  </Link>
                                </div>
                                <div className="btn-group">
                                  <Link
                                    to="https://www.google.com/gmail/"
                                    className="btn  me-2 btn-icon brround"
                                  >
                                    <span className="fa fa-google" />
                                  </Link>
                                </div>
                                <div className="btn-group">
                                  <Link
                                    to="https://twitter.com/"
                                    className="btn  btn-icon brround"
                                  >
                                    <span className="fa fa-twitter" />
                                  </Link>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*/Breadcrumb2*/}
      <section style={{ width: "50%", float: "right" }}>
        <div
          className="bannerimg cover-image"
          data-bs-image-src="../assets/images/banners/banner2.jpg"
        /* style={{ backgroundColor: "white" }} */
        >
          <div className="header-text mb-0">
            <div className="container">
              <div className="text-center text-white">
                {/* <h1 className>Login</h1> */}
                <section className="sptb">
                  <div className="container customerpage ">
                    <div className="row">
                      <div
                        className="single-page"
                        style={{ display: "flex", justifyContent: "center" }} ////////////////
                      >
                        <div className="" style={{ width: "370px" }}>
                          <div className="wrapper wrapper2">
                            <form onSubmit={e => { e.preventDefault(); }}
                              id="Register"
                              className="card-body"
                              tabIndex={500}
                            >
                              <h3>Register</h3>
                              <h6 style={{color:'red'}}>{error}</h6>
                              <div className="name">
                                <input type="text" name="name" value={firstName} onChange={(e) => setFirstName(e.target.value)} required />
                                <label>Name</label>
                              </div>
                              <div className="mail">
                                <input type="email" name="mail" value={email} onChange={(e) => setemail(e.target.value)} required />
                                <label>Mail or Username</label>
                              </div>
                              <div className="passwd">
                                <input type="password" name="password" value={password} onChange={(e) => setpassword(e.target.value)} required />
                                <label>Password</label>
                              </div>
                              <div className="submit">
                                <button
                                  className="btn btn-primary btn-block"
                                  onClick={() => API()}
                                >
                                  Register
                                </button>
                              </div>
                              {/* <p className="text-dark mb-0">
                                Already have an account?
                                <Link to="/" className="text-primary ms-1">
                                  Sign In
                                </Link>
                              </p> */}
                            </form>
                            <hr className="divider" />
                            <div className="card-body">
                              <div className="text-center">
                                <div className="btn-group">
                                  <Link
                                    to="https://www.facebook.com/"
                                    className="btn btn-icon me-2 brround"
                                  >
                                    <span className="fa fa-facebook" />
                                  </Link>
                                </div>
                                <div className="btn-group">
                                  <Link
                                    to="https://www.google.com/gmail/"
                                    className="btn  me-2 btn-icon brround"
                                  >
                                    <span className="fa fa-google" />
                                  </Link>
                                </div>
                                <div className="btn-group">
                                  <Link
                                    to="https://twitter.com/"
                                    className="btn  btn-icon brround"
                                  >
                                    <span className="fa fa-twitter" />
                                  </Link>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*Login-Section*/}
      {/* <section className="sptb" style={{ display: "inline-block" }}>
        <div className="container customerpage ">
          <div className="row" style={{ position: "relative", left: "50px" }}>
            <div className="single-page">
              <div className="" style={{ width: "370px" }}>
                <div className="wrapper wrapper2">
                  <form id="login" className="card-body" tabIndex={500}>
                    <h3>Login</h3>
                    <div className="mail">
                      <input type="email" name="mail" />
                      <label>Mail or Username</label>
                    </div>
                    <div className="passwd">
                      <input type="password" name="password" />
                      <label>Password</label>
                    </div>
                    <div className="submit">
                      <Link
                        className="btn btn-primary btn-block"
                        to="index.html"
                      >
                        Login
                      </Link>
                    </div>
                    <p className="mb-2">
                      <Link to="forgot.html">Forgot Password</Link>
                    </p>
                    <p className="text-dark mb-0">
                      Don't have account?
                      <Link to="/register" className="text-primary ms-1">
                        Sign UP
                      </Link>
                    </p>
                  </form>
                  <hr className="divider" />
                  <div className="card-body">
                    <div className="text-center">
                      <div className="btn-group">
                        <Link
                          to="https://www.facebook.com/"
                          className="btn btn-icon me-2 brround"
                        >
                          <span className="fa fa-facebook" />
                        </Link>
                      </div>
                      <div className="btn-group">
                        <Link
                          to="https://www.google.com/gmail/"
                          className="btn  me-2 btn-icon brround"
                        >
                          <span className="fa fa-google" />
                        </Link>
                      </div>
                      <div className="btn-group">
                        <Link
                          to="https://twitter.com/"
                          className="btn  btn-icon brround"
                        >
                          <span className="fa fa-twitter" />
                        <<Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section> */}
      {/*/Login-Section*/}
    </div>
  );
};

export default Signin;
