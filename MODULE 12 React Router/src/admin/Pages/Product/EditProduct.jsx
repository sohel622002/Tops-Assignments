import React from "react";
import AdminFooter from "../../Components/AdminFooter";
import AdminSidebar from "../../Components/AdminSidebar";
import AdminHeader from "../../Components/AdminHeader";
import { useParams } from "react-router";
import { PRODUCTS } from "../../../assets/data";

export default function EditProduct() {
  const { id } = useParams();
  const [product] = PRODUCTS.filter((prod) => prod.id == id);

  return (
    <div>
      <AdminHeader />
      <div id="layoutSidenav">
        <AdminSidebar />
        <div id="layoutSidenav_content">
          <main>
            <div className="container-fluid px-4">
              <h2 className="mt-4">Edit Product</h2>
              {product && (
                <form className="d-flex flex-column gap-3 mt-5">
                  <label className="d-flex align-items-center">
                    <span style={{ width: "150px" }}>Image Url</span>
                    <input
                      className="flex-fill"
                      type="url"
                      readOnly
                      value={product.image}
                    />
                  </label>
                  <label className="d-flex align-items-center">
                    <span style={{ width: "150px" }}>Product Name</span>
                    <input
                      className="flex-fill"
                      type="text"
                      readOnly
                      defaultValue={product.name}
                    />
                  </label>
                  <label className="d-flex align-items-center">
                    <span style={{ width: "150px" }}>Product Detail</span>
                    <textarea
                      className="flex-fill"
                      type="text"
                      rows={5}
                      readOnly
                      defaultValue={product.details}
                    />
                  </label>
                  <label className="d-flex align-items-center">
                    <span style={{ width: "150px" }}>Product Price</span>
                    <input
                      className="flex-fill"
                      type="number"
                      readOnly
                      defaultValue={product.price}
                    />
                  </label>
                  <div className="mt-3">
                    <button className="btn btn-primary" type="submit">
                      Update Product
                    </button>
                  </div>
                </form>
              )}
            </div>
          </main>
          <AdminFooter />
        </div>
      </div>
    </div>
  );
}
