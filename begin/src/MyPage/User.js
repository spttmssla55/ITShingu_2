import React, { useState, useRef } from 'react';
import styled from 'styled-components';

const User = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [selectedMenu, setSelectedMenu] = useState('info'); // Default to 'info' menu
  const fileInputRef = useRef(null);

  const handleMenuClick = (menu) => {
    setSelectedMenu(menu);
  };

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

  const renderContent = () => {
    switch (selectedMenu) {
      case 'info':
        return (
          <div>
            <button
              style={{
                float: "right",
              }}>편집</button>
            <p>이름: 홍길동</p>
            <p>나이: 30</p>
            <p>이메일: gildong.hong@example.com</p>
            {/* Add more personal information here */}
          </div>
        );
      case 'image':
        return (
          <div>
            <h2>프로필 이미지</h2>
            {selectedImage ? (
              <img
                src={selectedImage}
                alt="Selected Image"
                style={{ maxWidth: '100%', maxHeight: '300px' }}
              />
            ) : (
              <p>선택된 이미지가 없습니다.</p>
            )}
          </div>
        );
        case 'wishlist':
          return(
            <div>
            <h2>위시리스트</h2>
            {selectedImage ? (
              <img
                src={selectedImage}
                alt="Selected Image"
                style={{ maxWidth: '100%', maxHeight: '300px' }}
              />
            ) : (
              <p>선택된 이미지가 없습니다.</p>
            )}
          </div>
          );
          case 'recently':
            return(
              <div>
              <h2>최근 본</h2>
              {selectedImage ? (
                <img
                  src={selectedImage}
                  alt="Selected Image"
                  style={{ maxWidth: '100%', maxHeight: '300px' }}
                />
              ) : (
                <p>선택된 이미지가 없습니다.</p>
              )}
            </div>
            );
      default:
        return <div>선택된 메뉴가 없습니다.</div>;
    }
  };

  return (
    <div>
      <span
        style={{
          marginTop: '100px',
          display: 'block',
          fontSize: '35px',
        }}
      >
        마이페이지
      </span>

      <div
        style={{
          width: '1180px',
          display: 'flex',
          flexDirection: 'row',
          gap: '20px',
        }}
      >
        <div
          style={{
            width: '30%',
            display: 'flex',
            flexDirection: 'column',
            gap: '20px',
          }}
        >
          <div
            style={{
              border: '1px solid gray',
              padding: '20px',
              height: '400px',
              textAlign: 'center',
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
                height: '65%',
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
                <div style={{ marginTop: '100px' }}>이미지가 없습니다.</div>
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
              border: '1px solid gray',
              padding: '20px',
              textAlign: 'center',
              height: 'auto',
              display: 'flex',
              flexDirection: 'column',
              gap: '10px',
            }}
          >
            <button
              style={{
                padding: '10px',
                border: 'none',
                cursor: 'pointer',
                backgroundColor: selectedMenu === 'info' ? '#f0f0f0' : 'white',
              }}
              onClick={() => handleMenuClick('info')}
            >
              계정
            </button>
            <button
              style={{
                padding: '10px',
                border: 'none',
                cursor: 'pointer',
                backgroundColor: selectedMenu === 'image' ? '#f0f0f0' : 'white',
              }}
              onClick={() => handleMenuClick('image')}
            >
              예약 내역
            </button>
            <button
              style={{
                padding: '10px',
                border: 'none',
                cursor: 'pointer',
                backgroundColor: selectedMenu === 'wishlist' ? '#f0f0f0' : 'white',
              }}
              onClick={() => handleMenuClick('wishlist')}
            >
              위시리스트
            </button>
            <button
              style={{
                padding: '10px',
                border: 'none',
                cursor: 'pointer',
                backgroundColor: selectedMenu === 'recently' ? '#f0f0f0' : 'white',
              }}
              onClick={() => handleMenuClick('recently')}
            >
              최근 본
            </button>
            {/* Add more menu buttons as needed */}
          </div>
        </div>
        <div
          style={{
            border: '1px solid gray',
            padding: '20px',
            textAlign: 'left',
            height: '1000px',
            width: '70%',
          }}
        >
          {renderContent()}
        </div>
      </div>
    </div>
  );
};

export default User;