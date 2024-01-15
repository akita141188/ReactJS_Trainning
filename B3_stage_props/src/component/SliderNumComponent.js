const SilderNumComponent = ({changeImg,imgUrl}) => {
const  listImg = [
        'images/1.jpg',
        'images/2.png',
        'images/3.jpg',
        'images/4.jpg',
        'images/5.png',
        'images/6.png',
        'images/7.png',
    ]
    return (
        <>
            <div id="listImg">
                <a>{
                    listImg.map((value)=>
                        <img
                            src={value}
                            onClick={()=>changeImg(value)}
                            className={value==imgUrl?"imglist active":"imglist"}
                        />
                    )
                }</a>
            </div>


        </>
    )

}


export default SilderNumComponent;