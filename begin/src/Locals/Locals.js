import React, { useState } from "react";
import "./Locals.css";
import LocalsImage from "../image/Locals.jpg";
import { FaSearch, FaUserCircle } from "react-icons/fa";

// 호텔 이미지들 import
import Hotel1Image from "../image/Hotel1.jpg";
import Hotel2Image from "../image/Hotel2.jpg";
import Hotel3Image from "../image/Hotel3.jpg";
import Hotel4Image from "../image/Hotel4.jpg";
import Hotel5Image from "../image/Hotel5.jpg";
import Hotel6Image from "../image/Hotel6.jpg";
import Hotel7Image from "../image/Hotel7.jpg";

const contents = {
  header: {
    title: "작은 도시, 거대한 감동",
    subtitle: "여기와 함께, 외국 있는 여행의 진짜를 찾아 떠나요.",
  },
  hotels: [
    { image: Hotel1Image, name: "Hotel Artemide", location: "Rome, Italy", recommendedBy: "Sofia" },
    { image: Hotel2Image, name: "Hotel Diana Roof Garden", location: "Rome, Italy", recommendedBy: "Matteo" },
    { image: Hotel3Image, name: "Starhotels Metropole", location: "Rome, Italy", recommendedBy: "Sofia" },
    { image: Hotel4Image, name: "Rome Marriott Grand Hotel Flora", location: "Rome, Italy", recommendedBy: "Liam" },
    { image: Hotel5Image, name: "Intercontinental Rome Ambasciatori Palace", location: "Rome, Italy", recommendedBy: "Emma" },
    { image: Hotel6Image, name: "Il Grande Gatsby Bar & Restaurant by 'UNA cucina'", location: "Rome, Italy", recommendedBy: "James" },
    { image: Hotel7Image, name: "Hotel Scott House", location: "Rome, Italy", recommendedBy: "Liam" },
  ],
  recommenders: [
    { name: "Sofia", image: "https://via.placeholder.com/30" },
    { name: "Matteo", image: "https://via.placeholder.com/30" },
    { name: "Liam", image: "https://via.placeholder.com/30" },
    { name: "Emma", image: "https://via.placeholder.com/30" },
    { name: "James", image: "https://via.placeholder.com/30" },
    { name: "Sophia", image: "https://via.placeholder.com/30" },
    { name: "Olivia", image: "https://via.placeholder.com/30" },
  ],
};

const Locals = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [hotels, setHotels] = useState(contents.hotels.slice(0, 4)); // 처음에는 4개의 호텔만 보임
  const [showMore, setShowMore] = useState(true);
  const [showRecommenders, setShowRecommenders] = useState(false);

  const handleSearch = () => console.log("검색어:", searchQuery);

  const handleViewMore = () => {
    const nextHotels = contents.hotels.slice(hotels.length, hotels.length + 4); // 현재 리스트에 4개씩 추가
    const newHotels = [...hotels, ...nextHotels];
    setHotels(newHotels);
    
    if (newHotels.length >= 16) {
      setShowMore(false); // 최대 16개까지만 보이도록 설정
    }
  };

  const toggleRecommenders = () => {
    setShowRecommenders((prev) => !prev);
  };

  return (
    <div className="locals-container">
      <header className="locals-header">
        <img src={LocalsImage} alt="Small City" className="header-image" />
        <div className="header-text">
          <h1>{contents.header.title}</h1>
          <p>{contents.header.subtitle}</p>
          <div className="search-container">
            <input
              type="text"
              placeholder="여행 키워드 검색"
              className="search-input"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <button className="search-btn" onClick={handleSearch}>
              <FaSearch />
            </button>
          </div>
        </div>
      </header>

      <section className="recommendations">
        <div className="recommendations-header">
          <h2>현지인과 함께하는 소도시 여행 속 추천 장소</h2>

          {/* 추천인 목록 보기 버튼 */}
          <div className="recommender-container">
            <button className="show-recommenders-btn" onClick={toggleRecommenders}>
              {showRecommenders ? "추천인 목록 숨기기" : "추천인 목록 보기"}
            </button>

            {/* 추천인 목록 - 상태(showRecommenders)에 따라 표시 */}
            <ul className={`recommender-list ${showRecommenders ? "show" : ""}`}>
              {contents.recommenders.map((recommender, index) => (
                <li key={index} className="recommender-item">
                  <img src={recommender.image} alt={recommender.name} className="recommender-image" />
                  <span>{recommender.name}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="recommendation-list">
          {hotels.map((hotel, index) => (
            <div className="recommendation-card" key={index}>
              <div className="card-image-container">
                <img src={hotel.image} alt={hotel.name} className="card-image" />
                {/* 아이콘을 상단 우측에 배치 */}
                <FaUserCircle className="user-icon" />
              </div>
              <div className="card-info">
                <h3>{hotel.name}</h3>
                <p>{hotel.location}</p>
                <span>추천인: {hotel.recommendedBy}</span>
              </div>
            </div>
          ))}
        </div>

        {showMore && <button className="view-more-btn" onClick={handleViewMore}>더 보기</button>}
      </section>
    </div>
  );
};

export default Locals;
