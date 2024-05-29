import axios from "axios";
import { toast } from "react-toastify";

export default async function postData({ field, data }) {
  try {
    const responce = await axios.post(`http://localhost:3000/${field}`, data);
    if (responce.status !== 201) throw new Error(`Error adding ${field}!`);
    toast.success(`${field} added successfully`);
  } catch (error) {
    console.log(error.message);
    toast.error(error.message);
  }
}
