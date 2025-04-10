import React, { useState, useRef } from 'react';
import styled from 'styled-components';

const User = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [selectedMenu,setSelectedMenu] = useState("menu1");
  const fileInputRef = useRef(null);

  const handleMenu1 = (event) => {
    
  }

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setSelectedImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleClickChangeImage = () => {
    fileInputRef.current.click();
  };

  return (
    <div>
      <span
        style={{
          marginTop: "100px",
          display: "block",
          fontSize: "35px",
        }}
      >
        마이페이지
      </span>

      <div
        style={{
          width: "1180px",
          display: "flex",
          flexDirection: "row",
          gap: "20px"
        }}
      >
        <div style={{ width: "30%", display: "flex", flexDirection: "column", gap: "20px" }}>
          <div
            style={{
              border: "1px solid gray",
              padding: "20px",
              height: "300px",
              textAlign: "center",
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              overflow: 'hidden',
            }}
          >
            <div
              style={{
                width: '80%',
                height: '80%',
                borderRadius: '50%',
                overflow: 'hidden',
                cursor: 'pointer',
              }}
              onClick={handleClickChangeImage} 
            >
              {selectedImage ? (
                <img
                  src={selectedImage}
                  alt="Profile"
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                  }}
                />
              ) : (
                <div style={{marginTop: "100px"}}>이미지가 없습니다.</div>
              )}
            </div>
            <input
              type="file"
              accept="image/*"
              onChange={handleImageChange}
              style={{ display: 'none' }}
              ref={fileInputRef}
            />
          </div>
          <div
            style={{
              border: "1px solid gray",
              padding: "20px",
              textAlign: "center",
              height: "680px",
            }}
          >
            두 번째 div
          </div>
        </div>
        <div
          style={{
            border: "1px solid gray",
            padding: "20px",
            textAlign: "center",
            height: "1000px",
            width: "70%"
          }}



        >
          세 번째 div
        </div>
      </div>
    </div>
  );
};

export default User;