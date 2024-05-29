import React from "react";
import AdminFooter from "../Components/AdminFooter";
import AdminSidebar from "../Components/AdminSidebar";
import AdminHeader from "../Components/AdminHeader";
import { SUBSCRIBERS } from "../../assets/data";

export default function ManageSubscriber() {
  return (
    <div>
      <AdminHeader />
      <div id="layoutSidenav">
        <AdminSidebar />
        <div id="layoutSidenav_content">
          <main>
            <div className="container-fluid px-4">
              <h1 className="mt-4">Manage Subscribers</h1>
              <table className="table align-middle mb-0 bg-white">
                <thead className="bg-light">
                  <tr>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {SUBSCRIBERS &&
                    SUBSCRIBERS.map((subscriber) => (
                      <tr key={subscriber.id}>
                        <td>
                          <p className="text-muted mb-0">{subscriber.name}</p>
                        </td>
                        <td>
                          <p className="text-muted mb-0">{subscriber.email}</p>
                        </td>
                        <td>
                          <button type="button" className="btn btn-danger">
                            Delete
                          </button>
                        </td>
                      </tr>
                    ))}
                </tbody>
              </table>
            </div>
          </main>
          <AdminFooter />
        </div>
      </div>
    </div>
  );
}
