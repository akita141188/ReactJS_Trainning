const DescriptionComponent = ({desc,sttDesc,updateSttDesc}) => {
    const txtSttDesc = ()=>{
        return (<h4 onDoubleClick={changeDesc} >{desc}</h4>)
    }
    const frmSttDesc = ()=>{
        return <textarea onBlur={changeDesc} >{desc}</textarea>
    }
    const showDesc = ()=>{
        if(sttDesc){
            return txtSttDesc();
        }else{
            return frmSttDesc();
        }
    }

    const changeDesc = ()=> updateSttDesc();
    return (
        <>
            {showDesc()}
        </>
    )
}

export default DescriptionComponent;