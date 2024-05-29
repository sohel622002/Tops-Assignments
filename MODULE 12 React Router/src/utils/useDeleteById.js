import axios from "axios";
import { useState } from "react";
import { toast } from "react-toastify";

export function useDeleteById(field) {
  const [deleted, setDeleted] = useState(false);

  const deleteData = async (id) => {
    try {
      const res = await axios.delete(`http://localhost:3000/${field}/${id}`);
      if (res.status !== 200) throw new Error("Error while deleting user!");
      toast.success(`${field} deleted successfully!`);
      setDeleted(true);
    } catch (error) {
      console.log(error);
      toast.error(`Error deleting ${field}!`);
    }
  };

  return [deleted, deleteData];
}
