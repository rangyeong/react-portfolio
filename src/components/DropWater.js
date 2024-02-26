import { useEffect } from "react";
import { useState } from "react";
import reactFullpage from "react-fullpage";
import styled, { keyframes } from "styled-components";



const DropWater = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [fadeIn, setFadeIn] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
          const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    
          // 원하는 스크롤 위치
          const scrollThreshold = 500;
    
          if (scrollTop > scrollThreshold) {
            setIsScrolled(true);
          } else {
            setIsScrolled(false);
          }
        };
    
        window.addEventListener('scroll', handleScroll);
    
        return () => {
          window.removeEventListener('scroll', handleScroll);
        };
      }, [isScrolled]);

      
    return(
        <DropWaterWrap className="drop_water">
                <p>
                    <img src="/img/wave.png" className={isScrolled ? 'fadeIn' : ''} />
                </p>
        </DropWaterWrap>
    )
};

export default DropWater;

// const fadeInBackground = keyframes`
// from {
//     opacity: 0;
// }
// to {
//     opacity: 1;
// }
// `;

const DropWaterWrap = styled.div`

    position: absolute;
    top: 0;
    left: 0;
    z-index: -1; 
    overflow: hidden;
        img{
            width: 100%;   
            height: 100vh; 
        }
`;