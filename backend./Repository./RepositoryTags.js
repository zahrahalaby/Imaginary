
const sql = require('mssql')

const connect = sql.connect('Server=localhost,1401;Database=CLOUDINARY;User Id=sa;Password=zahra@123321;Encrypt=false')

async function addTag(TagInfo) {
    try {
        await connect
        // create Request object
        console.log('!!!!!!!!!!!!!!!!!!!');
        console.log(TagInfo);
        // query to the database and get the records
        const result = await sql.query(`INSERT INTO Tags (userID,title,color) VALUES
         ('1','${TagInfo.title}','${TagInfo.color}')`);
        console.log(result.recordset);
        return 'every thing ok';
    }
    catch (err) {
        console.log(err);
        return err;
    }
}
exports.addTag = addTag;


async function getAllTags() {
    try {
        await connect
        // create Request object
        console.log('!!!!!!!!!!!!!!!!!!!');
        console.log();
        // query to the database and get the recordsCountry IN ('Germany')
        const result = await sql.query(`select  *  from Tags where userID = 1`)
        console.log(result.recordsets[0]);
        return result.recordset
    }
    catch (err) {
        console.log(err);
        return "oh no";
    }
}

exports.getAllTags = getAllTags;


async function deleteTagById(id) {

    try {
        await connect
        // create Request object

        console.log(id);
        // const userbyId = getUserById(theId)
        // console.log(userbyId);
        const result = await sql.query(`DELETE FROM Tags 
                                 WHERE Id='${id}';
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

exports.deleteTagById = deleteTagById;

async function updateTagById(tagInfo) {

    try {
        await connect
        // create Request object
        //console.log('!!!!!!!!!!!!!!!!!!!');
        console.log(tagInfo);
        let id = parseInt(tagInfo.id)
        let title = tagInfo.title
        let color = tagInfo.color

        console.log(id);
        console.log(title);
        const result = await sql.query(`UPDATE  Tags
                                     SET title='${title}' ,color='${color}'
                                    WHERE id='${id}'
        `);
        //console.log(result.rowsAffected[0]);
        return true;
    }
    catch (err) {
        //console.log(err);
        // return err;
    }
}

exports.updateTagById = updateTagById;
