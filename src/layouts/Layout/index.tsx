import React from 'react'
import { Outlet } from 'react-router'

// 스타일 적용
import './style.css'

// component : 로그인 회원가입 화면 컴포넌트 //
export default function Layout() {

  // render : 로그인 회원가입 화면 컴포넌트 렌더링 //
  return (
    <div>
        <Outlet />
    </div>
  )
}
