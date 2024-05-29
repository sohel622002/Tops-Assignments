import React from "react";
import AdminFooter from "../../Components/AdminFooter";
import AdminSidebar from "../../Components/AdminSidebar";
import AdminHeader from "../../Components/AdminHeader";
import { Link } from "react-router-dom";
import { PRODUCTS } from "../../../assets/data";

export default function ManageProduct() {
  return (
    <div>
      <AdminHeader />
      <div id="layoutSidenav">
        <AdminSidebar />
        <div id="layoutSidenav_content">
          <main>
            <div className="container-fluid px-4">
              <h2 className="mt-4">Manage Products</h2>
              <div className="row g-2">
                {PRODUCTS &&
                  PRODUCTS.map((product) => (
                    <ProductCard product={product} key={product.id} />
                  ))}
              </div>
            </div>
          </main>
          <AdminFooter />
        </div>
      </div>
    </div>
  );
}

function ProductCard({ product }) {
  return (
    <div className="col-6 d-flex border p-3">
      <div className="me-3">
        <img
          src={product.image}
          alt="chair image"
          style={{ maxWidth: "150px" }}
        />
      </div>
      <div>
        <h4>{product.name}</h4>
        <p>{product.price}$</p>
        <p>{product.details}</p>
        <Link
          to={`/edit-product/${product.id}`}
          className="btn btn-success btn-sm"
          style={{ marginRight: "10px" }}
        >
          Edit
        </Link>
        <button className="btn btn-danger btn-sm">Delete</button>
      </div>
    </div>
  );
}
