import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Local.css';

const localData = [
  {
    id: 1,
    name: "Sofia",
    location: "볼테라 (Volterra)",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
    intro: "Hi 내 이름은 Sofia~ 잘 부탁해요!",
    detail: "패션을 좋아하는 이탈리아 출신 로컬 가이드입니다.",
  },
  {
    id: 2,
    name: "Matteo",
    location: "보비오 (Bobbio)",
    image: "https://randomuser.me/api/portraits/men/55.jpg",
    intro: "Mate is god! Mate is perfect!",
    detail: "자연과 사진을 사랑하는 사진 작가입니다.",
  },
  {
    id: 3,
    name: "Liam",
    location: "시에나 (Siena)",
    image: "https://randomuser.me/api/portraits/men/41.jpg",
    intro: "I'm Liam, your friendly local!",
    detail: "역사 해설을 잘하는 안내자예요.",
  },
  {
    id: 4,
    name: "Emma",
    location: "아씨시 (Assisi)",
    image: "https://randomuser.me/api/portraits/women/65.jpg",
    intro: "Emma입니다, 맛집 추천 전문가죠!",
    detail: "이탈리아 미식 투어를 안내하는 현지인입니다.",
  },
  {
    id: 5,
    name: "James",
    location: "코르토나 (Cortona)",
    image: "https://randomuser.me/api/portraits/men/25.jpg",
    intro: "여행은 James와 함께!",
    detail: "유쾌하고 친절한 소도시 가이드입니다.",
  },
  {
    id: 6,
    name: "Olivia",
    location: "오르비에토 (Orvieto)",
    image: "https://randomuser.me/api/portraits/women/33.jpg",
    intro: "음악과 예술을 좋아하는 Olivia예요!",
    detail: "소도시의 문화와 예술을 소개해요.",
  },
  {
    id: 7,
    name: "Noah",
    location: "산지미냐노 (San Gimignano)",
    image: "https://randomuser.me/api/portraits/men/23.jpg",
    intro: "Noah와 함께 커피 한 잔 어때요?",
    detail: "카페와 골목길 전문 현지인입니다.",
  },
  {
    id: 8,
    name: "Isabella",
    location: "첸토 (Cento)",
    image: "https://randomuser.me/api/portraits/women/12.jpg",
    intro: "Isabella입니다! 골목 맛집 전문가에요!",
    detail: "현지인만 아는 비밀 맛집을 소개해드려요.",
  },
  {
    id: 9,
    name: "Ethan",
    location: "라벤나 (Ravenna)",
    image: "https://randomuser.me/api/portraits/men/66.jpg",
    intro: "건축과 역사에 진심인 Ethan입니다!",
    detail: "중세 건축과 유적을 소개하는 전문가입니다.",
  },
  {
    id: 10,
    name: "Ava",
    location: "루카 (Lucca)",
    image: "https://randomuser.me/api/portraits/women/19.jpg",
    intro: "감성 여행 좋아하는 Ava예요.",
    detail: "사진 찍기 좋은 장소를 추천해요.",
  },
];

function Local() {
  const navigate = useNavigate();

  const handleMoreClick = (user) => {
    navigate(`/locals?name=${user.name}`);
  };

  return (
    <div className="local-container">
      <h1 className="local-title">현지인 소개</h1>
      <div className="local-list">
        {localData.map((user) => (
          <div key={user.id} className="user-card">
            <img src={user.image} alt={user.name} />
            <div className="user-info">
              <h2>{user.name}</h2>
              <p>📍 {user.location}</p>
              <p>{user.intro}</p>
            </div>
            <button onClick={() => handleMoreClick(user)}>더 알아보기 ▶</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Local;
