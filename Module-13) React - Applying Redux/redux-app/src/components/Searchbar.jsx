import { FaSearch } from "react-icons/fa";

export default function Searchbar({ setSearchText }) {
  return (
    <div className="mt-3 d-flex align-items-center justify-content-between">
      <div className="input-group" style={{ maxWidth: "350px" }}>
        <input
          type="text"
          className="form-control"
          onChange={(e) => setSearchText(e.target.value)}
        />
        <span className="input-group-text">
          <FaSearch />
        </span>
      </div>
      <div>
        <button className="btn btn-sm btn-primary">Create product</button>
      </div>
    </div>
  );
}
