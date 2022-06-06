import { useState, useEffect } from 'react';
import AddTagForm from './components/AddTagForm.jsx';
import UpdateForm from './components/UpdateForm.jsx';
import Tag from './components/Tag.jsx';
// import { v4 as uuidv4 } from 'uuid';
import { ImagesList } from './components/ImagesList';
import TagImagesList from './components/TagImagesList';

import './App.css';
const axios = require("axios");

function App() {

  // Tags (tag List) State
  const [tag, setTag] = useState([]);
  const [Imgs, setImgs] = useState([]);
  const [tagImage, setTagImage] = useState([]);
  const [updateColor, setUpdateColor] = useState([]);


  // Temp State

  const [newTag, setNewTag] = useState('');
  const [color, setColor] = useState('');
  const [updateData, setUpdateData] = useState(''
    //   {
    //   title: " ",
    //   color: " ",
    //   id: " "
    // }
  );

  axios.defaults.baseURL = 'http://localhost:1597/Tags';

  useEffect(() => {
    // Get Tags
    axios.get('/getTags')
      .then(response => {
        console.log(response.data);
        setTag(response.data);
      });

    // Get Tags And The Images Assigned To It

    axios.get('http://localhost:1597/tagImage/getImageTag')
      .then(response => {
        console.log(response.data);
        setTagImage(response.data);
      });




    // Get Images From Back
    axios.get('http://localhost:1597/Images/getImages')
      .then(response => {
        console.log(response.data, 'imgggg');
        //if there no images in back get them from picsum
        if (response.data.length === 0) {

          axios.get('https://picsum.photos/v2/list')
            .then(function (response1) {
              console.log(response1.data);
              setImgs(response.data);
              // save images in our database
              axios.post('http://localhost:1597/Images/AddImages', response1.data)

                .then(Response2 => {
                  console.log("inside axios post /AddImge (then) this is the respons from backend");

                  console.log(Response2);
                  // console.log(formInfo);

                  // alert('signed up successful');


                })
            })
            .catch(function (error) {
              console.log(error);
            });
          console.log(Imgs);
        }
        else {
          setImgs(response.data);
        }

      });

  }, []);




  // Add Tag 
  ///////////////////////////
  const addTag = () => {
    if (newTag) {
      // let num = uuidv4();
      let newEntringTag = { title: newTag, color: color }
      // setTag([...tag, newEntringTag])

      console.log(newEntringTag);
      axios.post('/AddTag', newEntringTag)
        .then(Response2 => {
          console.log("inside axios post /signup (then) this is the respons from backend");

          console.log(Response2);
          // console.log(formInfo);
          setNewTag('');
          setColor('');


        })
      window.location.reload(false)
    }
  }

  // Delete Tag 
  ///////////////////////////
  const deleteTag = (id) => {
    let newTags = tag.filter(Tag => Tag.id !== id)
    setTag(newTags);
    axios.delete('/deleteTag/' + id)

      .then(res1 => {
        console.log(res1.data);
      })
    alert("user has been deleted");
  }


  const cancelUpdate = () => {
    setUpdateData('');
  }

  // Change Tag For Update
  /////////////////////////
  const changeTag = (e) => {
    console.log(e, "eeeeeeeeeeeeeeeeeee");
    let newEntring = {
      id: updateData.id,
      title: e.target.value,
      color: e.target.value
    }
    setUpdateData(newEntring)
    console.log(updateData);
  }
  const changeTagcolor = (e) => {
    console.log(e, "eeeeeeeeee");

    setUpdateData({
      ...updateData,
      color: e
    })
    console.log(updateData);
  }

  // Update Tag
  ///////////////////////////
  const updateTag = () => {
    let filterRecords = [...tag].filter(Tag => Tag.id !== updateData.id);
    let updatedObject = [...filterRecords, updateData]
    setTag(updatedObject);
    console.log(updateData);

    axios.put('/updateTag', updateData)
      .then(res => {
        console.log(res.data);
        alert('info has been saved');
      })
    setUpdateData('');
    setColor('');
  }

  // Get All The Tags And There Images
  const getTagsAndImages = () => {
    axios.get('http://localhost:1597/tagImage/getImageTag')
      .then(response => {
        console.log(response.data);
        setTagImage(response.data);
      });
  }

  // Assign Image To Tag
  const addImageToTag = (info) => {

    console.log(info, "info in app ");
    axios.post('http://localhost:1597/tagImage/addImageTag', info)
      .then(res => {
        console.log(res.data);
      })
    setUpdateData('');
    setColor('');
  }

  // Delete Image From Tag
  const deleteImageFromTag = (imageid) => {
    axios.delete('http://localhost:1597/tagImage/deleteImage/' + imageid)

      .then(res1 => {
        console.log(res1.data);
      })
    window.location.reload(false)

  }


  return (
    <div className="containerApp">

      <br /><br />
      <h2>Imaginary</h2>
      <br /><br />
      <div className='photo-container'>

        <ImagesList
          Imgs={Imgs}
          tag={tag}
          addImageToTag={addImageToTag}
          tagImage={tagImage}
        />


      </div>
      <div className='add-tag-left'>

        {updateData && updateData ? (
          <UpdateForm
            updateData={updateData}
            changeTag={changeTag}
            updateTag={updateTag}
            cancelUpdate={cancelUpdate}
            setColor={setColor}
            color={color}
            changeTagcolor={changeTagcolor}
          />
        ) : (

          <AddTagForm
            newTag={newTag}
            setNewTag={setNewTag}
            addTag={addTag}
            color={color}
            setColor={setColor}
          />
        )}


        {/* Display tags */}
        {tag && tag.length ? '' : 'No Tags...'}

        <Tag
          tag={tag}
          setUpdateData={setUpdateData}
          deleteTag={deleteTag}
          color={color}

        />

      </div>
      <div>
        <TagImagesList
          tagImage={tagImage}
          tag={tag}
          getTagsAndImages={getTagsAndImages}
          deleteImageFromTag={deleteImageFromTag}
        />
      </div>

    </div>
  );
}


export default App;
