module.exports.getBody = (data) => JSON.parse(data.body);
module.exports.getAuthToken = (data) => data.headers['x-authentication'] || null;
