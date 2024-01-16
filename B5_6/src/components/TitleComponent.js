const TitleComponent = ({title,sttTitle,updateSttTitle}) => {

   const txtSttTitle = ()=>{
        return (<h4 onDoubleClick={changeSttTitle} >{title}</h4>)
    };
    const frmSttTitle = ()=>{
        return (<input onBlur={changeSttTitle} type="text" name="text"/>)
    }
    const showTitle = ()=>{
        if(sttTitle){
            return txtSttTitle();
        }else{
            return frmSttTitle()
        }
    }
    const changeSttTitle = ()=> updateSttTitle();
    return (
        <>
            {showTitle()}
        </>
    )
}

export default TitleComponent;