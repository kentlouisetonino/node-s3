import EnvironmentService from '../../services/EnvironmentService';

describe('[ src/services/EnvironmentService ]', () => {
  test('a. It should return the right port.', (done) => {
    const port = EnvironmentService.PORT;
    expect(port).toBe(11000);
    done();
  });

  test('b. It should test if port is wrong.', (done) => {
    const port = EnvironmentService.PORT;
    expect(port === 12000).toBeFalsy();
    done();
  });
});
