import React, { useState } from "react";
import axios from "axios";

function UploadPhoto() {
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileSelect = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleImageUpload = async () => {
    const formData = new FormData();
    formData.append("image", selectedFile);

    const response = await axios.post("/api/upload", formData);
    console.log(response.data);
  };

  return (
    <div>
      <input type="file" onChange={handleFileSelect} />
      <button type="submit" onClick={handleImageUpload}>
        Upload Image
      </button>
    </div>
  );
}

export default UploadPhoto;
