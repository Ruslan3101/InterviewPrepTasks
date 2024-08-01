import React, { useState } from "react";

const FileUploader: React.FC = () => {
  // State for the selected file
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  // State for the preview URL of the selected file
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  // State for any error messages
  const [error, setError] = useState<string | null>(null);
  // State for the upload status message
  const [uploadStatus, setUploadStatus] = useState<string | null>(null);

  // Handler for file input changes
  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]; // Get the first selected file
    // Check if the file is an image
    if (file && file.type.startsWith("image/")) {
      setSelectedFile(file); // Set the selected file state
      setPreviewUrl(URL.createObjectURL(file)); // Set the preview URL for the selected file
      setError(null); // Clear any previous error messages
    } else {
      setSelectedFile(null); // Clear the selected file state
      setPreviewUrl(null); // Clear the preview URL
      setError("Please select a valid image file"); // Set an error message
    }
  };

  // Handler for the upload button click
  const handleUpload = async () => {
    if (selectedFile) {
      // Check if a file is selected
      setUploadStatus("Uploading..."); // Set the upload status to uploading
      const formData = new FormData(); // Create a new FormData object
      formData.append("file", selectedFile); // Append the selected file to the FormData

      try {
        // Send a POST request to the server with the selected file
        const response = await fetch(
          "https://your-server-endpoint.com/upload",
          {
            method: "POST", // Use POST method
            body: formData, // Set the request body to the FormData
          }
        );

        if (response.ok) {
          // Check if the response is successful
          setUploadStatus("Upload successful!"); // Set the upload status to successful
        } else {
          setUploadStatus("Upload failed. Please try again."); // Set the upload status to failed
        }
      } catch (error) {
        setUploadStatus("Upload failed. Please try again."); // Set the upload status to failed in case of an error
      }
    }
  };

  return (
    // Main container div with flexbox styling to center content
    <div className="flex flex-col items-center justify-center h-99 bg-gray-100">
      {/* Inner container div with background, shadow, and padding */}
      <div className="bg-gray-300 shadow-lg rounded-md p-6 max-w-md w-full text-center mt-2 mb-2">
        <h1 className="text-2xl font-bold mb-4">Upload an Image</h1>
        <input
          type="file"
          accept="image/*"
          onChange={handleFileChange}
          className="mb-4"
        />
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
          onClick={handleUpload}
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
