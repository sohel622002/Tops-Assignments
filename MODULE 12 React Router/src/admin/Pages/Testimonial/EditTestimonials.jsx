import AdminFooter from "../../Components/AdminFooter";
import AdminSidebar from "../../Components/AdminSidebar";
import AdminHeader from "../../Components/AdminHeader";
import { useParams } from "react-router";
import { TESTIMONIALS } from "../../../assets/data";

export default function EditTestimonials() {
  const { id } = useParams();

  const [testimonila] = TESTIMONIALS.filter((testi) => testi.id == id);

  return (
    <div>
      <AdminHeader />
      <div id="layoutSidenav">
        <AdminSidebar />
        <div id="layoutSidenav_content">
          {testimonila && (
            <main>
              <div className="container-fluid px-4">
                <h2 className="mt-4">Edit Testimonials</h2>
                <form>
                  <div className="row g-2 mt-3 d-flex flex-column gap-2">
                    <label>
                      <h6>Auther</h6>
                      <input
                        type="text"
                        className="form-control"
                        name="author"
                        placeholder="e.g. John doe"
                        value={testimonila.author}
                      />
                    </label>
                    <label>
                      <h6>Position</h6>
                      <input
                        type="text"
                        className="form-control"
                        name="position"
                        placeholder="e.g. Co-founder | xyz company"
                        value={testimonila.position}
                      />
                    </label>
                    <label>
                      <h6>Avatar</h6>
                      <input
                        type="url"
                        className="form-control"
                        name="image_url"
                        value={testimonila.image_url}
                        placeholder="https://image.png"
                      />
                    </label>
                    <label>
                      <h6>Details</h6>
                      <textarea
                        rows={5}
                        type="text"
                        name="details"
                        placeholder="Testimonials Details"
                        className="form-control"
                        value={testimonila.details}
                      ></textarea>
                    </label>
                    <div>
                      <button className="btn btn-success" type="submit">
                        Update
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </main>
          )}
          <AdminFooter />
        </div>
      </div>
    </div>
  );
}
