import React from "react";

const TitleComponent = ({title,updateTitle,sttTitle,updateSttTitle}) => {

   const txtSttTitle = ()=>{
        return (<h4 
            onDoubleClick={changeSttTitle} >{title}</h4>)
    };
    const frmSttTitle = ()=>{
        return (<input
            id="title" 
            onChange={changeTitle}
            onBlur={changeSttTitle} 
            type="text" 
            name="text" 
            value={title}/>)
    }
    const showTitle = ()=>{
        if(sttTitle){
            return txtSttTitle();
        }else{
            return frmSttTitle()
        }
    }
    const changeSttTitle = ()=> updateSttTitle();
    const changeTitle = (e)=> updateTitle(e.target.value)

    //focus title khi dbclick
    React.useEffect(()=>{
        if(!sttTitle){
            document.getElementById("title").focus();
        }
    },[sttTitle])
    return (
        <>
            {showTitle()}
        </>
    )
}

export default TitleComponent;