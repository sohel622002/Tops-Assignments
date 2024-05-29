import AdminFooter from "../../Components/AdminFooter";
import AdminSidebar from "../../Components/AdminSidebar";
import AdminHeader from "../../Components/AdminHeader";

export default function AddTestimonials() {
  return (
    <div>
      <AdminHeader />
      <div id="layoutSidenav">
        <AdminSidebar />
        <div id="layoutSidenav_content">
          <main>
            <div className="container-fluid px-4">
              <h2 className="mt-4">Add Testimonials</h2>
              <form>
                <div className="row g-2 mt-3 d-flex flex-column gap-2">
                  <label>
                    <h6>Auther</h6>
                    <input
                      type="text"
                      className="form-control"
                      name="author"
                      placeholder="e.g. John doe"
                    />
                  </label>
                  <label>
                    <h6>Position</h6>
                    <input
                      type="text"
                      className="form-control"
                      name="position"
                      placeholder="e.g. Co-founder | xyz company"
                    />
                  </label>
                  <label>
                    <h6>Avatar</h6>
                    <input
                      type="url"
                      className="form-control"
                      name="image_url"
                      placeholder="https://image.png"
                    />
                  </label>
                  <label>
                    <h6>Details</h6>
                    <textarea
                      type="url"
                      className="form-control"
                      placeholder="Testimonials Details"
                      name="details"
                      rows={5}
                    ></textarea>
                  </label>
                  <div>
                    <button className="btn btn-success" type="submit">
                      Add
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </main>
          <AdminFooter />
        </div>
      </div>
    </div>
  );
}
