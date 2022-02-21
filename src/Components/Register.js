import React from "react";

const Register = () => {
  const [error, seterror] = useState([]);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("L");
  const [email, setemail] = useState("");
  const [dob, setDob] = useState("12-08-97");
  const [gender, setGender] = useState("M");
  const [contact, setcontact] = useState("03009846764");
  const [password, setpassword] = useState("");

  const API = async () => {

    console.log(firstName,lastName, gender, dob, email, phonenumber, password)
    await signup({
      firstName,lastName, gender, dob, email, phonenumber, password

    })
      .then(function (response) {
        if (response.data.message == "true") {
          console.log("token: ", response.data.token);
          try {
            Cookies.set('token', response.data.token);
            Cookies.set('mail', email);
            routerHistory.push('./profile');
          } catch (e) {
            return null;
          }

        } else if (response.data.message === "false") {
          seterror("User Already Existsed")
        }

      })
      .catch(function (error) {

      });
  }
  return (
    <div>
      {/*Breadcrumb*/}
      <section>
        <div
          className="bannerimg cover-image bg-background3"
          data-bs-image-src="../assets/images/banners/banner2.jpg"
        >
          <div className="header-text mb-0">
            <div className="container">
              <div className="text-center text-white">
                <h1 className>Register</h1>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*/Breadcrumb*/}
      {/*Register-section*/}
      <section className="sptb">
        <div className="container customerpage">
          <div className="row">
            <div className="single-page">
              <div className="col-lg-5 col-xl-4 col-md-6 d-block mx-auto">
                <div className="wrapper wrapper2">
                  <form id="Register" className="card-body" tabIndex={500}>
                    <h3>Register</h3>
                    <div className="name">
                      <input type="text" name="firstname" value={firstName} onChange={(e) => setFirstName(e.target.value)} required/>
                      <label>Name</label>
                    </div>
                    {/* <div className="name">
                      <input type="text" name="lastname" value={lastName} onChange={(e) => setLastName(e.target.value)} required/>
                      <label>Last Name</label>
                    </div> */}
                    <div className="mail">
                      <input type="email" name="mail" value={email} onChange={(e) => setemail(e.target.value)} required/>
                      <label>Mail</label>
                    </div>
                    <div className="passwd">
                      <input type="password" name="password" value={password} onChange={(e) => setpassword(e.target.value)} required/>
                      <label>Password</label>
                    </div>
                    <div className="submit">
                      <a
                        className="btn btn-primary btn-block"
                        onClick={() => API()}
                      >
                        Register
                      </a>
                    </div>
                    <p className="text-dark mb-0">
                      Already have an account?
                      <a href="login.html" className="text-primary ms-1">
                        Sign In
                      </a>
                    </p>
                  </form>
                  <hr className="divider" />
                  <div className="card-body">
                    <div className="text-center">
                      <div className="btn-group">
                        <a
                          href="https://www.facebook.com/"
                          className="btn btn-icon me-2 brround"
                        >
                          <span className="fa fa-facebook" />
                        </a>
                      </div>
                      <div className="btn-group">
                        <a
                          href="https://www.google.com/gmail/"
                          className="btn  me-2 btn-icon brround"
                        >
                          <span className="fa fa-google" />
                        </a>
                      </div>
                      <div className="btn-group">
                        <a
                          href="https://twitter.com/"
                          className="btn  btn-icon brround"
                        >
                          <span className="fa fa-twitter" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*Register-section*/}
    </div>
  );
};

export default Register;
