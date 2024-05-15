import React, { useState } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "../ProductView/style.css";
import "./Login.css";

const Authentication = () => {
  let userCredentials = localStorage.getItem("user");
  userCredentials = JSON.parse(userCredentials)
  const [formData, setFormData] = useState({
    email: userCredentials?.email ? userCredentials?.email : "",
    username: userCredentials?.username ? userCredentials?.username : "",
    password: userCredentials?.password ? userCredentials?.password : "",
    confirmPassword: "",
  });
  const [isRegistered, setIsRegistered] = useState(true);
  const [error, setError] = useState("");

  console.log(formData, userCredentials)

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleRegisterSubmit = (e) => {
    e.preventDefault();
    console.log("Register form data:", formData);
    const { email, username, password, confirmPassword } = formData;
  };

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    console.log("Login form data:", formData); 
    const { username, password } = formData;
    const storedUser = JSON.parse(localStorage.getItem("user"));
  };

  return (
    <div className="container-fluid login-container">
      <div className="row justify-content-center">
        <div className="col-md-12">
          <div className="card shadow">
            <div className="card-header text-white">
              <h3 className="text-center">
                {isRegistered ? "Login" : "Register"}
              </h3>
            </div>
            <div className="card-body">
              {!isRegistered && (
                <form onSubmit={handleRegisterSubmit}>
                  <div className="form-group" id="formEmail">
                    <label htmlFor="email">Email</label>
                    <input
                      type="password"
                      className="form-control"
                      id="password"
                      placeholder="Enter your password"
                      name="password"
                      value={formData.password}
                      onChange={handleInputChange}
                      autoComplete="current-password" // Change from autoComplete to autoComplete
                    />
                  </div>
                  <div className="form-group" id="formUsername">
                    <label htmlFor="username">Username</label>
                    <input
                      type="text"
                      className="form-control"
                      id="username"
                      placeholder="Enter your username"
                      name="username"
                      value={formData.username}
                      onChange={handleInputChange}
                      autoComplete="current-password"
                    />
                  </div>
                  <div className="form-group" id="formPassword">
                    <label htmlFor="password">Password</label>
                    <input
                      type="password"
                      className="form-control"
                      id="password"
                      placeholder="Enter your password"
                      name="password"
                      value={formData.password}
                      onChange={handleInputChange}
                      autoComplete="current-password"
                    />
                  </div>
                  <div className="form-group" id="formConfirmPassword">
                    <label htmlFor="confirmPassword">Confirm Password</label>
                    <input
                      type="password"
                      className="form-control"
                      id="confirmPassword"
                      placeholder="Confirm your password"
                      name="confirmPassword"
                      value={formData.confirmPassword}
                      onChange={handleInputChange}
                      autoComplete="current-password"
                    />
                  </div>
                  <button type="submit" className="btn btn-primary btn-block">
                    Register
                  </button>
                </form>
              )}

              {isRegistered && (
                <form onSubmit={handleLoginSubmit}>
                  <div className="form-group" id="formUsername">
                    <label htmlFor="username">Username</label>
                    <input
                      type="text"
                      className="form-control"
                      id="username"
                      placeholder="Enter your username"
                      name="username"
                      value={formData.username}
                      onChange={handleInputChange}
                      autoComplete="current-password"
                    />
                  </div>
                  <div className="form-group" id="formPassword">
                    <label htmlFor="password">Password</label>
                    <input
                      type="password"
                      className="form-control"
                      id="password"
                      placeholder="Enter your password"
                      name="password"
                      value={formData.password}
                      onChange={handleInputChange}
                      autoComplete="current-password"
                    />
                  </div>
                  <button type="submit" className="btn btn-primary btn-block">
                    Login
                  </button>
                </form>
              )}
            </div>
            <div className="card-footer">
              <p className="text-center mb-0">
                {isRegistered ? (
                  <>
                    Don't have an account?{" "}
                    <button
                      className="btn btn-link"
                      onClick={() => setIsRegistered(false)}
                    >
                      Register
                    </button>
                  </>
                ) : (
                  <>
                    Already have an account?{" "}
                    <button
                      className="btn btn-link"
                      onClick={() => setIsRegistered(true)}
                    >
                      Login
                    </button>
                  </>
                )}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Authentication;
