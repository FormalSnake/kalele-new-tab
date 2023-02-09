import React, { useState, useEffect } from "react";

const ImageUploader = () => {
  const [imagePreview, setImagePreview] = useState("");
  const [showInput, setShowInput] = useState(false);

  useEffect(() => {
    // Retrieve the saved wallpaper from chrome.storage
    // eslint-disable-next-line no-undef
    chrome.storage.local.get("wallpaper", (data) => {
      //setImagePreview(data.wallpaper || "");
      document.body.style.backgroundImage = `url(${data.wallpaper})`;
    });
  }, []);

  const handleImageChange = (event) => {
    event.preventDefault();
    const reader = new FileReader();
    const file = event.target.files[0];
    reader.onloadend = () => {
      setImagePreview(reader.result);
      // Save the image as wallpaper using chrome.storage API
      // eslint-disable-next-line no-undef
      chrome.storage.local.set({ wallpaper: reader.result });
    };
    reader.readAsDataURL(file);
  };

  useEffect(() => {
    document.body.style.backgroundImage = `url(${imagePreview})`;
  }, [imagePreview]);

  return (
    <div>
      <button
        onClick={() => setShowInput(!showInput)}
        style={{ position: "fixed", bottom: "0", right: "0" }}
      >
        {showInput ? "Close" : "Upload Image"}
      </button>
      {showInput && (
        <div id="previewbg">
          <div className="quoteContent">Select background image:</div>
          <input type="file" onChange={handleImageChange} />
        </div>
      )}
    </div>
  );
};

export default ImageUploader;
