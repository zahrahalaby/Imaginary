const app = require('express')();

const { query } = require('express');
const sql = require('mssql')

const connect = sql.connect('Server=localhost,1401;Database=CLOUDINARY;User Id=sa;Password=zahra@123321;Encrypt=false')

async function AddImges(ImgInfo) {
    try {
        await connect

        for (let i = 0; i < ImgInfo.length; i++) {

            const result = await sql.query(`INSERT INTO Images (userID,id,url) VALUES
         ('1','${ImgInfo[i].id}','${ImgInfo[i].download_url}')`);
            console.log(result.rowsAffected);
        }
        return 'every thing ok';
    }
    catch (err) {
        console.log(err);
        return err;
    }
}
exports.AddImges = AddImges;

async function getAllImages() {
    try {
        await connect

        const result = await sql.query(`select  *  from Images where userID = 1`)
        console.log(result.recordsets[0]);
        return result.recordset
    }
    catch (err) {
        console.log(err);
        return "oh no";
    }
}

exports.getAllImages = getAllImages;


