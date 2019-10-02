import request from '../../src/utils/request';

describe('Utils/Request', () => {
  it('Handles getBody', () => {
    expect.assertions(1);
    const body = {
      email: 'email',
      password: 'password',
    };
    const event = {
      body: JSON.stringify(body)
    };
    expect(request.getBody(event)).toEqual(body);
  });
  it('Handles getAuthToken', () => {
    expect.assertions(1);
    const event = {
      headers: { 'x-authentication': 'abc' }
    };
    expect(request.getAuthToken(event)).toEqual('abc');
  });
  it('Handles getAuthToken - missing', () => {
    expect.assertions(1);
    const event = {
      headers: {}
    };
    expect(request.getAuthToken(event)).toBeNull();
  });
});
