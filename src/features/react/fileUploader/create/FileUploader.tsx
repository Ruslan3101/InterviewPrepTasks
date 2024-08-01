//Develop a file uploader component that allows users to upload images and see preview of the file.
import React from "react";

const FileUploader: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center h-99 bg-gray-100">
      <div className="bg-gray-300 shadow-lg rounded-md p-6 max-w-md w-full text-center mt-2 mb-2">
        <h1 className="text-2xl font-bold mb-4">Upload an Image</h1>

        <button>Upload</button>
      </div>
    </div>
  );
};

export default FileUploader;
