import React from "react";
import './style.css';

// interface: 메인 화면 컴포넌트 //
export default function Main(){ 
  // reder: 메인 화면 컴포넌트 렌더링 //
  return ( 
    <div id='main-wrapper'>
      <div className="user-info-container"></div>
      <div className="recently-container"></div>
    </div>
  )
}