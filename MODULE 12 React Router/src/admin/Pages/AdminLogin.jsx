export default function AdminLogin() {
  return (
    <div
      className="container h-100 d-flex justify-content-center align-items-center"
      style={{ minHeight: "100vh" }}
    >
      <form
        style={{
          width: "350px",
          border: "1px solid gray",
          padding: "30px",
          borderRadius: "5px",
        }}
      >
        <h3 style={{ textAlign: "center", marginBottom: "20px" }}>
          Admin Login
        </h3>
        {/* Email input */}
        <div className="form-outline mb-4">
          <input type="email" id="form2Example1" className="form-control" />
          <label className="form-label" htmlFor="form2Example1">
            Email address
          </label>
        </div>
        {/* Password input */}
        <div className="form-outline mb-4">
          <input type="password" id="form2Example2" className="form-control" />
          <label className="form-label" htmlFor="form2Example2">
            Password
          </label>
        </div>
        {/* 2 column grid layout for inline styling */}
        <div className="row mb-4">
          <div className="col d-flex justify-content-center">
            {/* Checkbox */}
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                id="form2Example31"
                defaultChecked
              />
              <label className="form-check-label" htmlFor="form2Example31">
                {" "}
                Remember me{" "}
              </label>
            </div>
          </div>
          <div className="col">
            <a href="#!">Forgot password?</a>
          </div>
        </div>
        <button type="button" className="btn btn-primary btn-block mb-4 w-100">
          Sign in
        </button>
      </form>
    </div>
  );
}
