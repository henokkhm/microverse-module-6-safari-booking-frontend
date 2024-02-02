import { useState } from 'react';

const useImageUploader = () => {
  const [imageURL, setImageURL] = useState();

  const handleImageChange = (e) => {
    const selectedFile = e.target.files[0];
    if (selectedFile) {
      setImageURL(URL.createObjectURL(selectedFile));
    }
  };

  const resetImage = () => setImageURL('');

  return { imageURL, handleImageChange, resetImage };
};

export default useImageUploader;
