import React, { useEffect, useState } from "react";
import AdminFooter from "../../Components/AdminFooter";
import AdminSidebar from "../../Components/AdminSidebar";
import AdminHeader from "../../Components/AdminHeader";
import { BLOGS } from "../../../assets/data";

export default function ManageBlogs() {
  return (
    <div>
      <AdminHeader />
      <div id="layoutSidenav">
        <AdminSidebar />
        <div id="layoutSidenav_content">
          <main>
            <div className="container-fluid px-4">
              <h1 className="mt-4">Manage Blogs</h1>
            </div>
            <div className="row p-4" style={{ rowGap: "30px" }}>
              {BLOGS &&
                BLOGS.map((blog) => (
                  <div className="col-sm-6" key={blog.id}>
                    <div className="card" style={{ height: "100%" }}>
                      <img
                        src={blog.image}
                        alt="blog-image"
                        style={{
                          width: "100%",
                          maxHeight: "250px",
                          objectFit: "contain",
                        }}
                      />
                      <div className="card-body">
                        <h5 className="card-title">{blog.title}</h5>
                        <p className="card-text">{blog.desc}</p>
                        <button
                          className="btn btn-success"
                          data-bs-toggle="modal"
                          data-bs-target="#exampleModal"
                          style={{ marginRight: "10px" }}
                     
                        >
                          Update
                        </button>
                        <button
                          className="btn btn-danger"
                          
                        >
                          Delete
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
            </div>
          </main>
          <AdminFooter />
        </div>
      </div>
    </div>
  );
}

