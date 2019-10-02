
import movies from '../../src/endpoints/movies';

describe('Handlers/Movies', () => {
  it('Returns the movies', (done) => {
    expect.assertions(4);
    function callback(err, obj) {
      expect(err).toBeNull();
      expect(obj.statusCode).toBe(200);
      const body = JSON.parse(obj.body);
      expect(body).toHaveProperty('movies');
      expect(body.movies.length).toBeGreaterThan(1);
      done();
    }
    movies.get_list({}, {}, callback);
  });
});
