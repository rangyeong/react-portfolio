import { useContext, useEffect } from "react";
import { useState } from "react";
import ProjectSlideWrap from 'react-slick';
import styled from "styled-components";
import { DataContext } from "../App";
import Header from "../components/Header";
import DropWater from "../components/DropWater";
import PJModal from "../components/PJModal";
import SkillModal from "../components/SkillModal";


const skill01 = 
    [{
      id : 0,
      title: 'html5 & css3',
      con1 : '웹 페이지를 원하는 구조로 스타일링 가능',
      con2 : '미디어 쿼리를 활용한 반응형 웹사이트 구현',
    }];
  
const skill02 = 
    {
      id : 1,
      title: 'JavaScrip & TypeScript',
      con1 : 'ES6문법을 사용해 api, JSON, 등을 활용하여 데이터 가공 및 동적 웹사이트 구현',
      con2 : 'JavaScript를 정적타입으로 개발하여 서비스의 안정을 높인 경험',
    };
  
const skill03 = 
    {
      id : 2,
      title: 'JQuery & React',
      con1 : 'jQuery를 이용하여 JavaScript기반 기능을 빠르고 효율적으로 구현',
      con2 : 'react hook, Styled-Components을 활용하여 함수형 컴포넌트를 연결한 웹앱 제작',
    };
  
const skill04 = 
    {
      id : 3,
      title: 'Node.js',
      con1 : 'Node.js로 서버 구축 경험',
      con2 : '',
    };
  
const skill05 = 
    {
      id : 4,
      title: 'Github',
      con1 : 'Github을 통한 레포지토리 관리',
      con2 : 'Git pull push commit등 명령어 사용',
    };
  
const skill06 = 
    {
      id : 5,
      title: 'Figma & Photoshop',
      con1 : '포토샵과 Figma를 이용해 프로젝트를 기획하고 프로토타입을 만듦',
      con2 : '',
    };
  
const Combine = () => {
    const [isBubble01, setIsBubble01] = useState(false);
    const [isBubble02, setIsBubble02] = useState(false);
    const [isBubble03, setIsBubble03] = useState(false);
    const [isBubble04, setIsBubble04] = useState(false);
    const [isBubble05, setIsBubble05] = useState(false);
    const [isBubble06, setIsBubble06] = useState(false);
    const [isBubbleMoving, setIsBubbleMoving] = useState(true);

    const [isProject, setIsProject] = useState(false);

    const [isPJSlected, setIsPJSlected] = useState();
    const [isModalSelected, setIsModalSelected] = useState(
        {});

    const [currentInputs, setCurrentInputs] = useState({
        currentWindowHeight : window.innerHeight,
        currentPage : 0,
    })

    const wholePage = document.getElementsByClassName("slider");
    const totalPageNumber = wholePage[0]?.children?.length;

    // const posFormTop = Section[currentInputs.currentPage + 1].getBoundingClientReact().top;
    // console.log(posFormTop)

    const handleBubble01 = () => {
        setIsBubble01(!isBubble01);
        handleBubbleMoving();

    };
    const handleBubble02 = () => {
        setIsBubble02(!isBubble02);
        handleBubbleMoving();
    };
    const handleBubble03 = () => {
        setIsBubble03(!isBubble03);
        handleBubbleMoving();
    };
    const handleBubble04 = () => {
        setIsBubble04(!isBubble04);
        handleBubbleMoving();
    };
    const handleBubble05 = () => {
        setIsBubble05(!isBubble05);
        handleBubbleMoving();
    };
    const handleBubble06 = () => {
        setIsBubble06(!isBubble06);
        handleBubbleMoving();
    };
    const handleBubbleMoving = () => {
        setIsBubbleMoving(!isBubbleMoving)
    }

    const handleProject = (project) => {
        setIsProject(!isProject);
        setIsPJSlected(project);
        
    }

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

    useEffect(()=>{
        setIsBubbleMoving(true);
    }, [])

    useEffect (()=>{
        window.addEventListener("scroll", setPage);
        window.addEventListener("resize", setPageSize);
        return ()=>{
            window.removeEventListener("scroll", setPage);
            window.removeEventListener("resize", setPageSize);
        };
    });

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

    
    // let options = {
    //     anchors: ['sectionOne', 'sectionTwo', 'sectionThree', 'sectionFour', 'sectionFive'],
    //   };

    const project = useContext(DataContext);
    // console.log(skill[1])

    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        // autoplay: true,
        // autoplaySpeed: 5000
    };

    return(
    <div className="Combine slider">
        <section className="Home">
            <div className="main_title">
                <p className="title_position">
                    <h1>FRONT-END </h1><br/>
                    <h1>EDVELOPER</h1>
                </p>
                <h2 className="title_name">LEE GA YOUNG</h2>
            </div>
            <div className="home_background">
                <p className="img_wrap">
                    <img src='/img/main_bacground02.png' />
                </p>
            </div>
        </section>
        <section className="About">
            {/* <DropWater /> */}
            <div className="about_txt">
                <div className="page_title">
                    <h2>ABOUT</h2>
                </div>
                <div className="content">
                    <h2>
                    "흐르는 강물처럼 고이지 않고 끊임없이 움직이는 사람이 되자." 
                    </h2>
                    <h3>
                    새로운 도전을 즐기며, 경험을 통해 현재를 개선하고자 하는 주니어 개발자 이가영 입니다.
                    </h3>
                </div>
            </div>
            <div className="circle">
                <div>
                    <p className="circle_blue">
                        <img src="/img/circle_blue.png" />
                    </p>
                    <p className="circle_yellow">
                        <img src="/img/circle_yellow.png" />
                    </p>
                    <p className="circle_sky">
                        <img src="/img/circle_sky.png" />
                    </p>
                </div>
            </div>
        </section>
        <section className="Skill">
            {/* <DropWater /> */}
            <div>
                <div className="page_title">
                    <h2>SKILL</h2>
                </div>
            </div>
            <>
            {
                (isBubble01)
                ?
                <div className="modal_before" onClick={handleBubble01}>
                    <div className="skill_bubble bubble01">
                        <div className="skill_icon">
                            <p className="sk_icon html"></p>
                            <p className="sk_icon css"></p>
                        </div>
                        <div className="skill_modal modal01">
                            <SkillModal {...skill01}
                             />
                        </div>
                    </div>
                </div>
                :
                <div className={`skill_bubble bubble01 ${(isBubbleMoving)?'bubble_moving' : null}`}>
                    <div className="skill_icon">
                        <p className="sk_icon html"></p>
                        <p className="sk_icon css"></p>
                    </div>
                    <div>
                        <p className="bubble_film" onClick={handleBubble01}></p>
                    </div>
                </div>
                }
                </>
                <>
            {
                (isBubble02)
                ?
                <div className="modal_before" onClick={handleBubble02}>
                <div className="skill_bubble bubble02">
                    <div className="skill_icon">
                        <p className="sk_icon js"></p>
                        <p className="sk_icon ts"></p>
                    </div>
                    <div className="skill_modal modal02">
                        <SkillModal {...skill02} />
                    </div>
                </div>
                </div>
                :
                <div className={`skill_bubble bubble02 ${(isBubbleMoving)?'bubble_moving' : null}`}>
                    <div className="skill_icon">
                        <p className="sk_icon js"></p>
                        <p className="sk_icon ts"></p>
                    </div>
                    <div>
                        <p className="bubble_film" onClick={handleBubble02}></p>
                    </div>
                </div>
                }
            </>
            <>
            {
                (isBubble03)
                ?
                <div className="modal_before" onClick={handleBubble03}>
                <div className="skill_bubble bubble03">
                    <div className="skill_icon">
                        <p className="sk_icon jq"></p>
                        <p className="sk_icon react"></p>
                    </div>
                    <div className="skill_modal modal03">
                        <SkillModal />
                    </div>
                </div>
                </div>
                :
                <div className={`skill_bubble bubble03 ${(isBubbleMoving)?'bubble_moving' : null}`}>
                    <div className="skill_icon">
                        <p className="sk_icon jq"></p>
                        <p className="sk_icon react"></p>
                    </div>
                    <div>
                        <p className="bubble_film" onClick={handleBubble03}></p>
                    </div>
                </div>
}
            </>
            <>
            {
                (isBubble04)
                ?
                <div className="modal_before" onClick={handleBubble04}>
                <div className="skill_bubble bubble04">
                    <div className="skill_icon">
                        <p className="sk_icon node"></p>
                    </div>
                    <div className="skill_modal modal04">
                        <SkillModal />
                    </div>
                </div>
                </div>
                :
                <div className={`skill_bubble bubble04 ${(isBubbleMoving)?'bubble_moving' : null}`}>
                    <div className="skill_icon">
                        <p className="sk_icon node"></p>
                    </div>
                    <div>
                        <p className="bubble_film" onClick={handleBubble04}></p>
                    </div>
                </div>
}
            </>
            <>
            {
                (isBubble05)
                ?
                <div className="modal_before" onClick={handleBubble05}>
                <div className="skill_bubble bubble05">
                    <div className="skill_icon">
                        <p className="sk_icon ps"></p>
                        <p className="sk_icon figma"></p>
                    </div>
                    <div className="skill_modal modal05">
                        <SkillModal />
                    </div>
                </div>
                </div>
                :
                <div className={`skill_bubble bubble05 ${(isBubbleMoving)?'bubble_moving' : null}`}>
                    <div className="skill_icon">
                        <p className="sk_icon ps"></p>
                        <p className="sk_icon figma"></p>
                    </div>
                    <div>
                        <p className="bubble_film" onClick={handleBubble05}></p>
                    </div>
                </div>
}
            </>
            <>
            {
                (isBubble06)
                ?
                <div className="modal_before" onClick={handleBubble06}>
                <div className="skill_bubble bubble06">
                    <div className="skill_icon">
                        <p className="sk_icon gh"></p>
                    </div>
                    <div className="skill_modal modal06">
                        <SkillModal />
                    </div>
                </div>
                </div>
                :
                <div className={`skill_bubble bubble06 ${(isBubbleMoving)?'bubble_moving' : null}`}>
                    <div className="skill_icon">
                        <p className="sk_icon gh"></p>
                    </div>
                    <div>
                        <p className="bubble_film" onClick={handleBubble06}></p>
                    </div>
                </div>
}
            </>
        </section>
        <section className="ProjectList">
            
        <div>
                <p className="page_title">
                    <h2>PROJECT</h2>
                </p>
            </div>
            <ProjectSlideWrap {...settings} className="project_wrap">
                {project.map((it)=>(
                    <div key={it.id} className="project_card" onClick={()=>{handleProject(it)}}>
                        <p className="card_img">
                            <img src={`/img/pj_img${it.photo}.png`} />
                        </p> 
                        <h3>
                            {it.title}
                        </h3>
                        <div className="card_info">
                            <div className="card_left">
                                <p>SKILL</p>
                                <p>TOOLS</p>
                                <p>개발인원</p>
                                <p>사이트</p>
                            </div>
                            <div className="card_right">
                                <p>
                                    {it.skill}
                                </p>
                                <p>
                                    {it.tools}
                                </p>
                                <p>
                                    {it.peple}
                                </p>
                                <p>
                                    {it.site}
                                </p>
                            </div>
                        </div>
                    </div>
                ))} 
            </ProjectSlideWrap>
            {(isProject)
            ?
            <PJModal handleProject={handleProject} {...isPJSlected} />
            : null
            }
        </section>
        <section className="Contact"> 
        
        <div>
                <p className="page_title">
                    <h2>CONTACT</h2>
                </p>
            </div>
            {/* <DropWater /> */}
            <div className="bg_underwater">
                <img src="/img/bottom_wave.png" />
            </div>
            <div className="contact_cards">
                <div className="contact_info">
                    <p className="info_photo">
                        <img src="/img/8.png" />
                    </p>
                    <div className="info_txt">
                        <ul className="info_icon
                        ">
                            <li className="user">imo</li>
                            <li className="cake">imo</li>
                            <li className="phone">imo</li>
                            <li className="email">imo</li>
                        </ul>
                        <ul className="info_me">
                            <li>이가영</li>
                            <li>2000.02.17</li>
                            <li>010-2653-4617</li>
                            <li>rkdud0217@naver.com</li>
                        </ul>
                    </div>
                </div>
                <div className="contact_email">
                    <form>
                        <p>
                            <input type="text" />
                            <input type="text" />
                        </p>
                        <p>
                            <textarea></textarea>
                        </p>
                        <p><button>Send</button></p>
                    </form>
                </div>
            </div>
        </section>
    </div>
    )
};

export default Combine;

const Section = styled.section`
`;