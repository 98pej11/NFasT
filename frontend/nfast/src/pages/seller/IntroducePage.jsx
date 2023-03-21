import React from "react";
// import { autoPlay, virtualize } from "react-swipeable-views-utils";
// import SwipeableViews from "react-swipeable-views";
import Intro1 from "../../components/intropage/Intro1";
// import Intro2 from "../../components/intropage/Intro2";
// import Intro3 from "../../components/intropage/Intro3";

// const VirtualizeSwipeableViews = virtualize(SwipeableViews);
// const AutoPlaySwipeableViews = autoPlay(VirtualizeSwipeableViews);

function IntroducePage() {
  //   // eslint-disable-next-line no-unused-vars
  //   const [index, setIndex] = React.useState(0);

  //   // eslint-disable-next-line no-unused-vars
  //   const handleChangeIndex = (index) => {
  //     setIndex(index);
  //   };
  return (
    // <AutoPlaySwipeableViews onChangeIndex={handleChangeIndex}>
    <div>
      <div>
        <Intro1 />{" "}
      </div>
      {/* <div>
        <Intro2 />{" "}
      </div> */}
      {/* <div>
        <Intro3 />{" "}
      </div> */}
    </div>
  );
}

export default IntroducePage;
