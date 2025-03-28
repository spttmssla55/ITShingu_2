import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import fanfare from './image/fanfare.png';
import fan1 from './image/1.jpg';
import fan2 from './image/2.jpg';
import fan3 from './image/3.jpg';
import fan4 from './image/4.jpg';
import fan5 from './image/5.jpg';
import arrowLeft from './image/arrow-left.png';
import arrowRight from './image/arrow-right.png';
import spring from './image/spring.png';
import fan2_1 from './image/2-1.jpg';
import fan2_2 from './image/2-2.jpg';

const Meddle = () => {
  const [startIndex, setStartIndex] = useState(0);
  const [activeButton, setActiveButton] = useState("left");
  const boxes = Array(9).fill("혜택 보기");

  const handleNext = () => {
    if (startIndex + 3 < boxes.length) {
      setStartIndex(startIndex + 3);
    }
  };

  const handlePrev = () => {
    if (startIndex - 3 >= 0) {
      setStartIndex(startIndex - 3);
    }
    
  };
    
  return (
    <MeddleContainer>
      <ImageSlider />

      <ResponsiveContainer>
        {/* 여가 최저가 보장 텍스트가 왼쪽에 배치 */}
        <FanfareContainer>
          <FanfareImage src={fanfare} alt="fanfare" />
          <FanfareText>여가 최저가 보장!</FanfareText>
          <FanfareImage src={fanfare} alt="fanfare" />
        </FanfareContainer>

        <ResponsiveContainer_1>
        <ArrowButton onClick={handlePrev}>&lt;</ArrowButton>
        <BoxWrapper>
          <BoxSlider style={{ transform: `translateX(-${startIndex * (100 / 3)}%)` }}>
            {boxes.map((text, index) => (
              <ResponsiveBox key={index}>{text}</ResponsiveBox>
            ))}
          </BoxSlider>
        </BoxWrapper>
        <ArrowButton onClick={handleNext}>&gt;</ArrowButton>
        </ResponsiveContainer_1>
      </ResponsiveContainer>

      {/* ✅ 새로 추가된 컴포넌트 */}
      <ToggleRectangles />
      <img src={spring} alt='spring' style={{ marginTop: "20px", width: "100%", maxWidth: "1180px" }} /> 
      <span style={{ fontSize: "24px", fontWeight: "bold", display: "block", width: "100%", maxWidth: "1180px" }}>평점순</span>
      {/* ✅ 둥근 사각형 리스트 */}
      <RoundedRectangleContainer>
        <RoundedRectangle>
          <img src={fan2_1} alt="fan2_1"/>
        </RoundedRectangle>
        <RoundedRectangle>
          <img src={fan2_2} alt="fan2_2"/>
        </RoundedRectangle>
        <RoundedRectangle>
          <img src={fan2_1} alt="fan2_1"/>
        </RoundedRectangle>
        <RoundedRectangle>
          <img src={fan2_2} alt="fan2_2"/>
        </RoundedRectangle>
        <RoundedRectangle>
          <img src={fan2_1} alt="fan2_1"/>
        </RoundedRectangle>
        <RoundedRectangle>
          <img src={fan2_2} alt="fan2_2"/>
        </RoundedRectangle>
      </RoundedRectangleContainer>
      <span style={{ fontSize: "24px", fontWeight: "bold", display: "block", width: "100%", maxWidth: "1180px", marginTop: "40px" }}>도시이름</span>
      <MeddleContainer>
        <NewSlider items={['새로운 아이템 1', '새로운 아이템 2', '새로운 아이템 3','새로운 아이템 4','새로운 아이템 5','새로운 아이템 6','새로운 아이템 7','새로운 아이템 8']} />
      </MeddleContainer>
    </MeddleContainer>
  );
};

const NewSlider = ({ items }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const itemsPerPage = 4;

  const handleNewPrev = () => {
    setCurrentIndex((prevIndex) => Math.max(prevIndex - itemsPerPage, 0));
  };

  const handleNewNext = () => {
    setCurrentIndex((prevIndex) =>
      Math.min(prevIndex + itemsPerPage, items.length - itemsPerPage)
    );
  };

  return (
    <NewSliderContainer>
      <NewItemsContainer
        style={{
          transform: `translateX(-${(currentIndex / itemsPerPage) * 50}%)`, // 4개씩 슬라이드
          width: `${items.length * 200}px`, // 전체 아이템 너비 (아이템 너비 * 개수)
        }}
      >
        {items.map((item, index) => (
          <NewItem key={index}>{item}</NewItem>
        ))}
      </NewItemsContainer>
      <NewArrowButton className="new-prev" onClick={handleNewPrev}>
        &lt;
      </NewArrowButton>
      <NewArrowButton className="new-next" onClick={handleNewNext}>
        &gt;
      </NewArrowButton>
    </NewSliderContainer>
  );
};

const ImageSlider = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const intervalRef = useRef(null);
  const images = [fan1, fan2, fan3, fan4, fan5];

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [images.length]);

  const handlePrevClick = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const handleNextClick = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <SliderContainer>
      {/* 왼쪽 화살표 */}
      <SliderArrowLeft 
        src={arrowLeft} 
        alt="Previous" 
        onClick={handlePrevClick} 
      />

      {/* 이미지 리스트 */}
      <ImageContainer style={{ transform: `translateX(-${currentImageIndex * 100}%)` }}>
        {images.map((image, index) => (
          <Image key={index} src={image} alt={`Image ${index + 1}`} />
        ))}
      </ImageContainer>

      {/* 오른쪽 화살표 */}
      <SliderArrowRight 
        src={arrowRight} 
        alt="Next" 
        onClick={handleNextClick} 
      />
    </SliderContainer>
  );
};

// ✅ 새로 추가된 컴포넌트
const ToggleRectangles = () => {
  const [activeButton, setActiveButton] = useState("left");

  return (
    <>
      <ButtonContainer>
        <ToggleButton
          isActive={activeButton === "left"}
          onClick={() => setActiveButton("left")}
        >
          Johannes 님의 최저가 상품
        </ToggleButton>
        <ToggleButton
          isActive={activeButton === "right"}
          onClick={() => setActiveButton("right")}
        >
          Sofia 님의 최저가 상품
        </ToggleButton>
      </ButtonContainer>

      <RectangleContainer>
        {activeButton === "left" ? (
          <>
            <Rectangle>1</Rectangle>
            <Rectangle>2</Rectangle>
            <Rectangle>3</Rectangle>
            <Rectangle>4</Rectangle>
          </>
        ) : (
          <>
            <Rectangle>5</Rectangle>
            <Rectangle>6</Rectangle>
            <Rectangle>7</Rectangle>
            <Rectangle>8</Rectangle>
          </>
        )}
      </RectangleContainer>
    </>
  );
};

// ✅ 스타일 코드
const MeddleContainer = styled.div`
  width: 100%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: 20px;
  box-sizing: border-box;
`;

const ResponsiveContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 100px;
  margin-top: 20px;
  margin-left: 100px;
  width: 100%;
  justify-content: center;
`;
const ResponsiveContainer_1 = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;
const FanfareContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

const FanfareImage = styled.img`
  height: 25px;
  width: 25px;
`;

const FanfareText = styled.span`
  font-size: 22px;
  font-weight: bold;
  color:rgb(0, 0, 0);
`;

const ArrowButton = styled.button`
  background-color: rgba(0, 0, 0, 0.7);
  color: white;
  border: none;
  padding: 10px 15px;
  font-size: 20px;
  cursor: pointer;
  border-radius: 5px;
`;

const BoxWrapper = styled.div`
  width: 80%;
  max-width: 630px;
  overflow: hidden;
`;

const BoxSlider = styled.div`
  display: flex;
  gap: 10px;
  transition: transform 0.5s ease-in-out;
`;

const ResponsiveBox = styled.div`
  width: 30%;
  min-width: 200px;
  height: 250px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 16px;
  font-weight: bold;
  border: 1px solid gray;
  border-radius: 5px;
  cursor: pointer;
`;

const SliderContainer = styled.div`
  position: relative;
  width: 90%;
  max-width: 1200px;
  height: 350px;
  overflow: hidden;
  margin: 0 auto;
  top: 0; /* 추가 */
`;

const SliderArrowLeft = styled.img`
  position: absolute;
  top: 50%;
  left: 10px;
  transform: translateY(-50%);
  width: 40px;
  height: auto;
  cursor: pointer;
  z-index: 100;
`;

const SliderArrowRight = styled.img`
  position: absolute;
  top: 50%;
  right: 10px;
  transform: translateY(-50%);
  width: 40px;
  height: auto;
  cursor: pointer;
  z-index: 100;
`;

const ImageContainer = styled.div`
  display: flex;
  transition: transform 0.5s ease-in-out;
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const ButtonContainer = styled.div`
  display: flex;
  margin-top: 20px;
  border: 1px solid black;
`;

const ToggleButton = styled.button`
  flex-grow: 1;
  padding: 15px 190px;
  font-size: 18px;
  font-weight: bold;
  border: 1px solid gray;
  border-bottom: ${(props) => (props.isActive ? "1px solid transparent" : "1px solid black")};
  background-color: white;
  color: ${(props) => (props.isActive ? "black" : "gray")};
  cursor: pointer;
  transition: all 0.3s ease;
`;

const RectangleContainer = styled.div`
  display: flex;
  gap: 20px;
  margin-top: 20px;
`;

const Rectangle = styled.div`
  width: 280px;
  height: 200px;
  background-color: lightgray;
`;

const RoundedRectangleContainer = styled.div`
  display: flex;
  gap: 20px;
  margin-top: 0px;
`;

const RoundedRectangle = styled.div`
  width: 180px;
  height: 150px;
  background-color: lightgray;
  border-radius: 20px;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const NewSliderContainer = styled.div`
  width: 800px; // 8개의 아이템이 모두 보이도록 컨테이너 너비 설정 (200px * 4)
  overflow: hidden;
  margin-top: 20px;
  position: relative;
`;

const NewItemsContainer = styled.div`
  display: flex;
  transition: transform 0.3s ease-in-out;
`;

const NewItem = styled.div`
  width: 200px;
  height: 200px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 24px;
  background-color: lightblue;
  margin-right: 10px;
`;

const NewArrowButton = styled.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background-color: rgba(0, 0, 0, 0.5);
  color: white;
  border: none;
  padding: 10px 15px;
  font-size: 20px;
  cursor: pointer;

  &.new-prev {
    left: 10px;
  }

  &.new-next {
    right: 10px;
  }
`;
export default Meddle;
