const SmallComponent = ({ updateImg,imgUrl }) => {
    const listImg = [
        "images/img-1.jpg",
        "images/img-2.jpg",
        "images/img-3.jpg",
    ]

    return (
        <>
            <div id="small">
                {
                    listImg.map((value) => {
                        return (
                            <img
                                onClick={() => updateImg(value)}
                                className={imgUrl==value?"active":""}
                                src={value} />
                        )
                    })
                }
            </div>

        </>
    )
}

export default SmallComponent;