
import React, { useEffect } from 'react'
import { FaTrashAlt } from "react-icons/fa";
import '../App.css';

export default function TagImagesList({ tag, tagImage, getTagsAndImages, deleteImageFromTag }) {
    console.log(tag);
    useEffect(() => {
        getTagsAndImages()
    }, []);
    console.log(tagImage);

    return (
        <div className="tagimg">
            {tag.map((curr) => {
                return <Card key={curr.id} deleteImageFromTag={deleteImageFromTag} tagImage={tagImage} curr={curr}></Card>
            })}
        </div>
    );
}
const Card = ({ curr, tagImage, deleteImageFromTag }) => {

    return (<div  >
        <div className='title' >
            <div style={{ color: curr.color }}>
                {curr.title}
            </div>
            {tagImage.map((current) => {

                if (current.tagID == curr.id) {
                    return (
                        <div>
                            <div key={curr.i} className='imgWrap'  >
                                <img className='img' src={current.url} alt='1' />

                            </div>

                            <div className='iconsWrap' >
                                <span title='Delete'>
                                    <FaTrashAlt onClick={() => deleteImageFromTag(current.imageID)} />
                                </span>
                            </div>
                        </div>
                    )

                }

            })}

        </div>

    </div>

    )
}


