import React from "react";
import { Link, useLocation } from "react-router-dom";

const Sidebar = () => {
  const { pathname } = useLocation();

  const isActive = (path) =>
    pathname === path
      ? "bg-white text-[#c7243b] shadow-sm"
      : "text-white hover:bg-white/10";

  return (
    <aside className="h-screen w-60 bg-[#c7243b] text-white flex flex-col sticky top-0">
      {/* Logo */}
      <div className="px-6 py-5 border-b border-white/10">
        <h1 className="text-xl font-semibold">Class Insights AI</h1>
      </div>

      <nav className="mt-4 flex-1">
        <ul className="px-3 space-y-2">

          {/* Dashboard */}
          <li>
            <Link
              to="/dashboard"
              className={`w-full flex items-center gap-2 px-4 py-2.5 rounded-lg ${isActive(
                "/dashboard"
              )}`}
            >
              <span>📊</span> <span>Dashboard</span>
            </Link>
          </li>

          {/* Upload Excel */}
          <li>
            <Link
              to="/upload-excel"
              className={`w-full flex items-center gap-2 px-4 py-2.5 rounded-lg ${isActive(
                "/upload-excel"
              )}`}
            >
              <span>📂</span> <span>Upload Excel</span>
            </Link>
          </li>

        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;
