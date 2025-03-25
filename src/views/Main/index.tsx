import React from "react";
import DefaultProfile from 'src/assets/images/default-profile.png'
import './style.css';

// interface: 메인 화면 컴포넌트 //
export default function Main(){ 
  // reder: 메인 화면 컴포넌트 렌더링 //
  return ( 
    <div id='main-wrapper'>
      <div className="user-info-container">
        <div className="profile-image" style={{ backgroundImage: `url(${DefaultProfile})` }}></div>
        <div className="user-info-box"></div>
        <div className="button second middle">수정</div>
      </div>
      <div className="recently-container"></div>
    </div>
  )
}