import Header from "../components/Header";

const Skill = ()=> {
    return(
        <div className="Skill">
            <Header />
            <div>
                <p>
                    <img src="/img/wave.png" />
                </p>
            </div>
            <div>
                <p className="page_title">
                    <h2>SKILL</h2>
                </p>
            </div>
            <div className="skill_bubble bubble01">
                <div className="skill_icon">
                    <p className="sk_icon html"></p>
                    <p className="sk_icon css"></p>
                </div>
                <div>
                    <p className="bubble_film"></p>
                </div>
            </div>
            <div className="skill_bubble bubble02">
                <div className="skill_icon">
                    <p className="sk_icon js"></p>
                    <p className="sk_icon ts"></p>
                </div>
                <div>
                    <p className="bubble_film"></p>
                </div>
            </div>
            <div className="skill_bubble bubble03">
                <div className="skill_icon">
                    <p className="sk_icon jq"></p>
                    <p className="sk_icon react"></p>
                </div>
                <div>
                    <p className="bubble_film"></p>
                </div>
            </div>
            <div className="skill_bubble bubble04">
                <div className="skill_icon">
                    <p className="sk_icon node"></p>
                </div>
                <div>
                    <p className="bubble_film"></p>
                </div>
            </div>
            <div className="skill_bubble bubble05">
                <div className="skill_icon">
                    <p className="sk_icon ps"></p>
                    <p className="sk_icon figma"></p>
                </div>
                <div>
                    <p className="bubble_film"></p>
                </div>
            </div>
            <div className="skill_bubble bubble06">
                <div className="skill_icon">
                    <p className="sk_icon gh"></p>
                </div>
                <div>
                    <p className="bubble_film"></p>
                </div>
            </div>
        </div>
    )
};

export default Skill;