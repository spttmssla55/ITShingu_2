import React, { useState } from 'react';
import styled from 'styled-components';

const Footer = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);  // 팝업 상태 관리
    const openModal = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    return (
        <FooterContainer>
            {/* 4행 4열 레이아웃 */}
            <GridContainer>
                <StyledDiv style={{fontSize: "25px", fontWeight: "bold"}}>고객지원실 운영안내</StyledDiv>
                <StyledDiv style={{fontSize: "20px", marginLeft: "250px"}}>소개</StyledDiv>
                <StyledDiv style={{fontSize: "20px", marginLeft: "200px"}}>파트너</StyledDiv>
                <StyledDiv style={{fontSize: "20px", marginLeft: "180px"}}>지원</StyledDiv>
                
                {/* 수업 시간 항목만 여백 없애기 */}
                <StyledDiv noMargin>수업 시간 09:00 ~ 16:20</StyledDiv>  

                <StyledDiv style={{fontSize: "20px", marginLeft: "250px"}}>6</StyledDiv>
                <StyledDiv style={{fontSize: "20px", marginLeft: "200px"}}>7</StyledDiv>
                <StyledDiv style={{fontSize: "20px", marginLeft: "180px"}}>8</StyledDiv>
                
                {/* 점심 시간 항목만 여백 없애기 */}
                <StyledDiv noMargin>점심 시간 12:35 ~ 13:35</StyledDiv>

                <StyledDiv style={{fontSize: "20px", marginLeft: "250px"}}>10</StyledDiv>
                <StyledDiv style={{fontSize: "20px", marginLeft: "200px"}}>11</StyledDiv>
                <StyledDiv style={{fontSize: "20px", marginLeft: "180px"}}>12</StyledDiv>

                {/* 우선 상담 시간 항목만 여백 없애기 */}
                <StyledDiv noMargin>우선 상담 1234 ~ 5678</StyledDiv>
                
                <StyledDiv style={{fontSize: "20px", marginLeft: "250px"}}>14</StyledDiv>
                <StyledDiv style={{fontSize: "20px", marginLeft: "200px"}}>15</StyledDiv>
                <StyledDiv style={{fontSize: "20px", marginLeft: "180px"}}>16</StyledDiv>
            </GridContainer>
            
            {/* 팝업 모달 */}
            {isModalOpen && (
                <ModalOverlay>
                    <Modal>
                        <h1 style={{color: "blue", textAlign: "center"}}>팀 소개</h1>
                        <p>조장: 오준희</p>
                        <p>조원: 백승범, 이어진, 한석현</p>
                        <ButtonContainer>
                            <button onClick={closeModal}>닫기</button>
                        </ButtonContainer>
                    </Modal>
                </ModalOverlay>
            )}
        </FooterContainer>
    );
};

// Footer 스타일링
const FooterContainer = styled.div`
    margin-top: auto;
    background-color: white;
    color: black;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
`;

// 4행 4열 레이아웃을 위한 Grid 컨테이너
const GridContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);  /* 4열 */
    grid-template-rows: auto;  /* 자동으로 높이를 맞추기 위해 수정 */
    gap: 0;  /* gap을 0으로 설정하여 간격을 제거 */
    width: 100%;
    max-width: 1180px;
`;

// 각 div 스타일
const StyledDiv = styled.div`
    width: 100%;
    color: black;
    display: flex;
    align-items: center; /* 세로 중앙 정렬 */
    margin-top: 0; /* 위 여백 제거 */
    margin-bottom: 0; /* 아래 여백 제거 */
`;

// 팝업 모달 스타일링
const ModalOverlay = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
`;

const Modal = styled.div`
    background-color: white;
    padding: 20px;
    border-radius: 10px;
    width: 300px;
    

    button {
        margin-top: 20px;
    }
`;

// 버튼을 중앙 정렬하기 위한 컨테이너
const ButtonContainer = styled.div`
    display: flex;
    justify-content: center; /* 수평 중앙 정렬 */
    width: 100%;
`;

export default Footer;
