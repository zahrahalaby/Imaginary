
import '../App.css';
import { HexColorPicker } from "react-colorful";

const AddTagForm = ({ newTag, setNewTag, addTag, color, setColor }) => {

    return (
        <>
            {/* Add Tag And There Color*/}
            <div className="row">
                <div className="col">
                    <input
                        value={newTag}
                        onChange={(e) => setNewTag(e.target.value)}
                        className="tag-input"
                    />
                    <div className="btn-div">
                        <button
                            onClick={addTag}


                            className="btn"
                        >Add Tag</button>
                    </div>

                </div>
                <div>
                    <HexColorPicker color={color} onChange={setColor} />
                </div>

            </div>
            <br />
        </>
    )
}

export default AddTagForm;
