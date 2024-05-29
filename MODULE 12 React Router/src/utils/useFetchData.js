import axios from "axios";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";

export function useFetchData(field) {
  const [data, setData] = useState();

  const fetchField = async () => {
    try {
      const res = await axios.get(`http://localhost:3000/${field}`);
      if (res.status !== 200) throw new Error(`Error while fetching ${field}`);
      setData(res.data);
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
  };

  useEffect(() => {
    fetchField();
  }, []);

  return [data, fetchField];
}
