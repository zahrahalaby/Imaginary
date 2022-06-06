const app = require('express')();

const { query } = require('express');
const sql = require('mssql')

const connect = sql.connect('Server=localhost,1401;Database=CLOUDINARY;User Id=sa;Password=zahra@123321;Encrypt=false')

async function addImageToTag(info) {
    try {
        await connect

        //     const result = await sql.query(`INSERT INTO tagImage (tagID,imageID) VALUES
        //     ('${info.imgId}','${info.tagId}')`);
        //    console.log(result.rowsAffected);
        let imgid = parseInt(info.imgId)
        console.log(imgid, 'imgidimgidimgidimgid');


        const result = await sql.query(` IF NOT EXISTS(SELECT 1 FROM tagImage WHERE tagID = '${info.tagId}'and imageID ='${imgid}' )
        INSERT INTO tagImage(tagID, imageID)
        VALUES( '${info.tagId}','${imgid}')`);
        console.log(result.rowsAffected);

        return result.rowsAffected;
    }
    catch (err) {
        console.log(err);
        return err;
    }
}
exports.addImageToTag = addImageToTag;

async function getAllImagesForTag() {
    try {
        await connect

        const result = await sql.query(` SELECT Tags.color,
		Tags.title,
		Images.url,
		Tagimage.tagID,
		Tagimage.imageID 
FROM Tagimage
 JOIN Tags ON Tagimage.tagID = Tags.id
 JOIN Images ON Tagimage.imageID = Images.id;`)
        console.log(result.recordsets[0]);
        return result.recordset
    }
    catch (err) {
        console.log(err);
        return "oh no";
    }
}

exports.getAllImagesForTag = getAllImagesForTag;



async function deleteImageById(id) {

    try {
        await connect
        // create Request object

        console.log(id);
        // const userbyId = getUserById(theId)
        // console.log(userbyId);
        const result = await sql.query(`DELETE FROM Tagimage 
                                 WHERE imageID='${id}';
                                 `);
        console.log(result);
        if (result.rowsAffected[0] !== 0) {
            console.log(result.rowsAffected[0]);
            return true;
        }
        return false;
    }

    catch (err) {
        console.log(err);
        return err;
    }
}
exports.deleteImageById = deleteImageById;

