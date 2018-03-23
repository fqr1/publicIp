const ErrorHelper = require('../helpers/ErrorHelper');
const serverService = require('../services/serverService');

exports.save = (req, res, next) => {
    console.log('save controller');
    const id = req.body.id;
    const identifier = req.body.identifier;
    const ip = req.body.ip;
    const name = req.body.name;

    try{
        ErrorHelper.verifyRequiredAndThrowException({id, identifier, ip, name});
        serverService.save(id, identifier, ip, name)
            .then(r => res.json(r))
            .catch(err => ErrorHelper.catchError(res, err));
    }catch(err){
        ErrorHelper.catchError(res, err);
    }
};
