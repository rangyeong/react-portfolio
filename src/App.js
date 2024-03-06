import  React from 'react';
import './App.css';
import About from './pages/About';
import Home from './pages/Home';
import Skill from './pages/Skill';
import ProjectList from './pages/ProjectList';
import Contact from './pages/Contact';
import Header from './components/Header';
import Combine from './pages/Combine';
import { useState } from 'react';
import { useEffect } from 'react';
import SideMenu from './components/SideMenu';



const project = [
  {
    id : 0,
    title : '포트폴리오',
    cate : 'Responsive Web',
    photo : 1,
    skill : 'Html5, Css3, React, styled-components',
    tools : 'Visual Studio Code',
    people : '1명',
    site : 'https//',
    info : '프론트엔드 취업을 위한 포트폴리오 사이트 입니다. 표지 등 곳곳에 테마와 맞는 흐르는 물의 애니메이션을 적용하였습니다. 스크롤 이벤트를 이용해 원스크롤페이지 전환을 할 수 있도록 하여 의도한 애니메이션이 전체적으로 잘 보여질 수 있게 하였고 스킬과 프로젝트의 상세 설명 등은 state변수를 통해 모달창을 띄었습니다. contact부분에서는 간편히 메일을 보낼 수 있는 기능을 구현했습니다.'
  },
  {
    id : 1,
    title : '왓챠 클론 코딩',
    cate : 'Responsive Web',
    photo : 2,
    skill : 'Html5, Css3, React, styled-components, react - router',
    tools : 'Visual Studio Code',
    people : '4명',
    site : 'https//',
    info : '팀프로젝트로 react를 통해 왓챠의 클론 코딩을 구현하였습니다. 모든 페이지를 컴포넌트와 useNavigate 훅을 통해 전환이 이루어지게 하였고 재사용 가능한 utill들을 만들어 효율적으로 사이트를 구성하였습니다.'
  },
  {
    id : 2,
    title : '아르르 메인페이지 개선 및 리뷰 페이지 클론 코딩 ',
    cate : 'Responsive Web',
    photo : 3,
    skill : 'Html5, Css3',
    tools : 'Visual Studio Code',
    people : '1명',
    site : 'https//', 
    info : '<아르르>웹 사이트의 메인페이지를 타 사이트의 UI구성을 벤치마킹하여 반응형으로 재구성 하고 출력하였습니다. 서브 페이지로 리뷰 페이지의 클론 코딩을 구현하였습니다. '
  },
  {
    id : 3,
    title : '오늘의 집 메인페이지 개선',
    cate : 'Pc Web',
    photo : 4,
    skill : 'Html5, Css3',
    tools : 'Visual Studio Code',
    people : '1명',
    site : 'https//', 
    info : '<오늘의 집>웹 사이트 메인페이지의 기본 구조를 구현하며 app에 최적화된 화면 UI를 브라우저 출력 화면에 맞춰 재구성해봤습니다. '
  },
  {
    id : 4,
    title : '교보문고 메인페이지 개선',
    cate : 'Pc Web',
    photo : 5,
    skill : 'Html5, Css3',
    tools : 'Visual Studio Code',
    people : '1명',
    site : 'https//',
    info : '<교보문고>웹 사이트의 베스트 셀러 페이지의 크기별 UI를 제작해 그에 맞처 반응형 웹으로 구현하였습니다.'
  },
];

export const DataContext = React.createContext();
export const SkillConText = React.createContext();

function App() {
  
  const [isSide, setIsSide] = useState(false);
  const [currentInputs, setCurrentInputs] = useState({
    currentWindowHeight : window.innerHeight,
    currentPage : 0,
})

const wholePage = document.getElementsByClassName("slider");
const totalPageNumber = wholePage[0]?.children?.length;

const setPageSize = () => {
  setCurrentInputs({currentWindowHeight : window.innerHeight});
}
const setPage = () => {
  for(var i = 1; i < totalPageNumber; i++){
      if(window.scrollY < currentInputs.currentWindowHeight * i){
          setCurrentInputs({...currentInputs, currentPage : i})
          return;
      }
  }
};

useEffect (()=>{
  window.addEventListener("scroll", setPage);
  window.addEventListener("resize", setPageSize);
  return ()=>{
      window.removeEventListener("scroll", setPage);
      window.removeEventListener("resize", setPageSize);
  };
});

/*
window.addEventListener("wheel", (e)=>{
  if(e.deltaY > 0){
      let p = 1;
      while(p < totalPageNumber){
          if(currentInputs.currentPage === p){
              window.scrollTo({
                  top : currentInputs.currentWindowHeight * p,
                  behavior : "smooth",
              })
          }
          p++;
      }
  };
  if(e.deltaY < 0){
      let p = 1;
      while(p < totalPageNumber){
          if(currentInputs.currentPage === p){
              window.scrollTo({
                  top : currentInputs.currentWindowHeight * (p - 1),
                  behavior : "smooth"
              })
          }
          p++;
      }
  }
});
*/ 

  return (
    <DataContext.Provider value={project}>
        <div className="App">
            <div className="Combine slider">
              <Header setIsSide={setIsSide} isSide={isSide}/>
              <SideMenu isSide={isSide} />
              <div>
                  <Home />
                  <About />
                  <Skill />
                  <ProjectList />
                  <Contact />
              </div>
            </div>
        </div>
    </DataContext.Provider>
  );
}

export default App;
