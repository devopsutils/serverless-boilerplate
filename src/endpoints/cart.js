
const mockData = require('../../__mock__/api');
const { json, error } = require('../utils/response');
const { getAuthToken } = require('../utils/request');

module.exports.get = (event, context, cb) => {
    const authToken = getAuthToken(event);
    const {
        user: { token },
      } = mockData;

      // Migrate to authorizer
      if (authToken !== token) return cb(null, error('Authentication Required'));;

      const { cart } = mockData;
      return cb(null, json({ cart }));
};
module.exports.set = (event, context, cb) => {
    const {
        user: { token },
      } = mockData;

      // Migrate to authorizer
      if (authToken !== token) return cb(null, error('Authentication Required'));;

      return cb(null, json({ success: true }));
};