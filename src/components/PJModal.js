import './PJModal.css';
import { useContext, useEffect } from "react";

const PJModal = ({
    handleProject,
    id,
    title,
    cate,
    photo,
    skill,
    tools,
    people,
    site,
    info
}) => {

    return (
        <div className="PJModal">
            <div className='modal_wrap'>
                <div className='pj_con_head'>
                    <p>project</p>
                    <p className='pj_modal_title'>
                        {title}
                    </p>
                    <p>
                        <button className='pj_close' onClick={handleProject}>x</button>
                    </p></div>
                <div className="modal_content">
                    <div className='pj_con_main main1'>
                        <div className='pj_photo'>
                            <p className='photo_pc'>
                                <span>pc size</span>
                                <img src={`/img/pj_img${photo}.png`} />
                            </p>
                            <div className='pj_photo_responsive'>
                                <p className='photo_mo'>
                                    <span>mobile size</span>
                                    <img src={`/img/pj_img${photo}_mo.png`} />
                                </p>
                                <p className='photo_ta'>
                                    <span>tablet size</span>
                                    <img src={`/img/pj_img${photo}_ta.png`} />
                                </p>
                            </div>
                        </div>
                        <div className='pj_txt'>
                            <p>
                                SKILLS :
                                <span>{skill}</span>
                            </p>
                            <p>
                                TOOLS :
                                <span>{tools}</span>
                            </p>
                            <p>
                                개발인원 :
                                <span>{people}</span>
                            </p>
                            <p>
                                배포 링크 :
                                <span>{site}</span>
                            </p>
                        </div>
                    </div>
                    <div className='pj_con_main main2'>
                        <p>
                            프로젝트 소개 : 
                            <span>{info}</span>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default PJModal;