const mockData = require('../../__mock__/api');
const { json } = require('../utils/response');

module.exports.get_list = (event, context, cb) => {
  const { genres } = mockData;
  return cb(null, json({ genres }));
};
