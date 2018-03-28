const ServerModel = require('../models/servers');
const ErrorHelper = require('../helpers/ErrorHelper')

exports.save = (id, identifier, ip, name) => ServerModel.then(r =>
            r.findOne({id}).then(found => {
            console.log('found?', found);

            if(found){
                if(found.identifier !== identifier) throw ErrorHelper.format('Credentials doesn\'t match', 400);

                return r.updateOne({_id: found._id}, {$set: {identifier, ip, name, updated_at: Date.now()}})
            }

            // Not found, create record
                const now = Date.now();
            return r.insertOne({id, identifier, ip, name, created_at: now, updated_at: now})
        }));

exports.consult = (id, identifier) => findOne(id).then(found => {
    console.log('found?', found);

    if(found && found.identifier !== identifier) throw ErrorHelper.format('Credentials doesn\'t match', 400);

    return found;
});

function findOne(id) {
    console.log('Will find one',id);
    return ServerModel.then(r => {
        return r.findOne({id: parseInt(id)});
    })
}