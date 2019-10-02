import genres from '../../src/endpoints/genres';

describe('Handlers/Genres', () => {
  it('Returns the genres', (done) => {
    expect.assertions(4);
    function callback(err, obj) {
      expect(err).toBeNull();
      expect(obj.statusCode).toBe(200);
      const body = JSON.parse(obj.body);
      expect(body).toHaveProperty('genres');
      expect(body.genres.length).toBeGreaterThan(1);
      done();
    }
    genres.get_list({}, {}, callback);
  });
});
