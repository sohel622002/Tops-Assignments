import React from "react";
import AdminSidebar from "../../Components/AdminSidebar";
import AdminHeader from "../../Components/AdminHeader";
import AdminFooter from "../../Components/AdminFooter";

export default function AddBlogs() {
  return (
    <div>
      <AdminHeader />
      <div id="layoutSidenav">
        <AdminSidebar />
        <div id="layoutSidenav_content">
          <main>
            <div className="container-fluid px-4">
              <h1 className="mt-4 mb-4">Add Blog</h1>

              <div className="container">
                <div className="row">
                  <div className="col-md-12">
                    <div className="form-group mb-4 ">
                      <input
                        type="text"
                        className="form-control"
                        name="title"
                        placeholder="Blog Title"
                      />
                    </div>
                    <div className="form-group mb-4">
                      <input
                        type="url"
                        className="form-control mt-3"
                        placeholder="Image Url"
                      />
                    </div>
                    <div className="form-group mb-4">
                      <input
                        type="url"
                        className="form-control mt-3"
                        placeholder="Auther"
                      />
                    </div>
                    <div className="form-group mb-4">
                      <textarea
                        className="form-control bcontent"
                        placeholder="Blog Description"
                      />
                    </div>
                    <div className="form-group">
                      <input
                        type="button"
                        name="Submit"
                        defaultValue="Publish"
                        className="btn btn-primary form-control"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </main>
          <AdminFooter />
        </div>
      </div>
    </div>
  );
}
