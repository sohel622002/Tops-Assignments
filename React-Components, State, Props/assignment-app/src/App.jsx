import { Route, Routes } from "react-router";
import "./App.css";
import React_List from "./Projects/React_List/React_List";
import { NavLink } from "react-router-dom";
import Counter from "./Projects/Counter/Counter";
import Template from "./Projects/Template/Template";

function App() {
  return (
    <div className="Main_App">
      <h1>Project links</h1>
      <ul>
        <li>
          <NavLink to="/">Render React List</NavLink>
        </li>
        <li>
          <NavLink to="/Counter">React Counter</NavLink>
        </li>
        <li>
          <NavLink to="/template">Bootstrep Template</NavLink>
        </li>
      </ul>
      <Routes>
        <Route path="/" element={<React_List />} />
        <Route path="/Counter" element={<Counter />} />
        <Route path="/template" element={<Template />} />
      </Routes>
    </div>
  );
}

export default App;
