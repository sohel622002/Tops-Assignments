export default function DataTable({ products }) {
  return (
    <table className="dataTable mt-3">
      <thead>
        <tr className="">
          <th className="">Name</th>
          <th className="">Price</th>
          <th className="">Category</th>
          <th className="text-center">Actions</th>
        </tr>
      </thead>
      <tbody>
        {products.map((product) => (
          <tr key={product.id}>
            <td>{product.name}</td>
            <td>${product.price}</td>
            <td>{product.category}</td>
            <td>
              <div>
                <button className="btn btn-primary">Read</button>
                <button className="btn btn-info">Edit</button>
                <button className="btn btn-danger">Delete</button>
              </div>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
