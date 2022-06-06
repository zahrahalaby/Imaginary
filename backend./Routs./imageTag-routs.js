const RepositoryImageTag = require('../Repository/RepositoryImageTag')
const express = require('express');
const router = express.Router();
const cors = require('cors');
const isDevelopment = true;
router.use(express.urlencoded({ extended: true }));
router.use(express.json());
if (isDevelopment) {
    router.use(cors({ origin: "http://localhost:3000", optionsSuccessStatus: 200 }));
}
function non() {

}

router.post("/addImageTag", isDevelopment ? cors() : nothing(), async (req, res) => {
    console.log(req.body, "immmggggggggggggg addd");
    RepositoryImageTag.addImageToTag(req.body)

        .then((result) => {
            console.log('@@@', req.body, '@@@@');
            if (result !== []) {
                res.send("added new Image to Tag");

            }
            else {
                res.send("unsuccessful adding new Image to Tag");
            }
            console.log(result);
        })
});

router.get("/getImageTag", isDevelopment ? cors() : nothing(), async (req, res) => {
    const result = await RepositoryImageTag.getAllImagesForTag();
    console.log("@@!", result);
    res.send(result);
})


// delete Tag by id
router.delete("/deleteImage/:id", isDevelopment ? cors() : nothing(), async (req, res) => {

    let result = await RepositoryImageTag.deleteImageById(req.params.id)
    if (result === true) {
        res.send("deleted the Image from tag")
    }
    else {
        res.send("Image with the provided id does not exist in imageTag")
    }
});
module.exports = router;
