import React from "react";
import AdminFooter from "../Components/AdminFooter";
import AdminSidebar from "../Components/AdminSidebar";
import AdminHeader from "../Components/AdminHeader";
import { CONTACTS } from "../../assets/data";

export default function ManageContect() {
  return (
    <div>
      <AdminHeader />
      <div id="layoutSidenav">
        <AdminSidebar />
        <div id="layoutSidenav_content">
          <main>
            <div className="container-fluid px-4">
              <h1 className="mt-4">Manage Subscribers</h1>
              <div className="d-flex flex-column gap-3">
                {CONTACTS &&
                  CONTACTS.map((contect) => (
                    <ContectCard
                      key={contect.id}
                      contect={contect}
                    />
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

function ContectCard({ contect }) {
  return (
    <div className="border p-3 rounded d-flex flex-column gap-2">
      <h5>
        {contect.fname} {contect.lname}
      </h5>
      <h6>{contect.email}</h6>
      <p>{contect.message}</p>
      <div>
        <button
          className="btn btn-danger btn-sm"
        >
          Delete
        </button>
      </div>
    </div>
  );
}
