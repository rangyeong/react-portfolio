import styled from "styled-components";
import "../components/SkillModal.css";
const SkillModal = ({id, title, con1, con2}) => {
    return(
        <SkillModalWrap>
            <SkillModalInner>
                <p>
                    {title}</p>
                <p>
                    {con1}  
                </p>
                <p>
                    {con2}  
                </p>
            </SkillModalInner>
        </SkillModalWrap>
    )
};

export default SkillModal;

const SkillModalWrap = styled.div`
    padding: 30px;
    color: #fff;
    background-color: #1B1D29;
`;

const SkillModalInner = styled.div`

`;