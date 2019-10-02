module.exports.getBody = (data) => {
    return JSON.parse(data.body);
};
module.exports.getAuthToken = (data) => {
    return data.headers['x-authentication'] || '';
};
