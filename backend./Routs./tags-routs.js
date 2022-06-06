const RepositoryTag = require('../Repository/RepositoryTags')
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


router.post("/AddTag", isDevelopment ? cors() : nothing(), async (req, res) => {
    console.log(req.body, "addddtaggggg");
    RepositoryTag.addTag(req.body)

        .then((result) => {
            if (result === 'every thing ok') {
                res.send("added new tag");

            }
            else {
                res.send("unsuccessful adding new tag");
            }
        })
});

router.get("/getTags", isDevelopment ? cors() : nothing(), async (req, res) => {
    const result = await RepositoryTag.getAllTags();
    res.send(result);
})


// delete Tag by id
router.delete("/deleteTag/:id", isDevelopment ? cors() : nothing(), async (req, res) => {

    let result = await RepositoryTag.deleteTagById(req.params.id)
    if (result === true) {
        res.send("deleted tag successfully")
    }
    else {
        res.send("tag with the provided id does not exist")
    }
});


router.put("/upDateTag", isDevelopment ? cors() : nothing(), async (req, res) => {

    const isAllOK = await RepositoryTag.updateTagById(req.body);

    if (isAllOK === true) {
        res.send("successfully updated tag");
    }
    else {
        res.send("unsuccessful to updating tag ");
    }
});


module.exports = router;


