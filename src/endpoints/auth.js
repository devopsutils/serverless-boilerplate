
const mockData = require('../../__mock__/api');
const { json, error } = require('../utils/response');
const { getBody } = require('../utils/request');

module.exports.login = (event, context, cb) => {
    const body = getBody(event);
    if (!body.email) return cb(null, error('Bad email'));;
    // https://snyk.io/blog/node-js-timing-attack-ccc-ctf/
    if (!body.password) return cb(null, error('Bad password'));;
    const { user, token } = mockData.user;
    cb(null, json({ user, token }));
};
module.exports.token = (event, context, cb) => {
    const body = getBody(event);
    if (!body.token) return cb(null, error('Missing token'));;
    const { user, token } = mockData.user;
    if (body.token === token) {
        return cb(null, json({ user, token }));
    }
    cb(null, error('Invalid Token'));
};
module.exports.register = (event, context, cb) => {
    const { user, token } = mockData.user;
    cb(null, json({ user, token }));
};