import { useState } from "react";
import Header from "../components/Header";
import SkillModal from "../components/SkillModal";



const skill01 = 
    {
      id : 0,
      title: 'html5 & css3',
      con1 : '웹 페이지를 원하는 구조로 스타일링 가능',
      con2 : '미디어 쿼리를 활용한 반응형 웹사이트 구현',
    };
  
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

const Skill = ()=> {
    const [isBubble01, setIsBubble01] = useState(false);
    const [isBubble02, setIsBubble02] = useState(false);
    const [isBubble03, setIsBubble03] = useState(false);
    const [isBubble04, setIsBubble04] = useState(false);
    const [isBubble05, setIsBubble05] = useState(false);
    const [isBubble06, setIsBubble06] = useState(false);
    const [isBubbleMoving, setIsBubbleMoving] = useState(true);

    
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

    return(
        <section className="Skill" id="Skill">
            <div>
                <div className="page_title">
                    <h2>SKILL</h2>
                </div>
            </div>
            <>
                {(isBubble01)
                ?
                <div className="skill_wrap bubble01">
                    <p>
                        <img src="/img/icon_html.png" />
                    </p>
                    <p>
                        <img src="/img/icon_css.png" />
                    </p>
                </div>
                :
                <div className="skill_wrap bubble01 bubble_moving">
                    <p>
                        <img src="/img/icon_html.png" />
                    </p>
                    <p>
                        <img src="/img/icon_css.png" />
                    </p>
                    <div className="film" onClick={handleBubble01}></div>
                </div>
                }
            </>
            <>
                {(isBubble02)
                ?
                <div className="skill_wrap bubble02">
                    <p>
                        <img src="/img/icon_jQuery.png" />
                    </p>
                    <p>
                        <img src="/img/icon_react.png" />
                    </p>
                </div>
                :
                <div className="skill_wrap bubble02 bubble_moving">
                    <p>
                        <img src="/img/icon_jQuery.png" />
                    </p>
                    <p>
                        <img src="/img/icon_react.png" />
                    </p>
                    <div className="film" onClick={handleBubble02}></div>
                </div>
                }
            </>
            <>
                {(isBubble03)
                ?
                <div className="skill_wrap bubble03">
                    <p>
                        <img src="/img/icon_javascript.png" />
                    </p>
                    <p>
                        <img src="/img/icon_typescript.png" />
                    </p>
                </div>
                :
                <div className="skill_wrap bubble03 bubble_moving">
                    <p>
                        <img src="/img/icon_javascript.png" />
                    </p>
                    <p>
                        <img src="/img/icon_typescript.png" />
                    </p>
                    <div className="film" onClick={handleBubble03}></div>
                </div>
                }
            </>
            <>
                {(isBubble04)
                ?
                <div className="skill_wrap bubble04">
                    <p>
                        <img src="/img/icon_html.png" />
                    </p>
                </div>
                :
                <div className="skill_wrap bubble04 bubble_moving">
                    <p>
                        <img src="/img/icon_html.png" />
                    </p>
                    <div className="film" onClick={handleBubble04}></div>
                </div>
                }
            </>
            <>
                {(isBubble05)
                ?
                <div className="skill_wrap bubble05">
                    <p>
                        <img src="/img/icon_html.png" />
                    </p>
                    <p>
                        <img src="/img/icon_figma.png" />
                    </p>
                </div>
                :
                <div className="skill_wrap bubble05 bubble_moving">
                    <p>
                        <img src="/img/icon_html.png" />
                    </p>
                    <p>
                        <img src="/img/icon_figma.png" />
                    </p>
                    <div className="film" onClick={handleBubble05}></div>
                </div>
                }
            </>
            <>
                {(isBubble06)
                ?
                <div className="skill_wrap bubble06">
                    <p>
                        <img src="/img/icon_github.png" />
                    </p>
                </div>
                :
                <div className="skill_wrap bubble06 bubble_moving">
                    <p>
                        <img src="/img/icon_github.png" />
                    </p>
                    <div className="film" onClick={handleBubble06}></div>
                </div>
                }
            </>
            {/* <>
            {
                (isBubble01)
                ?
                <div className="modal_before" onClick={handleBubble01}>
                <div className="skill_bubble bubble01">
                    <div className="skill_icon">
                        <p className="sk_icon html">
                            <img src="/img/icon_html.png" />
                        </p>
                        <p className="sk_icon css"></p>
                    </div>
                    <div className="skill_modal modal01">
                        <SkillModal {...skill01} />
                    </div>
                </div>
                </div>
                :
                <div className={`skill_bubble bubble01 ${(isBubbleMoving)?'bubble_moving' : null}`}>
                    <div className="skill_icon">
                        <p className="sk_icon html">
                            <img src="/img/icon_html.png" />
                        </p>
                        <p className="sk_icon css">
                            <img src="/img/icon_css.png" />
                        </p>
                    </div>
                    <div>
                        <p className="bubble_film" onClick={handleBubble01}></p>
                    </div>
                </div>
}
            </> */}
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
                        <SkillModal {...skill03} />
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
                        <SkillModal {...skill04} />
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
                        <SkillModal {...skill05} />
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
                        <SkillModal {...skill06} />
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
    )
};

export default Skill;