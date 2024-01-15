import React from "react";
import LargeComponent from "./components/LagreComponent";
import SmallComponent from "./components/SmallComponent";



const App = () => {

  const [imgUrl, setImgUrl] = React.useState("images/img-1.jpg");
  const updateImg = (value) => setImgUrl(value)

  return (
    <>
      <div id="products">
        <LargeComponent imgUrl={imgUrl} />
        <SmallComponent
          updateImg={updateImg}
          imgUrl={imgUrl}
        />
      </div>
    </>
  )
}

export default App;
