/*
Must contain:
-id
-identifier
-ip
-associated-name


*/

/*
var async = require('asyncawait/async');
var await = require('asyncawait/await');

const connectToMongo = async(
    function () {

        console.log('global MongoClient', !!global.MongoClient)
        console.log('global asd', global.asd)
        const r = await (global.MongoClient.collection('server'));
        console.log('[model server] r', !!r);
        return r;
    }
)


module.exports = connectToMongo();

*/


const Database = require('../helpers/db/mongodb');

module.exports = Database.then(db => {
 const myDB = db.db('serverip');
 return myDB.collection('server');
});
