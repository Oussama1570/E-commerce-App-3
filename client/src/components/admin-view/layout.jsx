// layout.jsx
import { Outlet, useNavigate } from "react-router-dom";
import AdminSideBar from "./sidebar";
import AdminHeader from "./header";
import { useEffect, useState } from "react";

function AdminLayout() {
  const [openSidebar, setOpenSidebar] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const isAdmin = JSON.parse(localStorage.getItem("isAdmin")) === true;
    if (!isAdmin) {
      navigate("/auth/login", { replace: true });
    }
  }, []);

  return (
    <div className="flex min-h-screen w-full">
      <AdminSideBar open={openSidebar} setOpen={setOpenSidebar} />
      <div className="flex flex-1 flex-col">
        <AdminHeader setOpen={setOpenSidebar} />
        <main className="flex-1 flex-col flex bg-muted/40 p-4 md:p-6">
          <Outlet />
        </main>
      </div>
    </div>
  );
}

export default AdminLayout;
