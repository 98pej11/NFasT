import React, { useRef, useEffect, useState } from "react";
import styled, { createGlobalStyle } from "styled-components";
import ProgressBar from "../../components/commons/ProgressBar";
import {
  Intro1,
  Intro2,
  Intro3,
  Intro4,
  Intro5,
  Intro6,
} from "../../components/intropage";

export default function IntroducePage() {
  const OuterPageBoxRef = useRef();
  // const [showTopBtn, setShowTopBtn] = useState(false);
  useEffect(() => {
    // eslint-disable-next-line no-unused-vars
    // const wheelHandler = (e) => {
    //   const { scrollTop } = OuterPageBoxRef.current;
    //   if (scrollTop > 0) {
    //     setShowTopBtn(true);
    //   } else {
    //     setShowTopBtn(false);
    //   }
    // };
    const boxRefCurrent = OuterPageBoxRef.current;
    boxRefCurrent.addEventListener("scroll", wheelHandler);
    return () => {
      boxRefCurrent.removeEventListener("scroll", wheelHandler);
    };
  }, []);
  const handleClick = () => {
    console.log("clicked");
    OuterPageBoxRef.current.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <>
      <GlobalStyles />
      <OuterPageBox ref={OuterPageBoxRef}>
        <ProgressBar OuterPageBoxRef={OuterPageBoxRef} />
        <Intro1 />
        <Intro2 />
        <Intro3 />
        <Intro4 />
        <Intro5 />
        <Intro6 />
        {/* <ContentPageBox id="contents">
          <SideBar />
          <ContentsWrapper>
            <Skill />
            <Project />
            <Education />
            <Experience />
            <Extra />
          </ContentsWrapper>
        </ContentPageBox> */}
        {/* {showTopBtn && <MovePageBtn handleClick={handleClick} />} */}
      </OuterPageBox>
    </>
  );
}

const GlobalStyles = createGlobalStyle`
  html {
    --color-main: #BCAFD4;
    --color-main-dark: #6C509F;
    --color-back: #efefef;
    --color-back-light: #F9F9F9;
    --color-back-dark: #DCDCDC;
    --color-detail-back : #f4f4f4;
    a {
      color: var(--color-main-dark);
      text-decoration-line: none;
    }
  }
`;
const OuterPageBox = styled.div`
  height: 100vh;
  overflow-y: auto;
`;

// const ContentPageBox = styled.div`
//   display: grid;
//   grid-template-columns: 1fr 3fr;

//   @media screen and (max-width: 682px) {
//     grid-template-columns: 1fr;
//   }
// `;
