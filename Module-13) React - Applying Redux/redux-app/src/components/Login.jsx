import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { login } from "../redux/userslice";

export default function Login() {
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const isAuthanticated = useSelector((state) => state.user.isAuthanticated);
  const dispatch = useDispatch();

  const handleLogin = (e) => {
    e.preventDefault();
    setError("");
    const formData = new FormData(e.target);
    const data = {};
    for (let [key, value] of formData) {
      if (!value) return setError("All fields are required!");
      data[key] = value;
    }
    dispatch(login(data));
    if (isAuthanticated) {
      setSuccess("Login successfully!", isAuthanticated);
    } else {
      setError("User Not find");
    }
  };

  useEffect(() => {
    setSuccess("");
    setError("");
  }, [success, error]);

  return (
    <section className="vh-100 bg-image mt-5">
      <div className="mask d-flex align-items-center h-100 gradient-custom-3">
        <div className="container h-100">
          <h2>Using Redux</h2>
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-12 col-md-9 col-lg-7 col-xl-6">
              <div className="card" style={{ borderRadius: 15 }}>
                <div className="card-body p-5">
                  <h2 className="text-uppercase text-center mb-5">Login</h2>
                  <form onSubmit={handleLogin}>
                    <div data-mdb-input-init className="form-outline mb-4">
                      <input
                        type="email"
                        id="form3Example3cg"
                        name="email"
                        className="form-control form-control-lg"
                      />
                      <label className="form-label" htmlFor="form3Example3cg">
                        Your Email
                      </label>
                    </div>
                    <div data-mdb-input-init className="form-outline mb-4">
                      <input
                        type="password"
                        id="form3Example4cg"
                        name="password"
                        className="form-control form-control-lg"
                      />
                      <label className="form-label" htmlFor="form3Example4cg">
                        Password
                      </label>
                    </div>
                    {success && (
                      <div className="text-success text-center mb-3">
                        {success}
                      </div>
                    )}
                    <div className="d-flex justify-content-center">
                      <button
                        type="submit"
                        data-mdb-button-init
                        data-mdb-ripple-init
                        className="btn btn-success btn-block btn-lg gradient-custom-4 text-body"
                      >
                        Login
                      </button>
                    </div>
                    <p className="text-center text-muted mt-5 mb-0">
                      Dont have an account?{" "}
                      <Link to={"/register"} className="fw-bold text-body">
                        <u>Register here</u>
                      </Link>
                    </p>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
