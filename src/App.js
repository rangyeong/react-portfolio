import  React from 'react';
import './App.css';
import About from './pages/About';
import Home from './pages/Home';
import Skill from './pages/Skill';
import ProjectList from './pages/ProjectList';
import Contact from './pages/Contact';
import Header from './components/Header';
import Combine from './pages/Combine';



const project = [
  {
    id : 0,
    title : '아리따움 클론 코딩',
    cate : 'Pc Web',
    photo : 1,
    skill : 'Html5, Css3',
    tools : 'Visual Studio Code',
    peple : '1명',
    site : 'https//', 
  },
  {
    id : 1,
    title : '울산 관광 개선',
    cate : 'Pc Web',
    photo : 2,
    skill : 'Html5, Css3',
    tools : 'Visual Studio Code',
    peple : '1명',
    site : 'https//',
  },
  {
    id : 2,
    title : '오늘의 집 메인페이지 개선',
    cate : 'Pc Web',
    photo : 2+1,
    skill : 'Html5, Css3',
    tools : 'Visual Studio Code',
    peple : '1명',
    site : 'https//', // ++
  },
  {
    id : 3,
    title : '귀뚜라미몰 클론 코딩',
    cate : 'Mobile Web',
    photo : 3+1,
    skill : 'Html5, Css3',
    tools : 'Visual Studio Code',
    peple : '1명',
    site : 'https//',
  },
  {
    id : 4,
    title : '보그 클론 코딩',
    cate : 'Responsive Web',
    photo : 4+1,
    skill : 'Html5, Css3',
    tools : 'Visual Studio Code',
    peple : '1명',
    site : 'https//', 
  },
  {
    id : 5,
    title : '아르르 메인 페이지 개선 및 리뷰 페이지 클론 코딩 ',
    cate : 'Responsive Web',
    photo : 5+1,
    skill : 'Html5, Css3',
    tools : 'Visual Studio Code',
    peple : '1명',
    site : 'https//', // ++
  },
  {
    id : 6,
    title : '가위바위보 게임',
    cate : 'JavaScript',
    photo : 6+1,
    skill : 'Html5, Css3, JavaScript',
    tools : 'Visual Studio Code',
    peple : '1명',
    site : 'https//',
  },
  {
    id : 6+1,
    title : '농구 게임',
    cate : 'JavaScript',
    photo : 6+2,
    skill : 'Html5, Css3, JavaScript',
    tools : 'Visual Studio Code',
    peple : '1명',
    site : 'https//', //++
  },
  {
    id : 7+1,
    title : '로또번호 생성기',
    cate : 'JavaScript',
    photo : 7+2,
    skill : 'Html5, Css3, JavaScript',
    tools : 'Visual Studio Code',
    peple : '1명',
    site : 'https//', //++
  },
  {
    id : 8+1,
    title : '하나 금융그룹 클론 코딩',
    cate : 'Pc Web',
    photo : 8+2,
    skill : 'Html5, Css3, JavaScript, JQuery',
    tools : 'Visual Studio Code',
    peple : '1명',
    site : 'https//', //++
  },
  {
    id : 9+1,
    title : '하나 투어 클론 코딩',
    cate : 'Pc Web',
    photo : 9+2,
    skill : 'Html5, Css3, JavaScript, JQuery',
    tools : 'Visual Studio Code',
    peple : '1명',
    site : 'https//', //++
  },
  {
    id : 10+1,
    title : '롯데 호텔&리조트 클론 코딩',
    cate : 'Responsive Web',
    photo : 10+2,
    skill : 'Html5, Css3, JavaScript, JQuery',
    tools : 'Visual Studio Code',
    peple : '1명',
    site : 'https//', //++
  },
  {
    id : 11+1,
    title : '다이어리 앱',
    cate : 'Responsive Web',
    photo : 11+2,
    skill : 'Html5, Css3, React',
    tools : 'Visual Studio Code',
    peple : '1명',
    site : 'https//', //++
  },
  {
    id : 12+1,
    title : '디즈니 플러스 클론 코딩',
    cate : 'Responsive Web',
    photo : 12+2,
    skill : 'Html5, Css3, React, styled-components, react - router',
    tools : 'Visual Studio Code',
    peple : '1명',
    site : 'https//', 
  },
  {
    id : 13+1,
    title : '왓챠 클론 코딩',
    cate : 'Responsive Web',
    photo : 13+2,
    skill : 'Html5, Css3, React, styled-components, react - router',
    tools : 'Visual Studio Code',
    peple : '4명',
    site : 'https//', //++
  }
];

export const DataContext = React.createContext();
function App() {
  return (
    <DataContext.Provider value={project}>
        <div className="App">
          <Header />
          <Combine />
        </div>
    </DataContext.Provider>
  );
}

export default App;
