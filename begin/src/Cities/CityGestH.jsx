import React, {useEffect, useState} from 'react';
import {useLocation, useNavigate} from "react-router-dom";

const CityGestH = () => {

    const location = useLocation();
    const navigate = useNavigate(); // useNavigate 훅으로 navigate 함수 생성

    const handleClick = () => {
        navigate('/city'); // 버튼 클릭 시 Middle 컴포넌트로 이동
    };

    // 도착지 컴포넌트에서
    const { allContent } = location.state || {}; // selectedPlace를 받아옵니다.

    const [contents, setContents] = useState([]);

    useEffect(() => {
        // 전달받은 state에서 allContent를 가져와서 contents 상태에 설정
        if (location.state && location.state.allContent) {
            setContents(location.state.allContent);  // allContent를 contents에 설정
        }
    }, [location]);  // location이 변경될 때마다 useEffect 실행

    const CheckBoxContent = () =>{
        return(
            <div>
                {
                    contents.map((content, index) => {
                        if (content[0] === "1") {
                            return (
                                <div key={index}>
                                    <p>{content[0]}</p>
                                    <h3>{content[1]}</h3>
                                    <p>{content[2]}</p>
                                </div>
                            );
                        }})
                    }
            </div>
        );
    }

    return (
        <div style={{border: "2px solid black"}}>
            <div style={{border: "2px solid black"}}>
                <div style={{border: "2px solid black"}}>
                    {/*지도*/}
                </div>
                <CheckBoxContent />
            </div>
            <div style={{border: "2px solid black"}}>
                <div  style={{border: "2px solid black"}}>
                    <p>{}의 숙소 종류</p>
                </div>
                <div style={{border: "2px solid black"}}>
                    {/*숙소 이미지*/}
                </div>
            </div>
            <button onClick={handleClick}>뒤로가기</button>
        </div>
    );
};

export default CityGestH;
