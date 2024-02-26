import Header from "../components/Header";

const About = () => {
    return(
        <div className="About">
            <Header />
            <div>
                <p>
                    <img src="/img/wave.png" />
                </p>
            </div>
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
                <p></p>
                <p></p>
                <p></p>
            </div>
        </div>
    )
};

export default About;