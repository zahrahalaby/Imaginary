import React from 'react';


import { FaTrashAlt, FaPen } from "react-icons/fa";


const Tag = ({ tag, setUpdateData, deleteTag }) => {
    return (
        <>
            {tag && tag
                .sort((a, b) => a.id > b.id ? 1 : -1)
                .map((tag) => {
                    return (
                        <React.Fragment key={tag.id}>
                            <div className="tagBg" >
                                <div className={tag.status ? 'done' : ''}>
                                    <span className="tagText" style={{ color: tag.color }}>{tag.title}</span>
                                </div>
                                <div className="iconsWrap">

                                    {
                                        <span title="Edit"
                                            onClick={() => setUpdateData({
                                                id: tag.id,
                                                title: tag.title,
                                                color: tag.color
                                            })}
                                        >
                                            <FaPen />

                                        </span>
                                    }



                                    <span title="Delete"

                                    >
                                        <FaTrashAlt onClick={() => deleteTag(tag.id)} />
                                    </span>
                                </div>
                            </div>
                        </React.Fragment>
                    )
                })
            }
        </>
    )
}

export default Tag;
