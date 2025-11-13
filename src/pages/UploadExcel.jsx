import React, { useState } from "react";

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

const UploadExcel = () => {
  const [file, setFile] = useState(null);

  const handleUpload = () => {
    if (!file) return alert("Please select a file first");
    alert("File uploaded! (Backend API not wired yet)");
  };

  return (
    <div className="space-y-10">

      {/* Top Heading */}
      <div>
        <h2 className="text-2xl font-semibold text-gray-900">
          Upload Excel Data
        </h2>
        <p className="text-sm text-gray-500">
          Upload your class data to get AI-powered insights
        </p>
      </div>

      {/* Upload Box */}
      <div className="bg-white p-10 rounded-xl shadow-sm border">
        <div className="border-2 border-dashed border-gray-300 rounded-xl p-10 flex flex-col items-center justify-center text-center">
          <span className="text-4xl mb-3">☁️</span>
          <h3 className="font-semibold text-gray-700 mb-1">Upload Excel File</h3>
          <p className="text-sm text-gray-500 mb-6">
            Choose an Excel file containing student and fee data
          </p>

          <input
            type="file"
            className="hidden"
            id="excelInput"
            accept=".xlsx,.xls"
            onChange={(e) => setFile(e.target.files[0])}
          />

          <label
            htmlFor="excelInput"
            className="px-5 py-2.5 bg-[#c7243b] text-white rounded-lg cursor-pointer hover:bg-[#a81c30]"
          >
            Choose File
          </label>

          {file && (
            <p className="text-sm mt-3 text-gray-600">{file.name}</p>
          )}
        </div>
      </div>

      {/* Ask Questions Section */}
      <div className="bg-white p-8 rounded-xl shadow-sm border">
        <h3 className="text-lg font-semibold text-gray-800">
          Ask Questions About Your Data
        </h3>

        <p className="text-xs text-gray-500 mt-1">Try asking:</p>

        <div className="flex gap-2 mt-3 flex-wrap">
          <span className="px-3 py-1 bg-gray-100 rounded-full text-xs">
            Total students in Batch A
          </span>
          <span className="px-3 py-1 bg-gray-100 rounded-full text-xs">
            Total collected fees in November
          </span>
          <span className="px-3 py-1 bg-gray-100 rounded-full text-xs">
            Pending fees by batch
          </span>
        </div>

        <div className="mt-6 w-full h-40 bg-gray-50 border border-gray-200 rounded-lg flex items-center justify-center text-sm text-gray-500">
          Upload a file and start asking questions about your data…
        </div>
      </div>

    </div>
  );
};

export default UploadExcel;
