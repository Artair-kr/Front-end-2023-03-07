import React from "react";
import UserInfo from "../UserInfo";
import { CONCENTRATION_TEST_ABSOLUTE_PATH } from "src/constants";
import { useNavigate } from "react-router";

// component: 최근 집중력 검사 컴포넌트 //
export default function RecentlyConcentration(){ 

  // fucntion: 네비게이터 함수 //
  const navigator = useNavigate();
  
  const onTestClickHandler = () => { 
    navigator(CONCENTRATION_TEST_ABSOLUTE_PATH);
  };

  // render: 최근 집중력 검사 컴포넌트 렌더링 //
  return ( 
      <div className='recently-container'>
        <div className='recently-top'>
          <div className='recently-title-box'>
            <div className='title'>집중력 검사 기록</div>
            <div className='info-button'>집중력을 높이는 방법<div className='icon' /></div>
          </div>
          <div className='button primary middle'>검사하러가기</div>
        </div>
        <div className='recently-chart-box'></div>
      </div>
  )
}