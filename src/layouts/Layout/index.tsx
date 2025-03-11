import React, { useEffect, useRef, useState } from 'react'
import { Outlet } from 'react-router'

// 스타일 적용
import './style.css'

// component: 공통 레이아웃 컴포넌트 //
export default function Layout() {

  // state: My Content List 요소 참조 //
  // (null) : 초기에는 null값이 들어간다.
  const myContentListRef = useRef<HTMLDivElement | null>(null);

  // state: My Content 드롭다운 상태 //
  const [showMyContent, setShowMyContent] = useState<boolean>(false);

  // event handler: My Content 클릭 이벤트 처리 //
  const onMyContentClickHandler = () => {
    setShowMyContent(!showMyContent);
  };

  // effect: My Content 드롭다운 상태가 변경될시 실행할 함수 //
  useEffect(() => {
    const onOutsideClickHandler = (event: any) => {
      if(myContentListRef.current && 
        !myContentListRef.current.contains(event.target as Node)
      ){
        setShowMyContent(false);
      }
    };

    if(!showMyContent) return;

    document.addEventListener('mousedown', onOutsideClickHandler)

  }, [showMyContent]);

  // render: 공통 레이아웃 컴포넌트 렌더링 //
  return (
    <div id='layout-wrapper'>
      <div id='top-bar'>
        <div className='navigation'>
          <div className='title'>Memories</div>
          <div className='navigation-list'>
            <div className='navigation-item active'>기억력 검사</div>
            <div className='navigation-item'>집중력 검사</div>
          </div>
        </div>
        <div className='my-content' onClick={onMyContentClickHandler}>
          {showMyContent && 
          <div ref={myContentListRef} className='my-content-list'>
            <div className='my-content-item'>일기</div>
            <div className='my-content-item'>로그아웃</div>
          </div>
          }
        </div>
      </div>
      <div id='main'>
        <Outlet />
      </div>
    </div>
  )
}
