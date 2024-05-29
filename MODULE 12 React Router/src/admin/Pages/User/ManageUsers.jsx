import React from "react";
import AdminFooter from "../../Components/AdminFooter";
import AdminSidebar from "../../Components/AdminSidebar";
import AdminHeader from "../../Components/AdminHeader";
import { USERDATA } from "../../../assets/data";

export default function ManageUsers() {
  return (
    <div>
      <AdminHeader />
      <div id="layoutSidenav">
        <AdminSidebar />
        <div id="layoutSidenav_content">
          <main>
            <div className="container-fluid px-4">
              <h1 className="mt-4">Manage User</h1>
              <table className="table align-middle mb-0 bg-white">
                <thead className="bg-light">
                  <tr>
                    <th>Name</th>
                    <th>Status</th>
                    <th>Is Admin</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {USERDATA &&
                    USERDATA.map((user) => (
                      <tr key={user.id}>
                        <td>
                          <div className="d-flex align-items-center">
                            <img
                              src="https://picsum.photos/150/150"
                              style={{ width: 45, height: 45 }}
                              className="rounded-circle"
                            />
                            <div className="ms-3">
                              <p className="fw-bold mb-1">{user.name}</p>
                              <p className="text-muted mb-0">{user.email}</p>
                            </div>
                          </div>
                        </td>
                        <td>{user.active ? "active" : "not-active"}</td>
                        <td>{user.admin ? "true" : "false"}</td>
                        <td className="d-flex gap-3">
                          <button type="button" className="btn btn-danger">
                            Delete
                          </button>
                          <button
                            type="button"
                            className={`btn ${
                              user.status === "blocked"
                                ? "btn-info"
                                : "btn-danger"
                            }`}
                          >
                            {user.status === "blocked" ? "Unblock" : "Block"}
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
