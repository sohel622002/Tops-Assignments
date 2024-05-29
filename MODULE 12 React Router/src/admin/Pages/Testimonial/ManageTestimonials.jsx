import React, { useEffect, useState } from "react";
import AdminFooter from "../../Components/AdminFooter";
import AdminSidebar from "../../Components/AdminSidebar";
import AdminHeader from "../../Components/AdminHeader";
import { Link } from "react-router-dom";
import { TESTIMONIALS } from "../../../assets/data";

export default function ManageTestimonials() {
  return (
    <div>
      <AdminHeader />
      <div id="layoutSidenav">
        <AdminSidebar />
        <div id="layoutSidenav_content">
          <main>
            <div className="container-fluid px-4">
              <h2 className="mt-4">Manage Testimonials</h2>
              <div className="row g-2 mt-3">
                {TESTIMONIALS &&
                  TESTIMONIALS.map((testimonial) => (
                    <div key={testimonial.id} className="card p-3">
                      <h5 className="card-title">{testimonial.author}</h5>
                      <h6 className="card-subtitle mb-2 text-muted">
                        {testimonial.position}
                      </h6>
                      <p>{testimonial.details}</p>
                      <div className="d-flex gap-2">
                        <Link
                          to={`/edit-testimonials/${testimonial.id}`}
                          className="btn btn-success"
                        >
                          Edit
                        </Link>
                        <button
                          className="btn btn-danger"
                        >
                          Delete
                        </button>
                      </div>
                    </div>
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
