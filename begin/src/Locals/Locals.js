import React, { useState } from "react";
import "./Locals.css";
import LocalsImage from '../image/Locals.jpg';  // 경로 수정
import { FaSearch } from 'react-icons/fa';  // react-icons에서 돋보기 아이콘 import

// 호텔 이미지들 import
import Hotel1Image from '../image/Hotel1.jpg';
import Hotel2Image from '../image/Hotel2.jpg';
import Hotel3Image from '../image/Hotel3.jpg';

const Locals = () => {
  const [searchQuery, setSearchQuery] = useState("");  // 상태 추가: 검색어

  const handleSearch = () => {
    // 검색어 처리 로직을 여기서 추가 (예: 콘솔에 검색어 출력)
    console.log("검색어:", searchQuery);
    // 추후 실제 데이터와 연결하여 검색 기능을 구현할 수 있습니다.
  };

  return (
    <div className="locals-container">
      {/* 상단 이미지 */}
      <header className="locals-header">
        <img src={LocalsImage} alt="Small City" className="header-image" />
        <div className="header-text">
          <h1>작은 도시, 거대한 감동</h1>
          <p>여기와 함께, 외국 있는 여행의 진짜를 찾아 떠나요.</p>
          <div className="search-container">
            <input 
              type="text" 
              placeholder="여행 키워드 검색" 
              className="search-input"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}  // 입력값을 상태에 반영
            />
            <button className="search-btn" onClick={handleSearch}>
              <FaSearch /> {/* 돋보기 아이콘 추가 */}
            </button>
          </div>
        </div>
      </header>

      {/* 추천 장소 */}
      <section className="recommendations">
        <h2>현재인과 함께하는 소도시 여행 속 추천 장소</h2>
        <div className="recommendation-list">
          <div className="recommendation-card">
            <img
              src={Hotel1Image}  // 호텔1 이미지 경로 적용
              alt="Hotel Artemide"
              className="card-image"
            />
            <div className="card-info">
              <h3>Hotel Artemide</h3>
              <p>Via Nazionale, 22, 00184 Roma RM, Italy</p>
              <span>추천인: Sofia</span>
            </div>
          </div>

          <div className="recommendation-card">
            <img
              src={Hotel2Image}  // 호텔2 이미지 경로 적용
              alt="Hotel Ritz Paris"
              className="card-image"
            />
            <div className="card-info">
              <h3>Hotel Ritz Paris</h3>
              <p>15 Place Vendôme, 75001 Paris, France</p>
              <span>추천인: Matteo</span>
            </div>
          </div>

          <div className="recommendation-card">
            <img
              src={Hotel3Image}  // 호텔3 이미지 경로 적용
              alt="The Plaza Hotel"
              className="card-image"
            />
            <div className="card-info">
              <h3>The Plaza Hotel</h3>
              <p>Fifth Avenue at Central Park South, New York, NY 10019, USA</p>
              <span>추천인: Sofia</span>
            </div>
          </div>
        </div>
        <button className="view-more-btn">더 보기</button>
      </section>

      <footer className="footer">
        <div className="footer-info">
          <ul>
            <li><a href="#">Privacy Policy</a></li>
            <li><a href="#">Terms and Conditions</a></li>
            <li><a href="#">FAQs</a></li>
          </ul>
          <ul>
            <li><a href="#">Blog</a></li>
            <li><a href="#">Submit Listing</a></li>
            <li><a href="#">Support</a></li>
          </ul>
        </div>
        <div className="footer-contact">
          <p>주소: 13174, 성남시 중원구 광명로 377 신구대학교</p>
          <p>전화: 031-740-1114</p>
        </div>
      </footer>
    </div>
  );
};

export default Locals;
