import { Route, Routes } from "react-router";

import "./App.css";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Suspense, lazy } from "react";

const AdminHome = lazy(() => import("./admin/Pages/AdminHome"));
const AdminLogin = lazy(() => import("./admin/Pages/AdminLogin"));
const ManageUsers = lazy(() => import("./admin/Pages/User/ManageUsers"));
const ManageBlogs = lazy(() => import("./admin/Pages/Blog/ManageBlogs"));
const AddBlogs = lazy(() => import("./admin/Pages/Blog/AddBlogs"));
const ManageProduct = lazy(() => import("./admin/Pages/Product/ManageProduct"));
const AddProduct = lazy(() => import("./admin/Pages/Product/AddProduct"));
const ManageSubscriber = lazy(() => import("./admin/Pages/Managesubscriber"));
const ManageContect = lazy(() => import("./admin/Pages/ManageContect"));
const AddTestimonials = lazy(() =>
  import("./admin/Pages/Testimonial/AddTestimonials")
);
const ManageTestimonials = lazy(() =>
  import("./admin/Pages/Testimonial/ManageTestimonials")
);
const EditTestimonials = lazy(() =>
  import("./admin/Pages/Testimonial/EditTestimonials")
);
const EditProduct = lazy(() => import("./admin/Pages/Product/EditProduct"));

function App() {
  return (
    <>
      <ToastContainer />
      <Routes>
        {/* Admin routes */}

        <Route
          path="/"
          element={
            <Suspense fallback={<h2>Loading...</h2>}>
              <AdminHome />
            </Suspense>
          }
        />
        <Route
          path="/login"
          element={
            <Suspense fallback={<h2>Loading...</h2>}>
              <AdminLogin />
            </Suspense>
          }
        />
        <Route
          path="/manage-users"
          element={
            <Suspense fallback={<h2>Loading...</h2>}>
              <ManageUsers />
            </Suspense>
          }
        />

        <Route
          path="/manage-blogs"
          element={
            <Suspense fallback={<h2>Loading...</h2>}>
              <ManageBlogs />
            </Suspense>
          }
        />
        <Route
          path="/add-blogs"
          element={
            <Suspense fallback={<h2>Loading...</h2>}>
              <AddBlogs />
            </Suspense>
          }
        />

        <Route
          path="/manage-product"
          element={
            <Suspense fallback={<h2>Loading...</h2>}>
              <ManageProduct />
            </Suspense>
          }
        />
        <Route
          path="/add-product"
          element={
            <Suspense fallback={<h2>Loading...</h2>}>
              <AddProduct />
            </Suspense>
          }
        />
        <Route
          path="/edit-product/:id"
          element={
            <Suspense fallback={<h2>Loading...</h2>}>
              <EditProduct />
            </Suspense>
          }
        />

        <Route
          path="/manage-subscriber"
          element={
            <Suspense fallback={<h2>Loading...</h2>}>
              <ManageSubscriber />
            </Suspense>
          }
        />

        <Route
          path="/manage-contect"
          element={
            <Suspense fallback={<h2>Loading...</h2>}>
              <ManageContect />
            </Suspense>
          }
        />

        <Route
          path="/add-testimonials"
          element={
            <Suspense fallback={<h2>Loading...</h2>}>
              <AddTestimonials />
            </Suspense>
          }
        />
        <Route
          path="/manage-testimonials"
          element={
            <Suspense fallback={<h2>Loading...</h2>}>
              <ManageTestimonials />
            </Suspense>
          }
        />
        <Route
          path="/edit-testimonials/:id"
          element={
            <Suspense fallback={<h2>Loading...</h2>}>
              <EditTestimonials />
            </Suspense>
          }
        />
      </Routes>
    </>
  );
}

export default App;
