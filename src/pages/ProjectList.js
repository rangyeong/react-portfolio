import { useContext } from "react";
import ProjectSlideWrap from 'react-slick';
import { DataContext } from "../App";
import Header from "../components/Header";
import DropWater from "../components/DropWater";
import PJModal from "../components/PJModal";

const ProjectList = () => {

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
        <div className="ProjectList">
            <Header />
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
            <PJModal />
        </div>
    )
};

export default ProjectList;