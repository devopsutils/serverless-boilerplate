const mockData = require('../../__mock__/api');
const { json } = require('../utils/response');

module.exports.get_list = (event, context, cb) => {
  const { movies } = mockData;
  return cb(null, json({ movies }));
};
