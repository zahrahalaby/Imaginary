import { HexColorPicker } from "react-colorful";

const UpdateForm = ({ updateData, changeTag, updateTag, cancelUpdate, changeTagcolor }) => {
    // const setcolor = (color) => {
    //   setColor(color)
    // }

    return (
        <>
            {/* Update Tag */}
            <div className="row">
                <div className="col">
                    <input
                        className="tag-input"
                        value={updateData && updateData.title} name="title"
                        onChange={(e) => changeTag(e)}
                    />


                    {/* <input type="text" value={color} name="color"
            onChange={(e) => changeTagcolor(e)}
          /> */}

                </div>
                <div className="col-auto">
                    <button
                        onClick={updateTag}

                        className="btn"
                    >Update</button>
                    <button
                        onClick={cancelUpdate}
                        className="btn"
                    >Cancel</button>

                </div>



            </div>
            <HexColorPicker color={updateData.color}
                onChange={(e) => changeTagcolor(e)}
            />
            <br />
        </>
    )
}

export default UpdateForm;
