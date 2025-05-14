import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      
    <div className="wrap">

      <h1><img src="/logo-gabia.svg" alt="가비아" /></h1>
      <p>맞춤형 정보 제공을 위해 로그인이 필요합니다.</p>
      
      <form action="">
        <div className="input-wrap">
            <fieldset>
              <legend>로그인정보</legend>

              <div className="input-box">
                <input type="text" placeholder='아이디'/>
                <input type="password" placeholder='비밀번호'/>
                <button type='submit'>로그인</button>
              </div>
            </fieldset>
        </div> {/* input-wrap */}

        <div className='sns-list'>
          <ul>
            <li><a href="#"><img src="/icon_google.svg" alt="구글 로그인" /><p>구글 로그인</p></a></li>
            <li><a href="#"><img src="/icon_naver.svg" alt="네이버 로그인" /><p>네이버 로그인</p></a></li>
            <li><a href="#"><img src="/icon_kakao.svg" alt="카카오 로그인" /><p>카카오 로그인</p></a></li>
          </ul>
        </div> {/* sns-list */}

        <div className='find-join'>
          <ul>
            <li><a href="#">아이디 찾기</a></li>
            <li><a href="#">비밀번호 찾기</a></li>
            <li><a href="#">회원 가입</a></li>
          </ul>
        </div>

        <div className='add-btn'>
          <button type='button'>로그인 없이 연장하기</button>
        </div>

      </form>
    </div>{/* wrap */}

    </>
  )
}

export default App
