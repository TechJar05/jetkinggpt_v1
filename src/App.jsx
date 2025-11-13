import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Sidebar from "./component/Sidebar";

import Dashboard from "./pages/Dashboard";
import UploadExcel from "./pages/UploadExcel";

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-[#f3f4f6] flex">
        <Sidebar />

        {/* Main Pages */}
        <div className="flex-1 overflow-y-auto p-6">
          <Routes>
            <Route path="/" element={<Navigate to="/dashboard" />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/upload-excel" element={<UploadExcel />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
