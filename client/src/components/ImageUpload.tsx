import React, { useCallback, useState } from "react";
import { useDropzone } from "react-dropzone";

const ImageUpload: React.FC<{ selectedImage: any; setSelectedImage: any }> = ({
  selectedImage,
  setSelectedImage,
}) => {
  //   const [selectedImage, setSelectedImage] = useState<any>(null);

  const onDrop = useCallback((acceptedFiles: any) => {
    // Handle the dropped files here
    console.log(acceptedFiles);
    setSelectedImage(URL.createObjectURL(acceptedFiles[0]));
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  return (
    <div className="text-center">
      <div
        {...getRootProps()}
        className={`px-4 py-6 border-2 border-dashed rounded-lg ${
          isDragActive ? "bg-gray-100" : "bg-white"
        }`}
      >
        <input {...getInputProps()} />
        {selectedImage ? (
          <img
            src={selectedImage}
            alt="Selected"
            className="mx-auto h-24 object-contain"
          />
        ) : isDragActive ? (
          <p className="text-gray-600">Drop the files here...</p>
        ) : (
          <p className="text-gray-600">
            Drag 'n' drop an image here, or click to select an image
          </p>
        )}
      </div>
    </div>
  );
};

export default ImageUpload;
