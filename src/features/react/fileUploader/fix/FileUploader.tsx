import React, { useState } from "react";

const FileUploader: React.FC = () => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [uploadStatus, setUploadStatus] = useState<string | null>(null);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setSelectedFile(file);
      setPreviewUrl(URL.createObjectURL(file));
      setError(null);
    } else {
      setSelectedFile(null);
      setPreviewUrl(null);
      setError("Please select a valid image file");
    }
  };

  const handleUpload = async () => {
    if (selectedFile) {
      setUploadStatus("Uploading...");
      const formData = new FormData();
      formData.append("file", selectedFile);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-99 bg-gray-100">
      <div className="bg-gray-300 shadow-lg rounded-md p-6 max-w-md w-full text-center mt-2 mb-2">
        <h1 className="text-2xl font-bold mb-4">Upload an Image</h1>
        <input accept="image/*" onChange={handleFileChange} className="mb-4" />
        {error && <p className="text-red-500 mb-4">{error}</p>}
        {previewUrl && (
          <div className="mb-4">
            <img
              src={previewUrl}
              alt="Preview"
              className="w-full h-auto rounded"
            />
          </div>
        )}
        {uploadStatus && <p className="mb-4">{uploadStatus}</p>}
        <button
          className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
          disabled={!selectedFile}
        >
          Upload
        </button>
      </div>
    </div>
  );
};

export default FileUploader;
