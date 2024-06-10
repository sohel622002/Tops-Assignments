import React from "react";
import "./App.css";
import SearchableTable from "./components/SearchableTable";
import { Route, Routes } from "react-router";
import { Link } from "react-router-dom";
import Register from "./components/Register";
import Login from "./components/Login";

function App() {
  return (
    <section>
      <div className="d-flex gap-3 mt-3 ms-3">
        <Link type="btn" to={"/"}>
          searchtable
        </Link>
        <Link type="btn" to={"/login"}>
          Login registration with CRUD
        </Link>
      </div>
      <Routes>
        <Route path="/" element={<SearchableTable />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </section>
  );
}

export default App;
