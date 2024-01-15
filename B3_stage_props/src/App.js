import React from "react";
import SliderComponent from "./component/SliderComponent";
import SliderNumComponent from "./component/SliderNumComponent";



const App = () => {
  const [imgUrl, setImgUrl] = React.useState("images/1.jpg");
  const changeImg = (value)=> setImgUrl(value);

  return (
    <div id="slide">
      <SliderComponent imgUrl={imgUrl} />
      <SliderNumComponent
        imgUrl={imgUrl}
        changeImg = {changeImg}
      />
    </div>
  )
};

export default App;
