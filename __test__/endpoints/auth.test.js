import auth from '../../src/endpoints/auth';

describe('Handlers/Auth', () => {
  it('Handles login', (done) => {
    expect.assertions(4);
    const event = {
      body: JSON.stringify({
        email: 'email',
        password: 'password',
      })
    };
    function callback(err, obj) {
      expect(err).toBeNull();
      expect(obj.statusCode).toBe(200);
      const body = JSON.parse(obj.body);
      expect(body).toHaveProperty('user');
      expect(body).toHaveProperty('token');
      done();
    }
    auth.login(event, {}, callback);
  });
  it('Handles login - bad password', (done) => {
    expect.assertions(2);
    const event = {
      body: JSON.stringify({
        email: 'email',
      })
    };
    function callback(err, obj) {
      expect(err).toBeNull();
      expect(obj.statusCode).toBe(500);
      done();
    }
    auth.login(event, {}, callback);
  });
  it('Handles login - bad email', (done) => {
    expect.assertions(2);
    const event = {
      body: JSON.stringify({
        password: 'password',
      })
    };
    function callback(err, obj) {
      expect(err).toBeNull();
      expect(obj.statusCode).toBe(500);
      done();
    }
    auth.login(event, {}, callback);
  });

  it('Handles token', (done) => {
    expect.assertions(4);
    const event = {
      body: JSON.stringify({
        token: 'abc123',
      })
    };
    function callback(err, obj) {
      expect(err).toBeNull();
      expect(obj.statusCode).toBe(200);
      const body = JSON.parse(obj.body);
      expect(body).toHaveProperty('user');
      expect(body).toHaveProperty('token');
      done();
    }
    auth.token(event, {}, callback);
  });

  it('Handles token - bad token', (done) => {
    expect.assertions(2);
    const event = {
      body: JSON.stringify({})
    };
    function callback(err, obj) {
      expect(err).toBeNull();
      expect(obj.statusCode).toBe(500);
      done();
    }
    auth.token(event, {}, callback);
  });

  it('Handles register', (done) => {
    expect.assertions(4);
    const event = {
      body: JSON.stringify({
        user: {},
        token: 'password',
      })
    };
    function callback(err, obj) {
      expect(err).toBeNull();
      expect(obj.statusCode).toBe(200);
      const body = JSON.parse(obj.body);
      expect(body).toHaveProperty('user');
      expect(body).toHaveProperty('token');
      done();
    }
    auth.register(event, {}, callback);
  });
});
