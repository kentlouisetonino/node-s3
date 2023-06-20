import MulterService from '../../services/MulterService';

describe('[ src/services/MulterService ]', () => {
  test('a. It should return a function type for memoryStorage.', (done) => {
    const memoryStorage = MulterService.memoryStorage;
    expect(typeof memoryStorage).toBe('object');
    done();
  });
});
