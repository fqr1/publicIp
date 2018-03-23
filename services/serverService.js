const ServerModel = require('../models/servers');
const ErrorHelper = require('../helpers/ErrorHelper')

exports.save = (id, identifier, ip, name) => ServerModel.then(r =>
            r.findOne({id}).then(found => {
            console.log('found?', found);

            if(found){
                if(found.identifier !== identifier) throw ErrorHelper.format('Credentials doesn\'t match', 400);

                return r.updateOne({_id: found._id}, {$set: {id,identifier, ip}})
            }

            // Not found, create record
            return r.insertOne({id, identifier, ip, name})
        }));


