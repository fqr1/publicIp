const ErrorHelper = require('../helpers/ErrorHelper');
const serverService = require('../services/serverService');

exports.save = (req, res, next) => {
    console.log('save controller');
    const idRaw = req.body.id;
    const identifierRaw = req.body.identifier;
    const ip = req.body.ip;
    const name = req.body.name;

    try{
        const id = parseInt(idRaw);
        const identifier = parseInt(identifierRaw);

        ErrorHelper.verifyRequiredAndThrowException({id, identifier, ip, name});
        serverService.save(id, identifier, ip, name)
            .then(r => res.json(r))
            .catch(err => ErrorHelper.catchError(res, err));
    }catch(err){
        ErrorHelper.catchError(res, err);
    }
};

exports.consult = (req, res) => {
    console.log('consult controller');
    const idRaw = req.query.id;
    const identifierRaw = req.query.identifier;

    try{
        const id = parseInt(idRaw);
        const identifier = parseInt(identifierRaw);

        ErrorHelper.verifyRequiredAndThrowException({id, identifier});
        serverService.consult(id, identifier)
            .then(r => res.json(r))
            .catch(err => ErrorHelper.catchError(res, err));
    }catch(err){
        ErrorHelper.catchError(res, err);
    }
}
