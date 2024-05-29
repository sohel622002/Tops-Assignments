import { useNavigate } from "react-router";

export function IsAdminCheck() {
  const redirect = useNavigate();
  const id = sessionStorage.getItem("adminLoginId");
  if (!id) {
    redirect("/admin/login");
  }
}
