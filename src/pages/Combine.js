import { useContext } from "react";
import ProjectSlideWrap from 'react-slick';
import { DataContext } from "../App";
import Header from "../components/Header";
import DropWater from "../components/DropWater";
import PJModal from "../components/PJModal";
import { SectionsContainer, Section } from "react-fullpage";
import { useState } from "react";


const Combine = () => {
    const [isBubble01, setIsBubble01] = useState(false);
    const [isBubble02, setIsBubble02] = useState(false);
    const [isBubble03, setIsBubble03] = useState(false);
    const [isBubble04, setIsBubble04] = useState(false);
    const [isBubble05, setIsBubble05] = useState(false);
    const [isBubble06, setIsBubble06] = useState(false);

    const handleBubble01 = () => {
        setIsBubble01(!isBubble01);
    };
    const handleBubble02 = () => {
        setIsBubble02(!isBubble02);
    };
    const handleBubble03 = () => {
        setIsBubble03(!isBubble03);
    };
    const handleBubble04 = () => {
        setIsBubble04(!isBubble04);
    };
    const handleBubble05 = () => {
        setIsBubble05(!isBubble05);
    };
    const handleBubble06 = () => {
        setIsBubble06(!isBubble06);
    };
    
    let options = {
        anchors: ['sectionOne', 'sectionTwo', 'sectionThree', 'sectionFour', 'sectionFive'],
      };

    const project = useContext(DataContext);

    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        // autoplay: true,
        // autoplaySpeed: 5000
    };

    return(
<SectionsContainer {...options}>
    <div className="Combine">
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
            <DropWater />
            <div className="about_txt">
                <p className="page_title">
                    <h2>ABOUT</h2>
                </p>
                <p className="content">
                    <h2>
                    "흐르는 강물처럼 고이지 않고 끊임없이 움직이는 사람이 되자." 
                    </h2>
                    <h3>
                    새로운 도전을 즐기며, 경험을 통해 현재를 개선하고자 하는 주니어 개발자 이가영 입니다.
                    </h3>
                </p>
            </div>
            <div className="circle">
                <div>
                    <p></p>
                    <p></p>
                    <p></p>
                </div>
            </div>
        </section>
        <section className="Skill">
            <DropWater />
            <div>
                <p className="page_title">
                    <h2>SKILL</h2>
                </p>
            </div>
            <>
            {
                (isBubble01)
                ?
            <div className="skill_bubble bubble01">
                <div className="skill_icon">
                    <p className="sk_icon html"></p>
                    <p className="sk_icon css"></p>
                </div>
            </div>
                :
                <div className="skill_bubble bubble01">
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
            <div className="skill_bubble bubble02">
                <div className="skill_icon">
                    <p className="sk_icon js"></p>
                    <p className="sk_icon ts"></p>
                </div>
            </div>
                :
                <div className="skill_bubble bubble02">
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
            <div className="skill_bubble bubble03">
                <div className="skill_icon">
                    <p className="sk_icon jq"></p>
                    <p className="sk_icon react"></p>
                </div>
            </div>
                :
                <div className="skill_bubble bubble03">
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
            <div className="skill_bubble bubble04">
                <div className="skill_icon">
                    <p className="sk_icon node"></p>
                </div>
            </div>
                :
                <div className="skill_bubble bubble04">
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
            <div className="skill_bubble bubble05">
                <div className="skill_icon">
                    <p className="sk_icon ps"></p>
                    <p className="sk_icon figma"></p>
                </div>
            </div>
                :
                <div className="skill_bubble bubble05">
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
            <div className="skill_bubble bubble06">
                <div className="skill_icon">
                    <p className="sk_icon gh"></p>
                </div>
            </div>
                :
                <div className="skill_bubble bubble06">
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
            {/* <div>
                <p>
                    <img src="/img/wave.png" />
                </p>
            </div> */}
            <DropWater />
            <ProjectSlideWrap {...settings} className="project_wrap">
                {project.map((it)=>(
                    <div key={it.id} className="project_card">
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
            {/* <PJModal /> */}
        </section>
        <section className="Contact"> 
            <DropWater />
            <div className="bg_underwater">
                <img src="/img/bottom_wave.png" />
            </div>
            <div className="contact_cards">
                <div className="contact_info">
                    <p>
                        <img />
                    </p>
                    <div>
                        <ul>
                            <li>imo</li>
                            <li>imo</li>
                            <li>imo</li>
                            <li>imo</li>
                        </ul>
                        <ul>
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
                        </p>
                        <p>
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
</SectionsContainer>
    )
};

export default Combine;