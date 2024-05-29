import React from "react";
import AdminFooter from "../../Components/AdminFooter";
import AdminSidebar from "../../Components/AdminSidebar";
import AdminHeader from "../../Components/AdminHeader";

export default function AddProduct() {
  return (
    <div>
      <AdminHeader />
      <div id="layoutSidenav">
        <AdminSidebar />
        <div id="layoutSidenav_content">
          <main>
            <div className="container-fluid px-4">
              <h2 className="mt-4">Add Product</h2>
              <div className="d-flex flex-column gap-3 mt-5">
                <label className="d-flex align-items-center">
                  <span style={{ width: "150px" }}>Image Url</span>
                  <input className="flex-fill" type="url" />
                </label>
                <label className="d-flex align-items-center">
                  <span style={{ width: "150px" }}>Product Name</span>
                  <input className="flex-fill" type="text" />
                </label>
                <label className="d-flex align-items-center">
                  <span style={{ width: "150px" }}>Product Detail</span>
                  <textarea className="flex-fill" type="text" rows={5} />
                </label>
                <label className="d-flex align-items-center">
                  <span style={{ width: "150px" }}>Product Price</span>
                  <input className="flex-fill" type="number" />
                </label>
              </div>
              <div className="mt-5">
                <button className="btn btn-primary">Add Product</button>
              </div>
            </div>
          </main>
          <AdminFooter />
        </div>
      </div>
    </div>
  );
}
