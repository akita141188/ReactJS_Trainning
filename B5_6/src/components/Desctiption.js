import React from "react"

const DescriptionComponent = ({desc,updateDesc,sttDesc,updateSttDesc}) => {
    const txtSttDesc = ()=>{
        return (<h4 onDoubleClick={changeSttDesc} >{desc}</h4>)
    }
    const frmSttDesc = ()=>{
        return <textarea 
        id="description"
        onChange={changeDesc}
        onBlur={changeSttDesc} >{desc}</textarea>
    }
    const showDesc = ()=>{
        if(sttDesc){
            return txtSttDesc();
        }else{
            return frmSttDesc();
        }
    }
    const changeSttDesc = ()=> updateSttDesc();
    const changeDesc = (e)=> updateDesc(e.target.value);  
    
    React.useEffect(()=>{
        if(!sttDesc){
            document.getElementById("description").focus();
        }
    },[sttDesc])
    return (
        <>
            {showDesc()}
        </>
    )
}

export default DescriptionComponent;