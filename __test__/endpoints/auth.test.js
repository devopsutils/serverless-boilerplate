
import genres from '../../src/endpoints/genres';

describe('Handlers/Genres', () => {
  it('Returns the genres', (done) => {
    function callback(err, obj) {
      expect(err).toBeNull();
      expect(obj.statusCode).toBe(200);
      expect(obj.body.length).toBeGreaterThan(1)
      done();
    }
    genres.get_list('{}', {}, callback);
  });
});