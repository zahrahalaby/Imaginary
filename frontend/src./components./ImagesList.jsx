import React, { useState, useEffect } from 'react'
import { FaTags } from 'react-icons/fa';

export function ImagesList({ Imgs, tag, addImageToTag, tagImage }) {



    return (
        <div className="imgs">
            {Imgs.map((curr) => {

                return <Card1 key={curr.id} addImageToTag={addImageToTag} tagImage={tagImage} tag={tag} curr={curr}></Card1>
            })}
        </div>
    );
}
const Card1 = ({ curr, tag, addImageToTag, tagImage }) => {
    const [openTag, setOpenTag] = useState(false);

    const [isInclouds, setIsInclouds] = useState(true);

    useEffect(() => {
        if (tagImage.length != 0) {


            for (let i = 0; i < tagImage.length; i++) {
                if (tagImage[i].imageID === curr.id) {
                    console.log(tagImage[i].imageID, curr.id);
                    setIsInclouds(!isInclouds)
                }
            }
        }
    }, [])


    return isInclouds ? (

        <div className='imge-Card'><div key={curr.id} className='imgWrap' >
            <img className='img' src={curr.url} />
        </div>
            <div className='iconsWrap'>
                <span title="Tag" >
                    <FaTags className='opentag' onClick={() => {
                        setOpenTag(openTag ? false : true)
                    }} />

                </span>
                {openTag &&
                    <div className='tagsPopup' >
                        {tag.map((current) => {
                            return (
                                <div key={current.id} onClick={() => {
                                    let tagId = current.id
                                    let imgId = curr.id
                                    let info = { tagId, imgId }

                                    addImageToTag(info)
                                    console.log(info, "info in imgelist");
                                    window.location.reload(false)
                                }} style={{ color: current.color }}>



                                    {current.title}
                                </div>

                            );

                        })}
                    </div>
                }
            </div>
        </div>
    ) : null



}



