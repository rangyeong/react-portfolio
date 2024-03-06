import Header from "../components/Header";

const About = () => {
    return(
        <section className="About" id="About">
            {/* <DropWater /> */}
            <div className="about_txt">
                <div className="page_title">
                    <h2>ABOUT</h2>
                </div>
                <div className="content">
                    <h2>
                    "흐르는 강물처럼 고이지 않고
                    <br />
                     끊임없이 움직이는 사람이 되자." 
                    </h2>
                    <h3>
                        <p>새로운 도전을 즐기며</p>
                        <p>경험을 통해 현재를 개선하고자 하는</p>
                        <p>주니어 개발자 이가영 입니다.</p>
                    </h3>
                </div>
            </div>
            <div className="circle">
                <div>
                    <p className="circle_blue">
                        <span>호기심</span>
                        <img src="/img/circle_blue.png" />
                    </p>
                    <p className="circle_yellow">
                        <span>도전</span>
                        <img src="/img/circle_yellow.png" />
                    </p>
                    <p className="circle_sky">
                        <span>집중</span>
                        <img src="/img/circle_sky.png" />
                    </p>
                </div>
            </div>
        </section>
    )
};

export default About;