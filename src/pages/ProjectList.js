import { useContext } from "react";
import ProjectSlideWrap from 'react-slick';
import { DataContext } from "../App";
import Header from "../components/Header";
import DropWater from "../components/DropWater";
import PJModal from "../components/PJModal";
import { useState } from "react";

const ProjectList = () => {
    
    const [isProject, setIsProject] = useState(false);
    const [isPJSlected, setIsPJSlected] = useState();

    const handleProject = (project) => {
        setIsProject(!isProject);
        setIsPJSlected(project);
        
    }

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
        <section className="ProjectList" id="Project">
            
        <div>
                <div className="page_title">
                    <h2>PROJECT</h2>
                </div>
            </div>
            <div className="pc">
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
                                <p>배포 링크</p>
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
            </div>
            <div className="project_wrap mo">
                    <ul>
                        <li>
                            <div className="pj_card">
                                <p className="pj_photo" onClick={()=>{handleProject(it)}}>
                                    <img src="/img/pj_img1.png" />
                                    <button>more</button>
                                </p>
                                <p className="pj_title">
                                    <h2>포트폴리오</h2>
                                </p>
                                <ul className="pj_txt">
                                    <li>
                                        <p>SKILL</p>
                                        <p>HTML5</p>
                                    </li>
                                    <li>
                                        <p>TOOLS</p>
                                        <p>VS CODE</p>
                                    </li>
                                    <li>
                                        <p>개발인원</p>
                                        <p>1명</p>
                                    </li>
                                    <li>
                                        <p>사이트</p>
                                        <p>https://</p>
                                    </li>
                                </ul>
                            </div>
                        </li>
                        <li>
                            <div className="pj_card">
                                <p className="pj_photo" onClick={()=>{handleProject(it)}}>
                                    <img src="/img/pj_img1.png" />
                                    <button>more</button>
                                </p>
                                <p className="pj_title">
                                    <h2>포트폴리오</h2>
                                </p>
                                <ul className="pj_txt">
                                    <li>
                                        <p>SKILL</p>
                                        <p>HTML5</p>
                                    </li>
                                    <li>
                                        <p>TOOLS</p>
                                        <p>VS CODE</p>
                                    </li>
                                    <li>
                                        <p>개발인원</p>
                                        <p>1명</p>
                                    </li>
                                    <li>
                                        <p>사이트</p>
                                        <p>https://</p>
                                    </li>
                                </ul>
                            </div>
                        </li>
                        <li>
                            <div className="pj_card">
                                <p className="pj_photo" onClick={()=>{handleProject(it)}}>
                                    <img src="/img/pj_img1.png" />
                                    <button>more</button>
                                </p>
                                <p className="pj_title">
                                    <h2>포트폴리오</h2>
                                </p>
                                <ul className="pj_txt">
                                    <li>
                                        <p>SKILL</p>
                                        <p>HTML5</p>
                                    </li>
                                    <li>
                                        <p>TOOLS</p>
                                        <p>VS CODE</p>
                                    </li>
                                    <li>
                                        <p>개발인원</p>
                                        <p>1명</p>
                                    </li>
                                    <li>
                                        <p>사이트</p>
                                        <p>https://</p>
                                    </li>
                                </ul>
                            </div>
                        </li>
                        <li>
                            <div className="pj_card">
                                <p className="pj_photo" onClick={()=>{handleProject(it)}}>
                                    <img src="/img/pj_img1.png" />
                                    <button>more</button>
                                </p>
                                <p className="pj_title">
                                    <h2>포트폴리오</h2>
                                </p>
                                <ul className="pj_txt">
                                    <li>
                                        <p>SKILL</p>
                                        <p>HTML5</p>
                                    </li>
                                    <li>
                                        <p>TOOLS</p>
                                        <p>VS CODE</p>
                                    </li>
                                    <li>
                                        <p>개발인원</p>
                                        <p>1명</p>
                                    </li>
                                    <li>
                                        <p>사이트</p>
                                        <p>https://</p>
                                    </li>
                                </ul>
                            </div>
                        </li>
                        <li>
                            <div className="pj_card">
                                <p className="pj_photo" onClick={()=>{handleProject(it)}}>
                                    <img src="/img/pj_img1.png" />
                                    <button>more</button>
                                </p>
                                <p className="pj_title">
                                    <h2>포트폴리오</h2>
                                </p>
                                <ul className="pj_txt">
                                    <li>
                                        <p>SKILL</p>
                                        <p>HTML5</p>
                                    </li>
                                    <li>
                                        <p>TOOLS</p>
                                        <p>VS CODE</p>
                                    </li>
                                    <li>
                                        <p>개발인원</p>
                                        <p>1명</p>
                                    </li>
                                    <li>
                                        <p>사이트</p>
                                        <p>https://</p>
                                    </li>
                                </ul>
                            </div>
                        </li>
                    </ul>
                </div>
            {(isProject)
            ?
            <PJModal handleProject={handleProject} {...isPJSlected} />
            : null
            }
        </section>
    )
};

export default ProjectList;