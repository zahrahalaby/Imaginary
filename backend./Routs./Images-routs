const RepositoryImages = require('../Repository/RepositoryImages')
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

router.post("/AddImages", isDevelopment ? cors() : nothing(), async (req, res) => {
    console.log(req.body, "immmggggg addd");
    RepositoryImages.AddImges(req.body)

        .then((result) => {
            console.log('@@@', req.body, '@@@@');
            if (result === 'every thing ok') {
                res.send("added all Images");

            }
            else {
                res.send("unsuccessful adding all Images");
            }
            console.log(result);
        })
});

router.get("/getImages", isDevelopment ? cors() : nothing(), async (req, res) => {
    const result = await RepositoryImages.getAllImages();
    console.log("@@!", result);
    res.send(result);
})

module.exports = router;
