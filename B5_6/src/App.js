import React from "react";
import TitleComponent from "./components/TitleComponent";
import DescriptionComponent from "./components/Desctiption";



const App = () => {

  const [sttTitle, setSttTitle] = React.useState(true);
  const updateSttTitle = () => setSttTitle(!sttTitle)
  const [title, setTitle] = React.useState("What is Lorem Ipsum?")

  const [sttDesc, setSttDesc]= React.useState(true);
  const updateSttDesc = ()=> setSttDesc(!sttDesc);
  const [desc,setDesc]= React.useState(`Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`)
  return (
    <>
      <div id="main">
        <div className="content-item">
          <img src="car.jpg" />
          <TitleComponent
            title={title}
            sttTitle={sttTitle}
            updateSttTitle={updateSttTitle}
          />
          <DescriptionComponent
          desc={desc}
          sttDesc={sttDesc}
          updateSttDesc = {updateSttDesc}
          />
        </div>
      </div>


    </>
  )
}

export default App;
